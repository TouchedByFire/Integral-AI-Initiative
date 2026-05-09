import { ShieldCheck } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "Ethical AI Policy",
  eyebrow: "Responsible Innovation",
  subtitle: "Guiding the ethical, transparent, and accountable use of AI across the University",
  image: asset("HOME/Home Page Banner.jpg"),
  heroMaxWidth: "860px",
  intro:
    "Integral University, through the AI@Integral Initiative, is committed to integrating Artificial Intelligence (AI) across academics, research, administration, and innovation in a responsible and ethical manner. As AI becomes an integral part of higher education, institutions must ensure that its use enhances learning without compromising academic integrity, fairness, and trust. This policy establishes a comprehensive framework for the ethical, transparent, and accountable use of AI across the University.",

  sections: [
    {
      title: "Purpose",
      text: "The policy aims to:",
      items: [
        "Promote responsible and ethical use of AI tools",
        "Safeguard academic integrity and originality",
        "Ensure data privacy and institutional security",
        "Encourage innovation with accountability",
        "Provide clear guidelines for all stakeholders",
      ],
    },
    {
      title: "Scope",
      text: "This policy applies to:",
      items: [
        "Faculty members",
        "Students and research scholars",
        "Administrative and technical staff",
        "All users of AI tools within the University ecosystem",
      ],
    },
    {
      title: "Core Ethical Principles",
      text: "The use of AI at Integral University shall be guided by the following principles:",
      items: [
        "Academic Integrity: AI must not be used to generate academic work without proper acknowledgment. Ethical AI use must support learning rather than replace it.",
        "Transparency: Users must clearly disclose when and how AI tools are used in academic, research, or administrative work. Transparency builds trust and accountability in academic environments.",
        "Accountability: Users remain responsible for all AI-assisted outputs, including accuracy, originality, and ethical implications.",
        "Privacy & Data Protection: Confidential, personal, or institutional data must not be shared with AI tools without authorization.",
        "Fairness & Inclusivity: AI must not be used in ways that introduce bias or discrimination. Institutions must actively address algorithmic bias and ensure equitable outcomes.",
        "Human Oversight: AI shall augment human intelligence, not replace it. Critical decisions must involve human judgment and review.",
      ],
      fullWidth: true,
    },
    {
      title: "Acceptable Use",
      text: "AI tools may be used for:",
      items: [
        "Concept understanding and learning support",
        "Research assistance and literature exploration",
        "Coding and problem-solving",
        "Drafting, editing, and structuring content",
        "Data analysis and visualization",
        "Administrative efficiency",
      ],
    },
    {
      title: "Prohibited Use",
      text: "The following are strictly prohibited:",
      items: [
        "Submitting AI-generated work as original without disclosure",
        "Fabricating data, references, or research outputs",
        "Plagiarism, impersonation, or academic misconduct using AI",
        "Sharing confidential or sensitive data with AI tools",
        "Using AI for misinformation or unethical activities",
      ],
    },
    {
      title: "Academic & Research Guidelines",
      items: [
        "AI-assisted work must include clear acknowledgment",
        "Faculty shall guide students on ethical AI usage",
        "AI outputs must be critically evaluated and verified",
        "Research must adhere to publication ethics",
        "Human intellectual contribution must remain central",
      ],
      fullWidth: true,
    },
    {
      title: "Roles & Responsibilities",
      items: [
        "Faculty: Integrate ethical AI practices in teaching and assessment; Guide students on responsible AI use; Ensure academic integrity.",
        "Students & Research Scholars: Use AI as a learning aid, not a substitute; Maintain honesty and originality; Disclose AI usage where applicable.",
        "Administration: Ensure secure and compliant AI adoption; Facilitate training and awareness.",
        "AI@Integral / IUCARE: Promote awareness and capacity building; Recommend approved AI tools; Monitor policy implementation.",
      ],
    },
    {
      title: "Implementation Strategy",
      items: [
        "Awareness sessions and workshops will be conducted",
        "Departments will integrate ethical AI practices",
        "AI usage disclosure mechanisms will be introduced",
        "Periodic review and updates will be undertaken",
      ],
    },
    {
      title: "Compliance & Violations",
      text: "Violation of this policy may result in:",
      items: [
        "Academic penalties for students",
        "Disciplinary action for faculty/staff",
        "Review under University regulations",
      ],
      fullWidth: true,
    },
    {
      title: "Review & Updates",
      text: "This policy shall be reviewed periodically under AI@Integral to remain aligned with evolving AI technologies and global standards.",
    },
    {
      title: "Conclusion",
      text: "Integral University envisions AI as a transformative force guided by ethics, responsibility, and academic integrity. AI@Integral aims to create a future-ready ecosystem where innovation is balanced with trust, accountability, and societal impact.",
    },
    {
      title: "SDG Alignment",
      text: "This policy aligns with the principles of the United Nations Sustainable Development Goals, particularly:",
      items: [
        "SDG 4: Quality Education",
        "SDG 9: Innovation & Infrastructure",
        "SDG 16: Strong Institutions",
      ],
      fullWidth: true,
    },
  ],
};

export function EthicalAIPage(props) {
  return <PageTemplate {...props} content={content} icon={ShieldCheck} />;
}
