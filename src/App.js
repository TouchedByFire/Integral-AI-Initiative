import { useState } from "react";
import { Header } from "./components/Header";
import { AcademicsPage } from "./pages/Academics";
import { EthicalAIPage } from "./pages/EthicalAI";
import { FacultyPage } from "./pages/Faculty";
import { HomePage } from "./pages/Home";
import { IucarePage } from "./pages/Iucare";
import { ResearchPage } from "./pages/Research";
import { StudentsPage } from "./pages/Students";
import { TeamPage } from "./pages/Team";

const pageComponents = {
  home: HomePage,
  iucare: IucarePage,
  academics: AcademicsPage,
  students: StudentsPage,
  faculty: FacultyPage,
  research: ResearchPage,
  ethicalai: EthicalAIPage,
  team: TeamPage,
};

export function App() {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const ActivePage = pageComponents[activePage] || HomePage;

  const navigate = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header
        activePage={activePage}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onNavigate={navigate}
      />
      <ActivePage activePage={activePage} onNavigate={navigate} />
    </div>
  );
}
