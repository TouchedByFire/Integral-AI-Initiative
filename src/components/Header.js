import { useState, useRef, useEffect, useCallback } from "react";
import { BrainCircuit, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { pages } from "../data/navigation";
import { searchIndex } from "../data/searchIndex";

/** Returns up to `limit` results matching all words in `query`. */
function runSearch(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const words = q.split(/\s+/).filter(Boolean);

  // Score entries: count how many words match
  const scored = searchIndex
    .map((entry) => {
      const haystack = entry.text.toLowerCase();
      const hits = words.filter((w) => haystack.includes(w)).length;
      return { ...entry, hits };
    })
    .filter((e) => e.hits > 0)
    .sort((a, b) => b.hits - a.hits);

  // Deduplicate: keep best-scoring entry per (pageId, section) pair
  const seen = new Set();
  const deduped = [];
  for (const entry of scored) {
    const key = `${entry.pageId}::${entry.section}`;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(entry);
    }
    if (deduped.length >= 8) break;
  }
  return deduped;
}

/** Highlight matching words in a text snippet */
function Highlight({ text, query }) {
  const words = query.trim().split(/\s+/).filter((w) => w.length >= 2);
  if (!words.length) return <span>{text}</span>;
  const regex = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} style={{ background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '3px', padding: '0 2px' }}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export function Header({ activePage, menuOpen, onMenuToggle, onNavigate }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Run search whenever query changes
  useEffect(() => {
    setResults(runSearch(query));
    setActiveIdx(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setQuery("");
    setResults([]);
    setActiveIdx(-1);
  }, []);

  const handleSelect = useCallback((pageId) => {
    onNavigate(pageId);
    closeSearch();
  }, [onNavigate, closeSearch]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { closeSearch(); return; }
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      handleSelect(results[activeIdx].pageId);
    }
  };

  return (
    <motion.header
      className="main-header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="nav-container">
        <button className="brand" onClick={() => onNavigate("home")} aria-label="Go to home">
          <span className="brand-icon">
            <BrainCircuit size={32} />
          </span>
          <div>
            <h1>Integral AI</h1>
            <small>Initiative</small>
          </div>
        </button>

        <button
          className="mobile-menu-button"
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={activePage === page.id ? "active" : ""}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>

        {/* Search widget — outside <nav> so overflow-x:auto doesn't clip the dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', flexShrink: 0 }}>
          <AnimatePresence>
            {searchOpen && (
              <motion.input
                ref={inputRef}
                initial={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                animate={{ width: 220, opacity: 1, paddingLeft: '1rem', paddingRight: '1rem' }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
                transition={{ duration: 0.2 }}
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  borderRadius: '20px',
                  border: '1px solid var(--border-highlight)',
                  outline: 'none',
                  background: 'var(--bg-surface-light)',
                  color: 'var(--text-main)',
                  marginRight: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  height: '36px',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
                }}
                autoFocus
              />
            )}
          </AnimatePresence>

          <button
            aria-label={searchOpen ? "Close search" : "Search site"}
            title={searchOpen ? "Close" : "Search"}
            onClick={() => {
              if (searchOpen) { closeSearch(); } else { setSearchOpen(true); }
            }}
            style={{ padding: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '40px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* Results dropdown */}
          <AnimatePresence>
            {searchOpen && results.length > 0 && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: '360px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  zIndex: 9999,
                  overflow: 'hidden',
                }}
              >
                {/* Header bar */}
                <div style={{ padding: '0.6rem 1rem', borderBottom: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </div>

                {/* Result rows */}
                <ul style={{ listStyle: 'none', margin: 0, padding: '0.5rem 0', maxHeight: '420px', overflowY: 'auto' }}>
                  {results.map((r, i) => (
                    <li key={`${r.pageId}-${r.section}-${i}`}>
                      <button
                        onClick={() => handleSelect(r.pageId)}
                        onMouseEnter={() => setActiveIdx(i)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.75rem 1rem',
                          background: activeIdx === i ? 'var(--bg-surface-light)' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          borderLeft: activeIdx === i ? '3px solid var(--primary)' : '3px solid transparent',
                          transition: 'background 0.15s, border-color 0.15s',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--primary)', background: 'var(--primary-glow)', borderRadius: '4px', padding: '0.1rem 0.4rem' }}>
                            {r.pageLabel}
                          </span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            {r.section}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          <Highlight text={r.text.slice(0, 120)} query={query} />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* No results state */}
          <AnimatePresence>
            {searchOpen && query.trim().length >= 2 && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: '280px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  padding: '1.25rem 1rem',
                  zIndex: 9999,
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                }}
              >
                No results for <strong style={{ color: 'var(--text-main)' }}>"{query}"</strong>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.header>
  );
}

