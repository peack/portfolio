// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react"
import Home from "./components/Home"
import HomeWrapper from "./components/HomeWrapper"
import ExperienceWrapper from "./components/Experience/ExperienceWrapper"
import MyNavBar from "./components/Navigation/MyNavBar"
import IntroductionWrapper from "./components/Introduction/IntroductionWrapper"
import ContactWrapper from "./components/Contact/ContactWrapper"
import SkillWrapper from "./components/Skills/SkillWrapper"
import type { TNavItem } from "./types/TNavItem"
import type { TExperience } from "./types/TExperience"
import experienceData from "./data/experienceData.json"
import navItemsData from "./data/navItemsData.json"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  const navItems: TNavItem[] = navItemsData.links
  const experiences: TExperience[] = experienceData.experiences

  return (
    <ThemeProvider>
      <div className="App">
        <Home>
          <HomeWrapper id="home" />
          <IntroductionWrapper id="about" />
          <SkillWrapper id="skills" />
          <ExperienceWrapper experiences={experiences} id="experience" />
          <ContactWrapper id="contact" />
        </Home>
      </div>
    </ThemeProvider>
  )
}

export default App
