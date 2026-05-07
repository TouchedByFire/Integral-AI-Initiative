import { Lightbulb } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "Research & Development",
  eyebrow: "Innovation Mandate",
  subtitle: "Interdisciplinary research for real-world AI solutions",
  image: asset("HOME/Home Page Banner.jpg"),
  intro:
    "Research and development form a key component of the AI@Integral Initiative, driving innovation and knowledge creation in Artificial Intelligence and related technologies. Through the IUCARE - Integral University Centre for AI Research & Education, the university promotes interdisciplinary research, collaborative projects, and technological development aimed at solving real-world challenges. The centre provides a platform for faculty members, researchers, and students to engage in advanced research activities and develop innovative AI-based solutions.",
  sections: [
    {
      title: "Key Focus Areas",
      items: [
        "Generative Artificial Intelligence",
        "Machine Learning and Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Intelligent Automation",
        "AI for Healthcare",
        "AI for Smart Systems",
      ],
    },
    {
      title: "Research Activities",
      items: [
        "Interdisciplinary research projects",
        "Collaborative research with industry and institutions",
        "Student research and innovation projects",
        "Publication of research papers in reputed journals and conferences",
        "Development of AI-based applications and prototypes",
      ],
    },
    {
      title: "Innovation and Collaboration",
      text: "The Research & Development initiatives at IUCARE encourage collaboration between faculty members, students, and external partners to create impactful technological solutions. These collaborations help strengthen the university's research ecosystem while contributing to advancements in Artificial Intelligence and emerging technologies.",
      fullWidth: true,
    },
  ],
  industryCollaboration: {
    title: "Industry Collaboration",
    intro: "AI@Integral fosters strong partnerships through:",
    items: [
      "Industry-linked research projects",
      "Consultancy & solution development",
      "Joint certification programs",
      "Corporate AI training initiatives",
    ],
    icons: [
      { src: asset("RESEARCH  DEVELOPMENT/3b2c88caa11d9cefe54411d8b3dc8274.jpg"), alt: "Industry-linked research" },
      { src: asset("RESEARCH  DEVELOPMENT/3fb1f8cbaea8d7105e3ee23c8e477d32.jpg"), alt: "Consultancy & solution development" },
      { src: asset("RESEARCH  DEVELOPMENT/48aef08834e8881f155de0b091174fd1.jpg"), alt: "Joint certification programs" },
      { src: asset("RESEARCH  DEVELOPMENT/145587cdf990c9ee08294e1f3f39ca9f.jpg"), alt: "Corporate AI training" },
    ],
  },
  mandate: {
    title: "Research & Innovation Mandate",
    items: [
      "AI publications in indexed journals",
      "AI-based patents & IP development",
      "Funded interdisciplinary projects",
      "AI for social & community impact",
    ],
  },
  globalPositioning: {
    title: "Global Positioning",
    text: "Recognition in the World's Universities with Real Impact (WURI) Rankings 2024 reinforces Integral University's commitment to innovation-driven, impact-oriented education.",
    badge: "🏆 Featured in WURI Rankings 2024",
    image: asset("RESEARCH  DEVELOPMENT/6f70af494868713f1d3ee546d5d7faeb.jpg"),
  },
  gallery: [
    asset("RESEARCH  DEVELOPMENT/145587cdf990c9ee08294e1f3f39ca9f.jpg"),
    asset("RESEARCH  DEVELOPMENT/3fb1f8cbaea8d7105e3ee23c8e477d32.jpg"),
    asset("RESEARCH  DEVELOPMENT/48aef08834e8881f155de0b091174fd1.jpg"),
  ],
};

export function ResearchPage(props) {
  return <PageTemplate {...props} content={content} icon={Lightbulb} />;
}
