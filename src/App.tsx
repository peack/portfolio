// import "./,.css";
import Home from "./components/Home";
import { experienceData } from "./data/ExperienceData";
import ExperienceContainer from "./components/Experience/ExperienceContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { navItems } from "./data/NavItemsData";
import { useCallback, useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import ContactContainer from "./components/ContactContainer";
import SkillContainerGrid from "./components/Skills/SkillContainerGrid";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Menu from "@mui/icons-material/Menu";
import React from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen]: [
    boolean,
    (value: ((prevState: boolean) => boolean) | boolean) => void,
  ] = useState(true);

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      if (window.innerWidth < 768) {
        console.log(true);

        handleSidebar();
      }
    };

    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, [handleSidebar]);

  return (
    <>
      <ScrollToHashElement behavior="smooth" inline="start" />
      <div className="flex h-screen overflow-hidden main-content">
        <Sidebar
          navItems={navItems}
          isSidebarOpen={isSidebarOpen}
          handleSidebar={handleSidebar}
        />
        {!isSidebarOpen && <Menu onClick={handleSidebar} />}
        <Home>
          <HomePage id="home" />
          <SkillContainerGrid id="skills" />
          <ExperienceContainer experiences={experienceData} id="experience" />
          <ContactContainer id="contact" />
        </Home>
      </div>
    </>
  );
}

export default App;
