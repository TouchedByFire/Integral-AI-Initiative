import { motion } from "framer-motion";
import { Lock, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const footerData = [
    {
      title: "QUICK LINKS",
      links: ["About Us", "Rankings", "Integral Times", "Events", "Campus Tour", "Careers at IU"]
    },
    {
      title: "ACADEMICS",
      links: ["Program Finder", "13 Faculties", "Research", "Library", "Online Programs", "Academic Calendar"]
    },
    {
      title: "ADMISSIONS",
      links: ["How to Apply", "Fee Structure", "Scholarships", "International", "IUET 2026", "Download Brochure"]
    },
    {
      title: "SERVICES",
      links: [
        { name: "ERP Login", locked: true },
        { name: "Student Portal", locked: true },
        { name: "Noticeboard", locked: false },
        { name: "Email", locked: true },
        { name: "Results", locked: false },
        { name: "Alumni Portal", locked: true },
        { name: "Hospital", locked: false }
      ]
    },
    {
      title: "CONNECT",
      links: ["Contact us", "Grievance", "Newsletter"]
    }
  ];

  return (
    <motion.footer 
      className="global-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        paddingTop: '4rem',
        marginTop: '4rem'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Global Navigation Links Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '2.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border)'
        }}>
          {footerData.map((column, idx) => (
            <div key={idx}>
              <h4 style={{ 
                margin: '0 0 1.5rem 0',
                padding: 0,
                textAlign: 'left',
                color: 'var(--primary)', 
                fontWeight: 800, 
                fontSize: '0.9rem', 
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {column.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {column.links.map((link, lIdx) => {
                  const isObj = typeof link === 'object';
                  const name = isObj ? link.name : link;
                  const locked = isObj ? link.locked : false;
                  return (
                    <li key={lIdx}>
                      <a href="#" style={{ 
                        color: 'var(--text-muted)', 
                        textDecoration: 'none', 
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                      >
                        {name}
                        {locked && <Lock size={12} style={{ opacity: 0.5 }} />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Contact & Social Bar */}
        <div style={{ 
          padding: '2.5rem 0 3rem 0', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: '2.5rem'
        }}>
          <div style={{ maxWidth: '600px', textAlign: 'left' }}>
            <h3 style={{ 
              textAlign: 'left',
              fontWeight: 800, 
              color: 'var(--text-main)', 
              fontSize: '1.2rem', 
              marginBottom: '0.5rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              INTEGRAL UNIVERSITY
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '8px', lineHeight: 1.5, textAlign: 'left' }}>
              <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0 }} /> 
              <span>Dasauli, Kursi Road, Lucknow — 226026, Uttar Pradesh, India</span>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} /> +91 9335177775
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} /> ai@iul.ac.in
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '50%', 
                background: 'rgba(17, 103, 216, 0.08)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(17, 103, 216, 0.08)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* AI Culture Slogan */}
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '2rem',
          paddingBottom: '2rem',
          borderTop: '1px solid color-mix(in srgb, var(--border) 50%, transparent)',
          marginTop: '1rem'
        }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            At Integral University, AI is not an add-on. AI is not a trend. <strong className="gradient-text" style={{ fontSize: '1.2rem' }}>AI is a culture.</strong>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
