// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCallback, useEffect, useState } from "react"
import Home from "./components/Home"
import ExperienceContainer from "./components/Experience/ExperienceContainer"
import Sidebar from "./components/Sidebar/Sidebar"
import HomePage from "./components/HomePage"
import ContactContainer from "./components/Contact/ContactContainer"
import SkillContainerGrid from "./components/Skills/SkillContainerGrid"
import type { TNavItem } from "./types/TNavItem"
import type { TExperience } from "./types/TExperience"
import experienceData from "./data/experienceData.json"
import navItemsData from "./data/navItemsData.json"

function App() {
  const [isSidebarOpen, setIsSidebarOpen]: [boolean, (value: ((prevState: boolean) => boolean) | boolean) => void] =
    useState(true)

  const handleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen])

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768)
    }

    handleResize() // Initial check

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleUrlChange = () => {
      if (window.innerWidth < 768) {
        console.log(true)

        handleSidebar()
      }
    }

    window.addEventListener("popstate", handleUrlChange)
    return () => {
      window.removeEventListener("popstate", handleUrlChange)
    }
  }, [handleSidebar])

  const navItems: TNavItem[] = navItemsData.links
  const experiences: TExperience[] = experienceData.experiences

  return (
    <>
      <div className="flex h-[calc(100dvh)] overflow-hidden main-content">
        <Sidebar navItems={navItems} isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
        {!isSidebarOpen && <button onClick={handleSidebar}>O</button>}
        <Home>
          <HomePage id="home" />
          <SkillContainerGrid id="skills" />
          <ExperienceContainer experiences={experiences} id="experience" />
          <ContactContainer id="contact" />
        </Home>
      </div>
    </>
  )
}

export default App
