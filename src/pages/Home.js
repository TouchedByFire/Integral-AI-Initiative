import { BrainCircuit, Network, Sparkles, Trophy, GraduationCap, Microscope, Users, Rocket, Building2 } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "AI@Integral Initiative",
  eyebrow: "Integral University",
  subtitle: "Inspiring excellence through Artificial Intelligence",
  image: asset("HOME/Home Page Banner.jpg"),
  intro:
    "The AI@Integral Initiative represents a strategic institutional effort by Integral University to integrate Artificial Intelligence across academic programs, research activities and administrative processes. The initiative aims to prepare students and faculty for the rapidly evolving AI-driven world while promoting interdisciplinary collaboration, technological innovation, and responsible use of Artificial Intelligence. Through this initiative, Integral University seeks to build a dynamic ecosystem that fosters learning, research excellence, innovation, and societal impact through AI technologies. ",
  globalRecognition: {
    title: "Global Recognition",
    subtitle: "Recognized in WURI Rankings 2024",
    category: "Generative AI Applications",
    text: "Integral University has been recognized in the World University Rankings for Innovation (WURI) under the Generative AI category, reflecting the university’s commitment to advancing innovation through Artificial Intelligence.",
    image: asset("HOME/WURI Certificate.jpg"),
  },
  highlights: [
    {
      icon: Trophy,
      title: "Global Recognition",
      text: "Recognized in WURI Rankings 2024 under the Generative AI Applications category.",
    },
    {
      icon: Network,
      title: "Integrated Ecosystem",
      text: "Connects academics, research, innovation, faculty development, and institutional transformation.",
    },
    {
      icon: Sparkles,
      title: "Responsible AI Culture",
      text: "Promotes ethical AI use with learning, research excellence, innovation, and societal impact.",
    },
  ],
  sections: [
    {
      title: "Core Components",
      items: [
        "IUCARE - Integral University Centre for AI Research & Education",
        "AI Integration in Academic Programs",
        "Faculty Development and AI Upskilling",
        "Student Innovation and Engagement",
        "Research & Development",
      ],
    },
    {
      title: "Vision",
      items: [
        "Establish Integral University as a premier global hub for Artificial Intelligence education, research, and collaborative innovation.",
        "Drive technological advancement and societal development through ethical, impactful AI applications.",
        "Cultivate a future-ready ecosystem that empowers students and faculty to become leaders in the AI-driven world."
      ],
    },
    {
      title: "Mission",
      items: [
        "Integrate Artificial Intelligence across academic programs",
        "Promote interdisciplinary AI research and innovation",
        "Develop AI competencies among students and faculty",
        "Encourage ethical and responsible use of Artificial Intelligence",
        "Foster collaboration with industry and research organizations",
      ],
    },
  ],
  cards: [
    ["AI in Academics", "Embedding AI concepts across undergraduate and postgraduate curricula.", GraduationCap, "academics"],
    ["Research & Development", "Encouraging faculty and student research in advanced AI technologies.", Microscope, "research"],
    ["Faculty Development", "Training programs, workshops, and certifications to build AI competencies.", Users, "faculty"],
    ["Student Engagement", "AI clubs, hackathons, competitions, and project-based learning initiatives.", Rocket, "students"],
    ["Institutional Transformation", "AI-based solutions for administrative efficiency and digital governance.", Building2, "iucare"],
  ],
  focusAreas: {
    title: "Institutional Focus Areas",
    items: [
      "AI-integrated curriculum across programs",
      "Dedicated AI & Robotics laboratories",
      "Research publications and innovation outputs",
      "Industry collaboration initiatives",
      "Faculty AI upskilling programs"
    ]
  },
};

export function HomePage(props) {
  return <PageTemplate {...props} content={content} icon={BrainCircuit} />;
}
