// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react"
import Home from "./components/Home"
import ExperienceContainer from "./components/Experience/ExperienceContainer"
import MyNavBar from "./components/Navigation/MyNavBar"
import HomePage from "./components/HomePage"
import Introduction from "./components/Introduction"
import ContactContainer from "./components/Contact/ContactContainer"
import SkillContainerGrid from "./components/Skills/SkillContainerGrid"
import type { TNavItem } from "./types/TNavItem"
import type { TExperience } from "./types/TExperience"
import experienceData from "./data/experienceData.json"
import navItemsData from "./data/navItemsData.json"

function App() {
  const navItems: TNavItem[] = navItemsData.links
  const experiences: TExperience[] = experienceData.experiences

  return (
    <>
      {/* <MyNavBar navItems={navItems} /> */}
      <div className="min-h-screen">
        <Home>
          <HomePage id="home" />
          <Introduction />
          <SkillContainerGrid id="skills" />
          <ExperienceContainer experiences={experiences} id="experience" />
          <ContactContainer id="contact" />
        </Home>
      </div>
    </>
  )
}

export default App
