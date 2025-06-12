// import PropTypes from "prop-types";
import React from "react"
import { ContactTerminal } from "./ContactTerminal"

interface ContactContainerProps {
  id: string
}

const ContactContainer: React.FC<ContactContainerProps> = ({ id }) => {
  return <ContactTerminal id={id} />
}

export default ContactContainer
