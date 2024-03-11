// import "./,.css";
import Home from "./components/Home";
import { experienceData } from "./data/ExperienceData";
import ExperienceContainer from "./components/Experience/ExperienceContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { navItems } from "./data/NavItemsData";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import ContactContainer from "./components/ContactContainer";
import SkillContainer from "./components/Skills/SkillContainer";

function App() {
  const [sideBarToggle, setSideBarToggle]: [
    boolean,
    (value: ((prevState: boolean) => boolean) | boolean) => void,
  ] = useState(true);

  const handleSidebar = () => {
    setSideBarToggle(!sideBarToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      setSideBarToggle(window.innerWidth > 768); // Adjust the breakpoint as per your requirement
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {!sideBarToggle && (
        <div className="absolute left-0 top-0 z-10 " onClick={handleSidebar}>
          X
        </div>
      )}
      {sideBarToggle && (
        <Sidebar navItems={navItems} isSidebarOpen={sideBarToggle} />
      )}
      <Home isSidebarOpen={sideBarToggle}>
        <HomePage id="home" />
        <SkillContainer id="skills" />
        <ExperienceContainer experiences={experienceData} id="experience" />
        <ContactContainer id="contact" />
      </Home>
    </div>
  );
}

export default App;
