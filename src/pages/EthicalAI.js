import { ShieldCheck } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";

const content = {
  title: "Ethical AI Policy",
  eyebrow: "Responsible Innovation",
  subtitle: "Guiding the responsible development and deployment of Artificial Intelligence",
  heroMaxWidth: "860px",
  intro:
    "Integral University is committed to the ethical, responsible, and inclusive use of Artificial Intelligence across all its academic, research, and administrative functions. The Ethical AI Policy of the AI@Integral Initiative establishes a framework of principles and guidelines that govern how AI technologies are developed, applied, and evaluated within the university. This policy aims to ensure that AI adoption at Integral University promotes fairness, transparency, accountability, and human well-being.",

  sections: [
    {
      title: "Core Principles",
      items: [
        "Fairness & Non-Discrimination",
        "Transparency & Explainability",
        "Accountability & Responsibility",
        "Privacy & Data Protection",
        "Human Oversight & Control",
        "Inclusivity & Accessibility",
        "Sustainability & Social Good",
      ],
    },
    {
      title: "Policy Scope",
      items: [
        "AI use in academic programs and curricula",
        "AI-powered research and data analysis",
        "AI tools used by students and faculty",
        "Administrative AI systems and automation",
        "AI-generated content and intellectual property",
        "Third-party AI platforms adopted by the university",
      ],
    },
    {
      title: "Our Commitments",
      text: "Integral University pledges to uphold the highest standards of ethical AI practice. We commit to regularly reviewing AI systems for bias and unintended harm, ensuring informed consent in data collection, maintaining human decision-making authority in critical processes, and fostering an AI-literate community that critically evaluates AI outputs. The university will not deploy AI systems that compromise student privacy, academic integrity, or institutional equity.",
      fullWidth: true,
    },
  ],

  focusAreas: {
    title: "Guidelines for Responsible AI Use",
    items: [
      "Always disclose AI-assisted work in academic submissions",
      "Do not use AI to generate misleading or harmful content",
      "Protect personal data when working with AI tools",
      "Report biased or erroneous AI outputs to relevant authorities",
      "Engage critically with AI outputs — verify before acting",
      "Respect intellectual property rights in AI-generated content",
    ],
  },
};

export function EthicalAIPage(props) {
  return <PageTemplate {...props} content={content} icon={ShieldCheck} />;
}
