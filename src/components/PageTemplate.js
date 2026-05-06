import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { ArrowRight, BookOpenCheck, Trophy, CheckCircle2, PartyPopper, ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "./Footer";
import { pages, statCards } from "../data/navigation";

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 40, damping: 12 } }
};

function StatCounter({ value }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px 0px -100px 0px" });

  useEffect(() => {
    let timeout;
    let controls;

    const numericPart = value.match(/\d+/);
    if (!numericPart) {
      if (nodeRef.current) nodeRef.current.textContent = value;
      return;
    }
    
    const target = parseInt(numericPart[0]);
    const suffix = value.replace(/\d+/, '');
    const prefix = value.split(numericPart[0])[0];

    const runAnimation = () => {
      controls = animate(0, target, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.floor(latest) + suffix;
          }
        },
        onComplete: () => {
          timeout = setTimeout(runAnimation, 7000);
        }
      });
    };

    if (isInView && nodeRef.current) {
      runAnimation();
    }

    return () => {
      if (controls) controls.stop();
      if (timeout) clearTimeout(timeout);
    };
  }, [isInView, value]);

  return <span ref={nodeRef}>{value.match(/\d+/) ? '0' : value}</span>;
}

function RoboticsCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = (next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  // Auto-scroll: advances every 2s, resets on manual nav, pauses on hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % images.length);
    }, 2000);
    return () => clearInterval(id);
  }, [paused, current, images.length]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 30 } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <div
      style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-glow)', userSelect: 'none' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden', background: 'var(--bg-surface)' }}>
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} ${current + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AnimatePresence>

        {/* Gradient overlay for arrows */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.18) 100%)', pointerEvents: 'none' }} />

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous image"
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.15)', color: 'var(--primary)', transition: 'background 0.2s, transform 0.2s', zIndex: 2 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.15)', color: 'var(--primary)', transition: 'background 0.2s, transform 0.2s', zIndex: 2 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide counter */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.45)', color: 'white', borderRadius: '20px', padding: '0.25rem 0.75rem', fontSize: '0.8rem', fontWeight: 600, zIndex: 2 }}>
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: 'var(--bg-surface)' }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{ width: i === current ? '28px' : '10px', height: '10px', borderRadius: '5px', border: 'none', background: i === current ? 'var(--primary)' : 'var(--border-highlight)', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }}
          />
        ))}
      </div>
    </div>
  );
}

export function PageTemplate({ activePage, content, icon: PageIcon, onNavigate, children }) {
  const nextPage = pages[(pages.findIndex((page) => page.id === activePage) + 1) % pages.length].id;
  const featureItems =
    content.highlights ||
    content.cards?.slice(0, 3).map(([title, text]) => ({ title, text, icon: BookOpenCheck })) ||
    [];
  
  const displayStatCards = [...statCards];
  if (activePage === "students" || activePage === "faculty") {
    // 1. Remove AI Culture
    const aiCultureIdx = displayStatCards.findIndex(s => s[1].includes("Culture"));
    if (aiCultureIdx > -1) displayStatCards.splice(aiCultureIdx, 1);
    
    // 2. Calculate dynamic count
    let totalCount = 0;
    if (content.engagement?.categories) {
      content.engagement.categories.forEach(cat => {
        totalCount += (cat.items?.length || 0);
      });
    }
    if (content.hackathons?.events) {
      totalCount += content.hackathons.events.length;
    }

    // 3. Add dynamic card based on page
    if (activePage === "students") {
      displayStatCards.push([totalCount.toString(), "Activities", "students", "activities"]);
    } else {
      displayStatCards.push([totalCount.toString(), "FDP", "faculty", "activities"]);
    }
  }

  if (activePage === "research") {
    const aiCultureIdx = displayStatCards.findIndex(s => s[1].includes("Culture"));
    if (aiCultureIdx > -1) displayStatCards.splice(aiCultureIdx, 1);
    displayStatCards.push(["50+", "Research Papers", "research", "research-activities"]);
  }

  return (
    <main className="app-container">
      {/* Immersive Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.92 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={content.image}
            alt="Hero Background"
          />
          {/* Decorative Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-data"
              style={{
                position: 'absolute',
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                background: i % 2 === 0 ? 'var(--secondary)' : 'var(--primary)',
                boxShadow: `0 0 ${8 + Math.random() * 12}px ${i % 2 === 0 ? 'var(--secondary)' : 'var(--primary)'}`,
                borderRadius: '50%',
                animation: `float-particle ${4 + Math.random() * 6}s linear infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}

          {/* Decorative rings */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '120px',
            height: '120px',
            border: '2px solid rgba(17, 103, 216, 0.15)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '8%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(24, 165, 201, 0.15)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '2s'
          }} />
        </div>

        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={content.heroMaxWidth ? { maxWidth: content.heroMaxWidth } : undefined}
        >
          <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            <div className="pulse-icon" style={{ display: 'flex', padding: '8px', background: 'var(--primary-glow)' }}>
              <PageIcon size={20} />
            </div>
            <span>{content.eyebrow}</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="gradient-text">
            {content.title}
          </motion.h2>
          <motion.p variants={fadeInUp}>
            {content.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Band (Glassmorphism) */}
      <motion.section
        className="stats-band"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', padding: '2rem 2rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative gradient stripe */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--gradient-primary)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite'
        }} />
        {displayStatCards.map(([value, label, target, sectionId], index) => (
          <motion.button
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onNavigate(target, sectionId)}
            style={{ 
              background: 'none', 
              border: 'none', 
              textAlign: 'center', 
              cursor: 'pointer',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              transition: 'var(--transition-smooth)'
            }}
            whileHover={{ scale: 1.05, background: 'rgba(17, 103, 216, 0.05)' }}
          >
            <strong className="gradient-text" style={{ fontSize: value.length > 8 ? '1.8rem' : '3rem', display: 'block', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              <StatCounter value={value} />
            </strong>
            <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
          </motion.button>
        ))}
      </motion.section>

      {/* Main Content Areas */}
      <div className="main-content">

        {/* Overview Section */}
        <motion.section
          id="overview"
          className="bento-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Overview</motion.span>
            <motion.h2 variants={fadeInUp}>{content.title}</motion.h2>
          </div>

          <div className="overview-layout">
            <motion.article variants={scaleUp} className="glass-panel glass-panel--primary overview-panel">
              <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{content.intro}</p>
              {content.body && <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{content.body}</p>}
            </motion.article>

            {featureItems.length > 0 && (
              <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {featureItems.map(({ icon: FeatureIcon = BookOpenCheck, title, text }, idx) => (
                  <motion.article variants={fadeInUp} key={title} className={`glass-panel ${idx % 2 === 0 ? 'glass-panel--secondary' : 'glass-panel--teal'}`} style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'var(--bg-surface-light)', padding: '1rem', borderRadius: '12px', color: 'var(--secondary)' }}>
                      <FeatureIcon size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{text}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Global Recognition */}
        {content.globalRecognition && (
          <motion.section
            id="recognition"
            className="achievement-section bento-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleUp} className="glass-panel glass-panel--gold" style={{ position: 'relative', overflow: 'hidden', padding: '3rem' }}>
              {/* Celebratory Icon Background */}
              <div style={{ position: 'absolute', top: '-40px', left: '-40px', opacity: 0.05, color: '#fbbf24', transform: 'rotate(-15deg)' }}>
                <PartyPopper size={300} />
              </div>

              {/* Centered Heading inside Card */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>Achievement</span>
                <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '2.5rem' }}>
                  <Trophy size={36} color="#fbbf24" fill="#fcd34d" /> {content.globalRecognition.title}
                </h2>
              </div>

              {/* Two Column Content */}
              <div className="recognition-layout">
                <div className="recognition-copy">
                  {content.globalRecognition.subtitle && (
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 600 }}>
                      {content.globalRecognition.subtitle}
                    </h3>
                  )}

                  {content.globalRecognition.category && (
                    <div style={{ display: 'inline-block', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--border-highlight)', color: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                      Category: {content.globalRecognition.category}
                    </div>
                  )}

                  <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                    {content.globalRecognition.text}
                  </p>

                  {activePage === "home" && (
                    <a href="https://www.iul.ac.in/achievements.aspx" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex' }}>Learn More <ArrowRight size={18} /></a>
                  )}
                </div>

                <div className="recognition-media">
                  <img src={content.globalRecognition.image} alt={content.globalRecognition.title} style={{ width: '100%', height: 'auto', border: '2px solid rgba(251, 191, 36, 0.2)', boxShadow: '0 0 30px rgba(251, 191, 36, 0.1)', borderRadius: 'var(--radius)' }} />
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Vision & Mission */}
        {content.visionMission && activePage === "home" && (
          <motion.section
            className="vision-mission-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="vm-grid">
              <motion.article variants={fadeInUp} className="vm-card glass-panel glass-panel--secondary">
                <h3>Vision</h3>
                <p>{content.visionMission.vision}</p>
              </motion.article>
              <motion.article variants={fadeInUp} className="vm-card glass-panel glass-panel--accent">
                <h3>Mission</h3>
                <ul>
                  {content.visionMission.mission.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={20} className="icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>
          </motion.section>
        )}

        {/* X + AI Disciplines Section */}
        {content.disciplines && (
          <motion.section
            id="disciplines"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Multidisciplinary</motion.span>
              <motion.h2 variants={fadeInUp}>{content.disciplines.title}</motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
                {content.disciplines.description}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}
            >
              {content.disciplines.subjects.map((subject) => (
                <motion.div
                  key={subject.dept}
                  variants={fadeInUp}
                  className="glass-panel"
                  style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ textAlign: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', fontFamily: 'var(--font-display)', margin: 0 }}>{subject.dept}</h4>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {subject.programs.map((prog) => (
                      <li key={prog} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        <CheckCircle2 size={14} style={{ marginTop: '3px', color: 'var(--accent)', flexShrink: 0 }} />
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {content.disciplines.outro && (
              <motion.p
                variants={fadeInUp}
                style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}
              >
                {content.disciplines.outro}
              </motion.p>
            )}
          </motion.section>
        )}

        {/* Program Details (for other pages) */}
        {content.sections && !content.sectionsAtBottom && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Focus</motion.span>
              <motion.h2 variants={fadeInUp}>Program Details</motion.h2>
            </div>
            <div className="bento-grid details-grid">
              {content.sections.map((section, idx) => (
                <motion.article
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  variants={fadeInUp}
                  className={`glass-panel ${section.fullWidth ? 'mission-card' : ''} ${(activePage === "home" && section.title === "Core Components") || (activePage === "iucare" && section.title === "Core Laboratory Ecosystem") ? "mission-card" : ""} ${idx % 2 === 0 ? 'glass-panel--violet' : 'glass-panel--teal'}`}
                  style={{ padding: '2rem' }}
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{section.title}</h3>
                  {section.text && <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{section.text}</p>}
                  {section.items && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {section.items.map((item) => (
                        <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                          <CheckCircle2 size={16} style={{ marginTop: '4px', color: 'var(--accent)', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Industry Collaboration */}
        {content.industryCollaboration && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="glass-panel glass-panel--primary"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', padding: '2.5rem' }}
            >
              {/* Text side */}
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>
                  {content.industryCollaboration.title}
                </h3>
                {content.industryCollaboration.intro && (
                  <p style={{ color: 'var(--text-muted)' }}>{content.industryCollaboration.intro}</p>
                )}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {content.industryCollaboration.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} style={{ marginTop: '4px', color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 2×2 icon grid */}
              <div style={{ flex: '1 1 260px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {content.industryCollaboration.icons.map((icon) => (
                  <div key={icon.alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'var(--bg-surface-light)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                    <img src={icon.src} alt={icon.alt} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}


        {/* Research & Innovation Mandate */}
        {content.mandate && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.article
              variants={scaleUp}
              className="glass-panel glass-panel--violet mission-card"
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{content.mandate.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {content.mandate.items.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} style={{ marginTop: '4px', color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.section>
        )}

        {/* Global Positioning */}
        {content.globalPositioning && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="glass-panel glass-panel--primary"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', padding: '2.5rem' }}
            >
              {/* Text side */}
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>
                  {content.globalPositioning.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
                  {content.globalPositioning.text}
                </p>
                {content.globalPositioning.badge && (
                  <span style={{ alignSelf: 'flex-start', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.9rem', fontWeight: 600 }}>
                    {content.globalPositioning.badge}
                  </span>
                )}
              </div>
              {/* Certificate image */}
              <motion.div
                style={{ flex: '0 1 280px', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-glow)' }}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
              >
                <img
                  src={content.globalPositioning.image}
                  alt="WURI Rankings 2024"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* Hackathons & Innovation Challenges */}
        {content.hackathons && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Innovation</motion.span>
              <motion.h2 variants={fadeInUp}>{content.hackathons.sectionTitle}</motion.h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {content.hackathons.events.map((event, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={event.title}
                    variants={fadeInUp}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'stretch', flexDirection: isEven ? 'row-reverse' : 'row' }}
                  >
                    {/* Image Panel */}
                    <div
                      style={{ flex: '1 1 360px', borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: '320px', boxShadow: 'var(--shadow-glow)' }}
                    >
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        animate={{ scale: 1.12 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transformOrigin: 'center center' }}
                      />
                    </div>

                    {/* Text Panel */}
                    <div className={`glass-panel ${index % 2 === 0 ? 'glass-panel--secondary' : 'glass-panel--violet'}`} style={{ flex: '1 1 360px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div>
                        <span style={{ display: 'inline-block', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '6px', padding: '0.25rem 0.75rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                          {content.hackathons.eventLabel || 'Hackathon'} {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '0.75rem' }}>{event.title}</h3>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface-light)', border: '1px solid var(--border)', borderRadius: '20px', padding: '0.35rem 0.9rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 500 }}>
                          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>📅</span> {event.date}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-surface-light)', border: '1px solid var(--border)', borderRadius: '20px', padding: '0.35rem 0.9rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 500 }}>
                          <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>📍</span> {event.venue}
                        </div>
                      </div>

                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, textAlign: 'justify' }}>{event.description}</p>

                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '0.6rem' }}>Impact</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75, fontStyle: 'italic', textAlign: 'justify' }}>{event.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Student Engagement / Faculty Development in AI — mid-page */}
        {content.engagement && !content.engagementAtBottom && (
          <motion.section
            id="activities"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Activities</motion.span>
              <motion.h2 variants={fadeInUp}>{content.engagement.sectionTitle}</motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}
            >
              {content.engagement.categories.map((cat) => (
                <motion.div
                  key={cat.label}
                  variants={fadeInUp}
                  className="glass-panel glass-panel--teal"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: '1 1 280px', maxWidth: '380px' }}
                >
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '2px solid', borderColor: cat.color }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{cat.icon}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{cat.label}</h3>
                  </div>

                  {/* Items */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {cat.items.map((item) => (
                      <li key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>{item.name}</span>
                        <span style={{
                          display: 'inline-block',
                          alignSelf: 'flex-start',
                          background: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${cat.color} 30%, transparent)`,
                          color: cat.color,
                          borderRadius: '20px',
                          padding: '0.15rem 0.6rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.3px',
                        }}>{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Student Pillars — icon cards */}
        {content.pillars && (
          <motion.section
            id="pillars"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={staggerContainer}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}
            >
              {content.pillars.items.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  className="glass-panel glass-panel--teal"
                  style={{ flex: '1 1 200px', maxWidth: '260px', padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}
                >
                  {/* Title */}
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{pillar.title}</h3>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', textAlign: 'left' }}>
                    {pillar.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <CheckCircle2 size={16} style={{ marginTop: '3px', color: 'var(--accent)', flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Icon image */}
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 250, damping: 18 } }}
                    style={{ width: '130px', height: '130px', objectFit: 'contain', filter: 'var(--icon-filter, none)', marginTop: '0.25rem' }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-muted)', fontSize: '1rem' }}
            >
              {content.pillars.tagline}
            </motion.p>
          </motion.section>
        )}

        {/* Program Sections — 2-col grid layout (e.g. Academics page) */}
        {content.programSections && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Academic Structure</motion.span>
              <motion.h2 variants={fadeInUp}>Program Overview</motion.h2>
            </div>

            <motion.div
              variants={staggerContainer}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}
            >
              {content.programSections.map((sec, idx) => (
                <motion.div key={sec.title} variants={fadeInUp} className="glass-panel glass-panel--violet" style={{ padding: '2rem', flex: '1 1 380px', maxWidth: 'calc(50% - 0.75rem)' }}>
                  {/* Left-aligned numbered heading */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)', background: 'var(--primary-glow)', borderRadius: '6px', padding: '0.2rem 0.55rem', letterSpacing: '1px' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0, fontWeight: 700 }}>{sec.title}</h3>
                  </div>
                  {sec.intro && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.7 }}>{sec.intro}</p>
                  )}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {sec.items.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                        <CheckCircle2 size={15} style={{ marginTop: '3px', color: 'var(--accent)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Infrastructure Highlights */}
        {content.infrastructure && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Facilities</motion.span>
              <motion.h2 variants={fadeInUp}>{content.infrastructure.title}</motion.h2>
            </div>

            <motion.div variants={scaleUp} className="glass-panel glass-panel--primary" style={{ padding: '2.5rem 3rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.8 }}>
                {content.infrastructure.intro}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {content.infrastructure.highlights.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 500 }}>
                    <span style={{ display: 'inline-flex', marginTop: '5px', padding: '4px', borderRadius: '50%', background: 'var(--primary-glow)', color: 'var(--primary)', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontStyle: 'italic' }}>
                {content.infrastructure.outro}
              </p>
            </motion.div>
          </motion.section>
        )}

        {/* Labs Section */}
        {content.labs && (
          <motion.section
            id="labs"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Laboratory Ecosystem</motion.span>
              <motion.h2 variants={fadeInUp}>Our Labs</motion.h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {content.labs.map((lab, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={lab.name}
                    variants={fadeInUp}
                    className="lab-row"
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'stretch', flexDirection: isEven ? 'row-reverse' : 'row' }}
                  >
                    {/* Text Panel */}
                    <div className="lab-text glass-panel glass-panel--secondary" style={{ flex: '1 1 360px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div>
                        <span style={{ display: 'inline-block', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '6px', padding: '0.25rem 0.75rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                          Lab {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', lineHeight: 1.3 }}>{lab.name}</h3>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '0.75rem' }}>Focus Areas</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {lab.focusAreas.map((area) => (
                            <span key={area} style={{ background: 'var(--bg-surface-light)', border: '1px solid var(--border)', borderRadius: '20px', padding: '0.3rem 0.85rem', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 500 }}>
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '0.75rem' }}>{lab.stackLabel}</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {lab.stack.map((tool) => (
                            <span key={tool} style={{ background: 'rgba(91,92,226,0.08)', border: '1px solid rgba(91,92,226,0.2)', borderRadius: '20px', padding: '0.3rem 0.85rem', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image Panel */}
                    <motion.div
                      className="lab-image"
                      style={{ flex: '1 1 360px', borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: '320px', boxShadow: 'var(--shadow-glow)' }}
                      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
                    >
                      <img
                        src={lab.image}
                        alt={lab.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Robotics Section */}
        {content.robotics && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Facility</motion.span>
              <motion.h2 variants={fadeInUp}>{content.robotics.title}</motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="glass-panel glass-panel--primary" style={{ padding: '2.5rem 3rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.9 }}>
                {content.robotics.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <RoboticsCarousel images={content.robotics.images} title={content.robotics.title} />
            </motion.div>
          </motion.section>
        )}

        {activePage !== "iucare" && activePage !== "academics" && content.cards && (
          <motion.section
            id="strategic-pillars"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {activePage !== "home" ? "Framework" : "Core Foundations"}
              </motion.span>
              <motion.h2 variants={fadeInUp}>
                {activePage === "home" ? "Strategic Pillars" : "Key Capabilities"}
              </motion.h2>
            </div>

            <div className={`bento-grid ${activePage === 'home' ? 'centered-grid' : ''}`}>
              {content.cards.map(([title, text, MediaOrIcon, linkTo], index) => {
                const isIcon = typeof MediaOrIcon !== 'string' && MediaOrIcon !== undefined;
                const isLinked = activePage === 'home' && linkTo && onNavigate;
                const cardContent = (
                  <>
                    {!isIcon && MediaOrIcon && <img src={MediaOrIcon} alt="" className="bento-bg" />}
                    <div className={!isIcon && MediaOrIcon ? "bento-content" : ""}>
                      {activePage !== "home" && <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>{String(index + 1).padStart(2, "0")}</span>}
                      {isIcon && MediaOrIcon && (
                        <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '16px', background: 'var(--bg-surface-light)', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                          <MediaOrIcon size={48} strokeWidth={1.5} />
                        </div>
                      )}
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{text}</p>
                      {isLinked && (
                        <div style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Explore <ArrowRight size={16} />
                        </div>
                      )}
                    </div>
                  </>
                );

                return isLinked ? (
                  <motion.article
                    variants={scaleUp}
                    className={`bento-item glass-panel pillar-link ${index % 2 === 0 ? 'glass-panel--violet' : 'glass-panel--teal'}`}
                    key={title}
                    style={isIcon ? { justifyContent: 'flex-start', paddingTop: '3rem', textAlign: 'center', cursor: 'pointer' } : { cursor: 'pointer' }}
                    onClick={() => onNavigate(linkTo)}
                    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    whileTap={{ scale: 0.98 }}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onNavigate(linkTo)}
                    aria-label={`Navigate to ${title}`}
                  >
                    {cardContent}
                  </motion.article>
                ) : (
                  <motion.article
                    variants={scaleUp}
                    className={`bento-item glass-panel ${index % 2 === 0 ? 'glass-panel--violet' : 'glass-panel--teal'}`}
                    key={title}
                    style={isIcon ? { justifyContent: 'flex-start', paddingTop: '3rem', textAlign: 'center' } : {}}
                  >
                    {cardContent}
                  </motion.article>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Institutional Focus Areas */}
        {content.focusAreas && activePage === "home" && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.h2 variants={fadeInUp}>{content.focusAreas.title}</motion.h2>
            </div>
            <ul className="focus-list">
              {content.focusAreas.items.map((item, index) => (
                <motion.li variants={fadeInUp} key={index} className="focus-item glass-panel glass-panel--primary">
                  <ArrowRight size={20} className="icon" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Focus / Program Details — last on page (pages with sectionsAtBottom flag) */}
        {content.sections && content.sectionsAtBottom && (
          <motion.section
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Focus</motion.span>
              <motion.h2 variants={fadeInUp}>Program Details</motion.h2>
            </div>
            {content.sections.map((section) =>
              section.image ? (
                /* Two-column layout: text left, image right */
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'stretch' }}
                >
                  {/* Text panel */}
                  <div className="glass-panel glass-panel--violet" style={{ flex: '1 1 360px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{section.title}</h3>
                    {section.text && <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>{section.text}</p>}
                    {section.items && (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {section.items.map((item) => (
                          <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={16} style={{ marginTop: '4px', color: 'var(--accent)', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* Image panel */}
                  <motion.div
                    style={{ flex: '1 1 360px', borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: '280px', boxShadow: 'var(--shadow-glow)' }}
                    whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                /* Single card layout (no image) */
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <motion.article
                    key={section.title}
                    variants={scaleUp}
                    className="glass-panel glass-panel--violet"
                    style={{ padding: '2rem' }}
                  >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{section.title}</h3>
                    {section.text && <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{section.text}</p>}
                    {section.items && (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {section.items.map((item) => (
                          <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-muted)' }}>
                            <CheckCircle2 size={16} style={{ marginTop: '4px', color: 'var(--accent)', flexShrink: 0 }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.article>
                </div>
              )
            )}
          </motion.section>
        )}

        {/* Engagement section — last on page (Faculty page) */}
        {content.engagement && content.engagementAtBottom && (
          <motion.section
            id="activities"
            className="bento-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <motion.span variants={fadeInUp} style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Activities</motion.span>
              <motion.h2 variants={fadeInUp}>{content.engagement.sectionTitle}</motion.h2>
            </div>
            <motion.div
              variants={staggerContainer}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}
            >
              {content.engagement.categories.map((cat) => (
                <motion.div
                  key={cat.label}
                  variants={fadeInUp}
                  className="glass-panel"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: '1 1 280px', maxWidth: '380px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '2px solid', borderColor: cat.color }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{cat.icon}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{cat.label}</h3>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {cat.items.map((item) => (
                      <li key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>{item.name}</span>
                        <span style={{
                          display: 'inline-block',
                          alignSelf: 'flex-start',
                          background: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${cat.color} 30%, transparent)`,
                          color: cat.color,
                          borderRadius: '20px',
                          padding: '0.15rem 0.6rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.3px',
                        }}>{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

      </div>
      {children}
      <Footer />
    </main>
  );
}
