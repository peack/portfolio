import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import IntroductionTerminal from "./IntroductionTerminal"
import IntroductionClassic from "./IntroductionClassic"

interface IntroductionWrapperProps {
  id?: string
}

const IntroductionWrapper: React.FC<IntroductionWrapperProps> = ({ id = "about" }) => {
  const { theme } = useTheme()

  if (theme === "classic") {
    return <IntroductionClassic id={id} />
  }

  return <IntroductionTerminal id={id} />
}

export default IntroductionWrapper
