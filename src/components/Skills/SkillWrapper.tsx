import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import SkillsClassic from "./SkillsClassic"
import MobileViewportWrapper from "../ui/MobileViewportWrapper"
import { SkillsTerminal } from "./SkillsTerminal"

interface SkillWrapperProps {
  id: string
}

const SkillWrapper: React.FC<SkillWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return (
    <MobileViewportWrapper id={id} mobileHeightMode="content" enableSmoothScroll={true} minHeight="100dvh">
      {theme === "terminal" ? <SkillsTerminal id={id} /> : <SkillsClassic id={id} />}
    </MobileViewportWrapper>
  )
}

export default SkillWrapper
