import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import HomePageTerminal from "./HomePageTerminal"
import HomePageClassic from "./HomePageClassic"

interface HomeWrapperProps {
  id: string
}

const HomeWrapper: React.FC<HomeWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return theme === "terminal" ? <HomePageTerminal id={id} /> : <HomePageClassic id={id} />
}

export default HomeWrapper
