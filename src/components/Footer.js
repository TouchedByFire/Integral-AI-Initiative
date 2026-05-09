import { motion } from "framer-motion";
import { Lock, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const TwitterXIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export function Footer() {
  const footerData = [
    {
      title: "QUICK LINKS",
      links: [
        { name: "About Us", href: "https://www.iul.ac.in/About/Overview/Overview.aspx" },
        { name: "Rankings", href: "https://www.iul.ac.in/Rankings.aspx" },
        { name: "Integral Times", href: "https://www.iul.ac.in/Times/Home.aspx" },
        { name: "Events", href: "https://www.iul.ac.in/Times/Events.aspx" },
        { name: "Campus Tour", href: "https://www.iul.ac.in/AdmissionInfo/Virtual_Tour.aspx" },
        { name: "Careers at IU", href: "https://www.iul.ac.in/career.aspx" }
      ]
    },
    {
      title: "ACADEMICS",
      links: [
        { name: "Program Finder", href: "https://www.iul.ac.in/Academics/under-Graduate.aspx" },
        { name: "13 Faculties", href: "https://www.iul.ac.in/Department/Agriculture.aspx" },
        { name: "Research", href: "https://www.iul.ac.in/dsr/index.aspx" },
        { name: "Library", href: "https://library.iul.ac.in/" },
        { name: "Online Programs", href: "https://iulonline.in/" },
        { name: "Academic Calendar", href: "https://www.iul.ac.in/Academic_Calendar.aspx" }
      ]
    },
    {
      title: "ADMISSIONS",
      links: [
        { name: "How to Apply", href: "https://www.iul.ac.in/AdmissionInfo/Admission_Overview.aspx#target" },
        { name: "Fee Structure", href: "https://www.iul.ac.in/AdmissionInfo/FeeInd.aspx" },
        { name: "Scholarships", href: "https://www.iul.ac.in/AdmissionInfo/Integral_University_Scholarships_Schemes.aspx" },
        { name: "International", href: "https://internationaloffice.iul.ac.in/" },
        { name: "IUET 2026", href: "https://www.iul.ac.in/iuet_syllabus.aspx" },
        { name: "Download Brochure", href: "https://www.iul.ac.in/PDF/IU-NATIONAl-BROCHURE-FINAL-2024.pdf" }
      ]
    },
    {
      title: "SERVICES",
      links: [
        { name: "ERP Login", href: "https://sms.iul.ac.in/", locked: true },
        { name: "Student Portal", href: "https://sms.iul.ac.in/", locked: true },
        { name: "Noticeboard", href: "https://www.iul.ac.in/noticeboard.aspx", locked: false },
        { name: "Email", href: "https://www.iul.ac.in/emailaccess/Default.aspx", locked: true },
        { name: "Results", href: "https://results.iul.ac.in/", locked: false },
        { name: "Alumni Portal", href: "https://alumni.iul.ac.in/", locked: true },
        { name: "Hospital", href: "https://www.iul.ac.in/iimsr/Hospital.aspx", locked: false }
      ]
    },
    {
      title: "CONNECT",
      links: [
        { name: "Contact us", href: "https://www.iul.ac.in/Contactus.aspx" },
        { name: "Grievance", href: "https://www.iul.ac.in/grievances/Default.aspx" },
        { name: "Newsletter", href: "https://www.iul.ac.in/documents/NewsLetter.pdf?=3435" }
      ]
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
                  const href = isObj && link.href ? link.href : "#";
                  const target = isObj && link.href ? "_blank" : undefined;
                  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
                  return (
                    <li key={lIdx}>
                      <a href={href} target={target} rel={rel} style={{
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
            {[
              { Icon: Facebook, url: "https://www.facebook.com/integralunilko/" },
              { Icon: TwitterXIcon, url: "https://x.com/IntegralUnilko" },
              { Icon: Instagram, url: "https://www.instagram.com/integralunilko_official" },
              { Icon: Linkedin, url: "https://www.linkedin.com/school/integral-university-lucknow-uttar-pradesh/" },
              { Icon: Youtube, url: "https://www.youtube.com/@integralunilko" }
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{ 
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
