import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { SkillsTerminal } from "./SkillsTerminal"
import SkillsClassic from "./SkillsClassic"

interface SkillWrapperProps {
  id: string
}

const SkillWrapper: React.FC<SkillWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return theme === "terminal" ? <SkillsTerminal id={id} /> : <SkillsClassic id={id} />
}

export default SkillWrapper
