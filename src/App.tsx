// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./components/Home"
import HomeWrapper from "./components/HomeWrapper"
import ExperienceWrapper from "./components/Experience/ExperienceWrapper"
import IntroductionWrapper from "./components/Introduction/IntroductionWrapper"
import ContactWrapper from "./components/Contact/ContactWrapper"
import SkillWrapper from "./components/Skills/SkillWrapper"
import FloatingBackToHome from "./components/ui/FloatingBackToHome"
import type { TNavItem } from "./types/TNavItem"
import type { TExperience } from "./types/TExperience"
import experienceData from "./data/experienceData.json"
import navItemsData from "./data/navItemsData.json"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  const queryClient = new QueryClient()
  const navItems: TNavItem[] = navItemsData.links
  const experiences: TExperience[] = experienceData.experiences

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="App">
          <Home>
            <HomeWrapper id="home" />
            <IntroductionWrapper id="about" />
            <SkillWrapper id="skills" />
            <ExperienceWrapper experiences={experiences} id="experience" />
            <ContactWrapper id="contact" />
          </Home>
          <FloatingBackToHome />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
