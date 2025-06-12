import React from "react"
import MyHero from "./MyHero"
import { useTheme } from "@/contexts/ThemeContext"
import HomePageClassic from "./HomePageClassic"
import HomePageTerminal from "./HomePageTerminal"

interface HomePageProps {
  id: string
}

const HomePage: React.FC<HomePageProps> = ({ id }) => {
  const { theme } = useTheme()

  if (theme === "classic") {
    return <HomePageClassic id={id} />
  }

  return <HomePageTerminal id={id} />
}

export default HomePage
