import { Users } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "Faculty Development and AI Upskilling",
  eyebrow: "Educator Enablement",
  subtitle: "Workshops, certifications, and interdisciplinary AI teaching practices",
  image: asset("HOME/Home Page Banner.jpg"),
  heroMaxWidth: "950px",
  intro:
    "Faculty development is an essential component of the AI@Integral Initiative. Continuous professional development programs are organized to help faculty members integrate AI technologies into teaching and research. These initiatives enable educators to remain updated with emerging technologies and adopt innovative pedagogical practices.",
  hackathons: {
    sectionTitle: "Events and Workshops",
    eventLabel: "Workshop",
    events: [
      {
        title: "Microsoft Bootcamp and Artificial Intelligence (AI) Workshops",
        date: "January 5–6, 2026",
        venue: "Indian Institute of Technology (IIT) Delhi",
        description:
          "Integral Startups Foundation (ISF), Integral University, led a delegation at the Microsoft Bootcamp & Artificial Intelligence (AI) Workshops, coordinated by Itech Innovation Foundation in collaboration with the Foundation for Innovation and Technology Transfer (FITT), IIT Delhi, and Microsoft. The program served as a platform for knowledge exchange, strengthening digital capabilities, and promoting industry–academia collaboration in emerging technologies such as Artificial Intelligence and advanced digital systems.",
        impact:
          "Strengthened digital capabilities and fostered industry–academia collaboration in emerging AI technologies.",
        image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/workshop.jpg"),
      },
      {
        title: "International Congress on Unlocking Artificial Intelligence and Robotics Driven Smart Agriculture for Viksit Bharat (AIRSA-VBCON 2025)",
        date: "December 22–23, 2025",
        venue: "Integral University, Lucknow",
        description:
          "The International Congress (AIRSA-VBCON 2025) was jointly organized by the Integral Institute of Agricultural Science and Technology (IIAST), Integral University, and the U.P. Council of Agricultural Research (UPCAR). AIRSA-VBCON 2025 provided an excellent platform for national and international participants to network, exchange ideas, and contribute towards shaping a technologically advanced agricultural ecosystem aligned with the vision of Viksit Bharat.",
        impact:
          "United national and international participants to advance AI & robotics-driven smart agriculture aligned with the Viksit Bharat vision.",
        image: asset("IUCARE - INTEGRAL UNIVERSITY CENTRE FOR AI/workshop 1.jpg"),
      },
    ],
  },
  engagementAtBottom: true,
  engagement: {
    sectionTitle: "Faculty Development in Artificial Intelligence",
    categories: [
      {
        label: "Faculty Development Programs (FDP)",
        icon: "🎓",
        color: "var(--primary)",
        items: [
          { name: "MATLAB for Artificial Intelligence", date: "Sep 22, 2025" },
          { name: "AI Tools – Electronics & Communication Engineering", date: "Feb 17, 2025" },
          { name: "AI in Teaching & Research Paper Writing", date: "Jun 26, 2024" },
          { name: "AI Concepts & Practices for Civil Engineers", date: "Sep 16, 2024" },
          { name: "Interdisciplinary AI & ML Applications FDP", date: "Jan 8, 2026" },
        ],
      },
      {
        label: "Short Term Courses",
        icon: "📚",
        color: "var(--secondary)",
        items: [
          { name: "Generative AI – Short Term Course", date: "Aug 18, 2025" },
          { name: "AI/ML & Data Science for Industry 4.0", date: "Feb 26, 2024" },
          { name: "AI and IoT Applications", date: "Jan 19, 2026" },
        ],
      },
      {
        label: "Refresher Courses",
        icon: "🔄",
        color: "var(--accent)",
        items: [
          { name: "AI and Current Research", date: "Aug 19, 2023" },
          { name: "Artificial Intelligence – Faculty of Architecture", date: "Aug 28, 2023" },
        ],
      },
      {
        label: "Academic Lectures & Conferences",
        icon: "🏛️",
        color: "#e07b39",
        items: [
          { name: "Deep Learning Expert Lecture", date: "Mar 18, 2024" },
          { name: "Machine Learning Applications in Scientific Problems", date: "May 4, 2024" },
          { name: "International Conference on AI & Sustainability", date: "Mar 5, 2024" },
          { name: "AIRSA-VBCON 2025 Congress on AI & Robotics in Agriculture", date: "Dec 22, 2025" },
        ],
      },
    ],
  },
  sectionsAtBottom: true,
  sections: [
    {
      title: "Faculty Initiatives",
      image: asset("FACULTY DEVELOPMENT AND AI UPSKILLING/e4564f8044008c2cd6a9570b0d697d88.jpg"),
      items: [
        "Specialized AI training workshops and hands-on seminars",
        "Professional faculty certification programs in AI tools",
        "Interdisciplinary AI research and development collaborations",
        "Guest expert lectures and knowledge-sharing symposiums",
        "Curriculum modernization with integrated AI modules",
        "AI-enhanced pedagogical training for innovative educators",
        "Mentorship programs for AI-driven scholarly research",
        "Collaborative projects within the IUCARE research ecosystem",
      ],
    },
  ],

  gallery: [
    asset("FACULTY DEVELOPMENT AND AI UPSKILLING/e32a65d4f170ece2ce976de5713dc850.jpg"),
    asset("FACULTY DEVELOPMENT AND AI UPSKILLING/c63dbcac35f87ac843a30c974bd9f339.jpg"),
    asset("FACULTY DEVELOPMENT AND AI UPSKILLING/a5fc5296c3c94a635b95fb790c19ac76.jpg"),
  ],
};

export function FacultyPage(props) {
  return <PageTemplate {...props} content={content} icon={Users} />;
}
