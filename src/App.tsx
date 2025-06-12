// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react"
import Home from "./components/Home"
import ExperienceWrapper from "./components/Experience/ExperienceWrapper"
import MyNavBar from "./components/Navigation/MyNavBar"
import HomePage from "./components/HomePage"
import IntroductionWrapper from "./components/Introduction/IntroductionWrapper"
import ContactContainer from "./components/Contact/ContactContainer"
import SkillWrapper from "./components/Skills/SkillWrapper"
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
        {/* <MyNavBar navItems={navItems} /> */}
        <Home>
          <HomePage id="home" />
          <IntroductionWrapper id="about" />
          <SkillWrapper id="skills" />
          <ExperienceWrapper experiences={experiences} id="experience" />
          <ContactContainer id="contact" />
        </Home>
      </div>
    </ThemeProvider>
  )
}

export default App
