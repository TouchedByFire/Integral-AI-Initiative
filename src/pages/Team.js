import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const teamGroups = [
  {
    groupLabel: "Leadership",
    color: "var(--primary)",
    members: [
      { name: "Dr. Syed Nadeem Akhtar", role: "Chairperson", dept: "Hon'ble Pro-Chancellor" },
      { name: "Prof. Furqan Qamar", role: "Co-Chairperson", dept: "Hon'ble Vice Chancellor (Officiating)" },
    ],
  },
  {
    groupLabel: "Coordinators",
    color: "var(--secondary)",
    members: [
      { name: "Prof. Mohammad Faisal", role: "Coordinator", dept: "Head, Department of Computer Application" },
      { name: "Prof. Shish Ahmad", role: "Joint Coordinator", dept: "Head, Department of Computer Science & Engineering" },
    ],
  },
  {
    groupLabel: "Members",
    color: "var(--accent)",
    members: [
      { name: "Prof. Syed Misbahul Hasan", role: "Member", dept: "Director, IQAC" },
      { name: "Prof. Mohammed Haris Siddiqui", role: "Member", dept: "Registrar, Integral University & Director, Directorate of Admissions & Academics" },
      { name: "Dr. Mirza Ghazanfar Beg", role: "Member", dept: "Coordinator, IUCARE & Assistant Professor, Dept. of Computer Application" },
      { name: "Mr. Syed Gulam Mohamood", role: "Member", dept: "Manager (IT Services)" },
      { name: "Mr. Mashuood Ali", role: "Member", dept: "Coordinator, DOSA" },
    ],
  },
];

const content = {
  title: "Team AI@Integral",
  eyebrow: "The People Behind the Initiative",
  subtitle: "Faculty, researchers, and student leaders driving AI transformation at Integral University",
  image: asset("HOME/Home Page Banner.jpg"),
  heroMaxWidth: "900px",
  intro:
    "The AI@Integral Initiative is driven by a dedicated team of academic leaders, faculty coordinators, technical experts, and student representatives. Together, they work across departments to embed Artificial Intelligence into every facet of the university — from curricula and research to labs and student engagement.",
};

export function TeamPage(props) {
  return (
    <PageTemplate {...props} content={content} icon={Users2}>
      {/* Team grid rendered as children — before the footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {teamGroups.map((group) => (
            <motion.div key={group.groupLabel} variants={fadeInUp}>
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', width: '4px', height: '28px', background: group.color, borderRadius: '4px', flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {group.groupLabel}
                </h3>
              </div>

              {/* Member cards */}
              <motion.div
                variants={staggerContainer}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}
              >
                {group.members.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={fadeInUp}
                    className="glass-panel"
                    whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    style={{ flex: '1 1 260px', maxWidth: '360px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                  >
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: group.color, marginBottom: '0.25rem' }} />
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.3 }}>
                      {member.name}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600, margin: 0 }}>
                      {member.role}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                      {member.dept}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTemplate>
  );
}

