import type { TExperience } from "../../types/TExperience"
import React from "react"
import { ExperienceTerminal } from "./ExperienceTerminal"

interface ExperienceContainerProps {
  experiences: TExperience[]
  id: string
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({ experiences, id }) => {
  return <ExperienceTerminal experiences={experiences} id={id} />
}

export default ExperienceContainer
