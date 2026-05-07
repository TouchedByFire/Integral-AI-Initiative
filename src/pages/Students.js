import { Rocket } from "lucide-react";
import { PageTemplate } from "../components/PageTemplate";
import { asset } from "../utils/assets";

const content = {
  title: "Student Innovation and Engagement",
  eyebrow: "Student Ecosystem",
  subtitle: "Hands-on AI learning, competitions, projects, and entrepreneurship",
  image: asset("HOME/Home Page Banner.jpg"),
  intro:
    "Students are central to the AI@Integral ecosystem. The initiative encourages active student participation in AI learning, research, and innovation activities. Through hands-on projects, competitions, and collaborative learning environments, students are empowered to explore real-world applications of Artificial Intelligence.",
  hackathons: {
    sectionTitle: "Hackathons & Innovation Challenges",
    events: [
      {
        title: "Smart India Hackathon 2025 – Internal Edition",
        date: "September 4 & 8, 2025",
        venue: "Integral University, Lucknow",
        description:
          "The Smart India Hackathon 2025 – Internal Edition was facilitated by the Integral Startups Foundation – Centre for Incubation & Entrepreneurship Development (ISF-CIED) and organized under the initiatives of the Ministry of Education's Innovation Cell (MIC), Ministry of Education, Government of India; AICTE; Institution's Innovation Council (IIC); and StartInUP, Government of Uttar Pradesh.",
        impact:
          "The event provided students with an opportunity to develop innovative solutions to real-world challenges, encouraging creativity, teamwork, and technological problem-solving while strengthening the culture of innovation and entrepreneurship within the university ecosystem.",
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/4a24033548cb37a43af831a22bf9ecc6.jpg"),
      },
      {
        title: "Smart India Hackathon 2024 – Software Edition",
        date: "December 11–12, 2024",
        venue: "Integral University, Lucknow",
        description:
          "The Smart India Hackathon 2024 – Software Edition was hosted by the Integral Startups Foundation, Integral University, in collaboration with AICTE, Government of India; the Ministry of Education's Innovation Cell (MIC), Ministry of Education, Government of India; SBI Foundation; and the Inter Institutional Inclusive Innovations Center (i4C).",
        impact:
          "The hackathon brought together student teams to design and develop technology-driven solutions for real-world problems, promoting innovation, interdisciplinary collaboration, and practical learning.",
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/9db7a4b2c42940e4892f09b309f8dfcd.jpg"),
      },
    ],
  },
  engagement: {
    sectionTitle: "Student Engagement in AI",
    categories: [
      {
        label: "Workshops",
        icon: "🧪",
        color: "var(--primary)",
        items: [
          { name: "Data Science: How To Get Started", date: "May 30, 2023" },
          { name: "Artificial Intelligence Workshop", date: "Oct 5, 2023" },
          { name: "Artificial Intelligence & Machine Learning", date: "Jan 20, 2025" },
          { name: "Hands-On AI: Build Your First Model", date: "Sep 20, 2025" },
          { name: "AI-Powered Python Programming", date: "Jan 22, 2026" },
          { name: "Agentic AI Workshop", date: "Jan 19, 2026" },
        ],
      },
      {
        label: "Courses & Certifications",
        icon: "🎓",
        color: "var(--secondary)",
        items: [
          { name: "Applied Machine Learning & Deep Learning with Python", date: "Jul 7, 2025" },
          { name: "Design Thinking, AI & LLMs Certification Courses", date: "Feb 5, 2026" },
          { name: "Generative AI Short Term Course", date: "Aug 18, 2025" },
        ],
      },
      {
        label: "Internships & Fellowships",
        icon: "💼",
        color: "var(--accent)",
        items: [
          { name: "AI & Robotics Research Internship", date: "Nov 1, 2024" },
          { name: "Microsoft AI Skilling & Internship Program", date: "May 28, 2025" },
          { name: "Empowering Women in AI – National Fellowship", date: "Oct 27, 2025" },
        ],
      },
      {
        label: "Career & Innovation Events",
        icon: "🚀",
        color: "#f59e0b",
        items: [
          { name: "Data Science, AI & ML Career Seminar", date: "Aug 12, 2025" },
          { name: "AI & Marketing Expert Lecture", date: "Jul 15, 2025" },
          { name: "Discover Your Career Path with AI", date: "Oct 3, 2024" },
        ],
      },
    ],
  },
  sectionsAtBottom: true,
  sections: [
    {
      title: "Students are encouraged to become",
      items: ["AI Creators", "Innovators", "Researchers", "Problem Solvers"],
    },
  ],
  pillars: {
    tagline: "Encouraging students to innovate, build, and solve real-world challenges through AI.",
    items: [
      {
        title: "AI Clubs",
        bullets: ["AI Chapters", "Peer Learning"],
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/6270ff3dbd4b841b76c768434530e929.jpg"),
      },
      {
        title: "Hackathons",
        bullets: ["Innovation Challenges", "Problem Solving"],
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/a9a9fc32df38faaaa3f9a41f934f5585.jpg"),
      },
      {
        title: "Industry Projects",
        bullets: ["Live Industry Projects", "Research Projects"],
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/6fa64e232a3691150626653ba75ba05b.jpg"),
      },
      {
        title: "AI Startups",
        bullets: ["Entrepreneurship Support", "Prototype Development"],
        image: asset("STUDENT INNOVATION AND ENGAGEMENT/6468eec8ae86843c8e32a24cdc4bd155.jpg"),
      },
    ],
  },
  gallery: [
    asset("STUDENT INNOVATION AND ENGAGEMENT/a9a9fc32df38faaaa3f9a41f934f5585.jpg"),
    asset("STUDENT INNOVATION AND ENGAGEMENT/9db7a4b2c42940e4892f09b309f8dfcd.jpg"),
    asset("STUDENT INNOVATION AND ENGAGEMENT/6468eec8ae86843c8e32a24cdc4bd155.jpg"),
  ],
};

export function StudentsPage(props) {
  return <PageTemplate {...props} content={content} icon={Rocket} />;
}
