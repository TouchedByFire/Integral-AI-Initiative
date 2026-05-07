import { Microscope } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "IUCARE",
  eyebrow: "Integral University Centre for AI Research & Education",
  subtitle: "Inspiring excellence through Artificial Intelligence",
  image: asset("HOME/Home Page Banner.jpg"),
  intro:
    "IUCARE - Integral University Centre for AI Research & Education, serves as the research and innovation hub of the AI@Integral Initiative. The centre promotes interdisciplinary research, technological innovation, and collaborative projects in emerging Artificial Intelligence domains. IUCARE provides a platform where faculty members, researchers, and students work together to develop AI-driven solutions addressing real-world challenges.",
  sections: [
    {
      title: "Objectives",
      items: [
        "Promote advanced research in Artificial Intelligence",
        "Encourage interdisciplinary collaboration among departments",
        "Support student innovation and research projects",
        "Facilitate collaboration with industry and research institutions",
        "Contribute to scholarly publications and funded research projects",
      ],
    },
    {
      title: "Key Research Areas",
      items: [
        "Generative Artificial Intelligence",
        "Machine Learning and Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "AI for Healthcare",
        "Intelligent Automation and Smart Systems",
      ],
    },
    {
      title: "Core Laboratory Ecosystem",
      items: [
        "AI Foundations & Computational Thinking Lab",
        "Applied Machine Learning & Data Science Lab",
        "Data Analytics & Business Intelligence Lab",
        "AI Innovation & Emerging Technologies Studio",
        "Advanced AI & GPU Computing Lab",
      ],
    },
  ],
  cards: [
    ["GPU Computing", "High-performance AI systems for advanced experimentation."],
    ["Robotics & Automation", "AI with embedded systems, autonomous navigation, and smart systems."],
    ["Industry Platforms", "Applied technology platforms that support collaboration and prototypes."],
  ],
  infrastructure: {
    title: "Infrastructure Highlights",
    intro: "The infrastructure supporting IUCARE includes:",
    highlights: [
      "GPU-enabled high-performance AI computing systems",
      "Interdisciplinary research and collaborative innovation projects",
      "Industry-supported laboratories and applied technology platforms",
    ],
    outro:
      "This advanced infrastructure strengthens the University's capacity to conduct cutting-edge AI research, foster innovation, and support industry collaboration.",
  },
  labs: [
    {
      name: "AI Foundations & Computational Thinking Lab",
      stackLabel: "Software Stack",
      focusAreas: [
        "Computational Thinking",
        "Python Programming",
        "AI Fundamentals",
        "Algorithms & Problem Solving",
        "AI for Non-Engineering Disciplines",
      ],
      stack: ["Python", "Anaconda", "Jupyter Notebook", "VS Code", "Git & GitHub", "Linux (Ubuntu)"],
      image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/AI Foundations & Computational Thinking Lab.jpg"),
    },
    {
      name: "Applied Machine Learning & Data Science Lab",
      stackLabel: "Software Stack",
      focusAreas: ["Supervised Learning", "Deep Learning", "Feature Engineering", "Model Optimization", "Data Engineering"],
      stack: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas & NumPy", "Apache Spark"],
      image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Applied Machine Learning & Data Science Lab.jpg"),
    },
    {
      name: "Data Analytics & Business Intelligence Lab",
      stackLabel: "Software Stack",
      focusAreas: ["Business Analytics", "Data Visualization", "Dashboard Development", "Decision Support Systems", "Predictive Models"],
      stack: ["Python", "R & RStudio", "KNIME", "Metabase", "PostgreSQL"],
      image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Data Analytics & Business Intelligence Lab.jpg"),
    },
    {
      name: "AI Innovation & Emerging Technologies Studio",
      stackLabel: "Software Stack",
      focusAreas: ["Generative AI", "Prompt Engineering", "LLM Fine-Tuning", "AI Startups", "Rapid Prototyping"],
      stack: ["LangChain", "Streamlit", "FastAPI", "Docker", "Stable Diffusion"],
      image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/AI Innovation & Emerging Technologies Studio.jpg"),
    },
    {
      name: "Advanced AI & GPU Computing Lab",
      stackLabel: "Infrastructure Stack",
      focusAreas: ["Large Model Training", "Distributed Computing", "Parallel Processing", "AI Research Projects"],
      stack: ["Multi-GPU Servers", "CUDA", "Kubernetes", "Docker", "Linux Server"],
      image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Advanced AI & GPU Computing Lab.jpg"),
    },
  ],
  robotics: {
    title: "Advanced Robotics & Autonomous Systems",
    description:
      "The facility integrates AI with robotics, embedded systems, and automation technologies. It supports intelligent system development, autonomous navigation research, industrial robotics applications, and smart system design.",
    images: [
      asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Robotics 1.jpg"),
      asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Robotics 2.jpg"),
      asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Robotics 3.jpg"),
      asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Robotics 4.jpg"),
      asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/Robotics 5.jpg"),
    ],
  },
  gallery: [
    asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/32f41a86eb431a336f35a83dc87e7cd8.jpg"),
    asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/907ba28bb797f2bf63cb08b8d8ac0d18.jpg"),
    asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/4ddb8671c311ab0de22ee7480f36e67d.jpg"),
  ],
};

export function IucarePage(props) {
  return <PageTemplate {...props} content={content} icon={Microscope} />;
}
