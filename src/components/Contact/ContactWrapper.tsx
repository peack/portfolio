import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import ContactClassic from "./ContactClassic"
import MobileViewportWrapper from "../ui/MobileViewportWrapper"
import { ContactTerminal } from "./ContactTerminal"

interface ContactWrapperProps {
  id: string
}

const ContactWrapper: React.FC<ContactWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return (
    <MobileViewportWrapper id={id} mobileHeightMode="content" enableSmoothScroll={true} minHeight="100dvh">
      {theme === "terminal" ? <ContactTerminal id={id} /> : <ContactClassic id={id} />}
    </MobileViewportWrapper>
  )
}

export default ContactWrapper
