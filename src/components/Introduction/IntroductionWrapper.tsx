import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import IntroductionTerminal from "./IntroductionTerminal"
import IntroductionClassic from "./IntroductionClassic"
import MobileViewportWrapper from "../ui/MobileViewportWrapper"

interface IntroductionWrapperProps {
  id: string
}

const IntroductionWrapper: React.FC<IntroductionWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return (
    <MobileViewportWrapper id={id} mobileHeightMode="viewport" enableSmoothScroll={true} minHeight="100dvh">
      {theme === "terminal" ? <IntroductionTerminal id={id} /> : <IntroductionClassic id={id} />}
    </MobileViewportWrapper>
  )
}

export default IntroductionWrapper
