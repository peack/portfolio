import React from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { ContactTerminal } from "./ContactTerminal"
import ContactClassic from "./ContactClassic"

interface ContactWrapperProps {
  id: string
}

const ContactWrapper: React.FC<ContactWrapperProps> = ({ id }) => {
  const { theme } = useTheme()

  return theme === "terminal" ? <ContactTerminal id={id} /> : <ContactClassic id={id} />
}

export default ContactWrapper
