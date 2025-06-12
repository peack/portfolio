import React from "react"
import { useTheme } from "../contexts/ThemeContext"
import HomePageTerminal from "./HomePageTerminal"
import HomePageClassic from "./HomePageClassic"
import MobileViewportWrapper from "./ui/MobileViewportWrapper"

interface HomeWrapperProps {
  id: string
}

const HomeWrapper: React.FC<HomeWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return (
    <MobileViewportWrapper id={id} mobileHeightMode="fixed" enableSmoothScroll={true} minHeight="100dvh">
      {theme === "terminal" ? <HomePageTerminal id={id} /> : <HomePageClassic id={id} />}
    </MobileViewportWrapper>
  )
}

export default HomeWrapper
