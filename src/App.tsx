// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react"
import Home from "./components/Home"
import ExperienceContainer from "./components/Experience/ExperienceContainer"
import MyNavBar from "./components/Navigation/MyNavBar"
import HomePage from "./components/HomePage"
import Introduction from "./components/Introduction/Introduction"
import ContactContainer from "./components/Contact/ContactContainer"
import SkillContainerGrid from "./components/Skills/SkillContainerGrid"
import type { TNavItem } from "./types/TNavItem"
import type { TExperience } from "./types/TExperience"
import experienceData from "./data/experienceData.json"
import navItemsData from "./data/navItemsData.json"
import { ThemeProvider } from "./contexts/ThemeContext"
import { ThemeToggle } from "./components/ui/ThemeToggle"

function App() {
  const navItems: TNavItem[] = navItemsData.links
  const experiences: TExperience[] = experienceData.experiences

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <div className="min-h-screen">
          <Home>
            <HomePage id="home" />
            <Introduction id="about" />
            <SkillContainerGrid id="skills" />
            <ExperienceContainer experiences={experiences} id="experience" />
            <ContactContainer id="contact" />
          </Home>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
