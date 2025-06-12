import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { ExperienceTerminal } from "./ExperienceTerminal"
import ExperienceClassic from "./ExperienceClassic"
import type { TExperience } from "../../types/TExperience"

interface ExperienceWrapperProps {
  experiences: TExperience[]
  id: string
}

const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({ experiences, id }) => {
  const { theme } = useTheme()

  return theme === "terminal" ? (
    <ExperienceTerminal experiences={experiences} id={id} />
  ) : (
    <ExperienceClassic experiences={experiences} id={id} />
  )
}

export default ExperienceWrapper
