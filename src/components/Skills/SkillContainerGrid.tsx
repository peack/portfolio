import React from "react"
import { SkillsTerminal } from "./SkillsTerminal"

interface SkillContainerGridProps {
  id: string
}

const SkillContainerGrid: React.FC<SkillContainerGridProps> = ({ id }) => {
  return <SkillsTerminal />
}

export default SkillContainerGrid
