import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { ExperienceTerminal } from "./ExperienceTerminal"
import ExperienceClassic from "./ExperienceClassic"
import MobileViewportWrapper from "../ui/MobileViewportWrapper"
import type { TExperience } from "../../types/TExperience"

interface ExperienceWrapperProps {
  experiences: TExperience[]
  id: string
}

const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({ experiences, id }) => {
  const { theme } = useTheme()

  return (
    <MobileViewportWrapper id={id} mobileHeightMode="viewport" enableSmoothScroll={true} minHeight="100dvh">
      {theme === "terminal" ? (
        <ExperienceTerminal experiences={experiences} id={id} />
      ) : (
        <ExperienceClassic experiences={experiences} id={id} />
      )}
    </MobileViewportWrapper>
  )
}

export default ExperienceWrapper
