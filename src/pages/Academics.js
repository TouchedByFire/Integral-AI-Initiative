import { GraduationCap } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "AI Integration in Academic Programs",
  eyebrow: "AI in Academics",
  subtitle: "X + AI: Integration across disciplines",
  heroMaxWidth: "960px",
  image: asset("AI IN ACADEMICS/1727d27e69b4c3a097420da1691c5529.jpg"),
  intro:
    "AI@Integral follows a multidisciplinary integration model where Artificial Intelligence is embedded within domain-specific learning frameworks. AI is positioned as an enabler across disciplines, ensuring graduates are future-ready and industry-aligned. Integral University aims to equip students with essential AI competencies, regardless of their specialization — enabling them to think critically about AI, utilize AI-powered tools responsibly, and contribute to an AI-integrated future.",

  disciplines: {
    title: "X + AI: Integration Across Disciplines",
    description:
      "AI@Integral follows a multidisciplinary integration model where Artificial Intelligence is embedded within domain-specific learning frameworks. AI is positioned as an enabler across disciplines rather than a standalone specialization.",
    outro:
      "Every program includes domain-specific AI applications, ensuring graduates are future-ready and industry-aligned.",
    subjects: [
      {
        dept: "Agriculture",
        programs: ["Agricultural Informatics and Artificial Intelligence"],
      },
      {
        dept: "Bioengineering",
        programs: [
          "Artificial Intelligence in Biomedical Engineering",
          "Artificial Intelligence in Biotechnology",
          "Artificial Intelligence in Food Technology",
          "Biomaterials and Artificial Organs",
        ],
      },
      {
        dept: "Bioscience",
        programs: ["Artificial Intelligence in Biological Sciences"],
      },
      {
        dept: "Business Administration",
        programs: [
          "Artificial Intelligence",
          "Artificial Intelligence in Health & Applied Sciences",
        ],
      },
      {
        dept: "Chemistry",
        programs: ["Advanced Applications of Artificial Intelligence in Chemical Sciences"],
      },
      {
        dept: "Civil Engineering",
        programs: [
          "Artificial Intelligence in Civil Engineering",
          "Artificial Intelligence in Geotechnical Engineering",
        ],
      },
      {
        dept: "Basic Medical Sciences",
        programs: ["Introduction to Artificial Intelligence"],
      },
      {
        dept: "Humanities & Social Sciences",
        programs: ["Application of Artificial Intelligence in Social Science"],
      },
      {
        dept: "Electrical Engineering",
        programs: [
          "Artificial Neural Network",
          "Introduction to Artificial Neural Network",
        ],
      },
      {
        dept: "Electronics",
        programs: ["Introduction to Artificial Intelligence & Applications"],
      },
      {
        dept: "Faculty of Law",
        programs: ["Artificial Intelligence and its Legal Implications"],
      },
      {
        dept: "Mathematics & Statistics",
        programs: ["Application of Artificial Intelligence in Mathematical Sciences"],
      },
      {
        dept: "Pharmacy",
        programs: ["Artificial Intelligence in Health & Applied Sciences"],
      },
      {
        dept: "Physics",
        programs: ["Artificial Intelligence and Physics"],
      },
      {
        dept: "Physiotherapy",
        programs: ["Artificial Intelligence in Physiotherapy"],
      },
      {
        dept: "Polytechnic",
        programs: ["Artificial Intelligence & Neural Network"],
      },
    ],
  },
  programSections: [
    {
      title: "Academic Initiatives",
      items: [
        "X+ AI: Integration Across Disciplines",
        "Specialized Programmes in AI",
        "Certifications & Add-ons",
        "Project-based learning using AI technologies",
      ],
    },
    {
      title: "Specialized Programs in AI",
      items: [
        "BCA (Data Science)",
        "BCA (Artificial Intelligence / Machine Learning)",
        "B.Tech-CSE (Data Science and Artificial Intelligence) in collaboration with IBM",
        "B.Tech-CSE (Cloud Computing and Artificial Intelligence) in collaboration with IBM",
        "B. Tech - CSE (Artificial Intelligence and Machine Learning) in collaboration with HCLTech",
        "B. Tech - CSE (Cyber Security and Artificial Intelligence) in collaboration with HCLTech",
        "M. Tech - CSE (Robotics & Artificial Intelligence)",
      ],
    },
    {
      title: "Certifications & Add-ons",
      items: [
        "AI & Data Science Certifications",
        "Generative AI Workshops",
        "Industry-Linked AI Training Modules",
        "Skill-Based Micro-Credentials",
      ],
    },
    {
      title: "Student Learning Outcomes",
      intro: "Students develop competencies in:",
      items: [
        "Machine Learning",
        "Data Science and Analytics",
        "Generative AI",
        "Intelligent Systems",
        "AI Applications across various domains",
      ],
    },
    {
      title: "Curriculum Framework",
      items: [
        "AI Foundation Exposure",
        "Domain-Specific AI Electives",
        "AI-Based Capstone Projects",
        "Industry-Oriented Case Studies",
        "Applied Laboratory Work",
      ],
    },
  ],
};

export function AcademicsPage(props) {
  return <PageTemplate {...props} content={content} icon={GraduationCap} />;
}
