import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import IntroductionTerminal from "./IntroductionTerminal"
import IntroductionClassic from "./IntroductionClassic"

interface IntroductionProps {
  id?: string
}

const Introduction: React.FC<IntroductionProps> = ({ id = "about" }) => {
  const { theme } = useTheme()

  if (theme === "classic") {
    return <IntroductionClassic id={id} />
  }

  return <IntroductionTerminal id={id} />
}

export default Introduction
