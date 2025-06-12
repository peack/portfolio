import React from "react"
import { Mail, Send, User } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import CRTBackground from "../ui/crt-background"
import TerminalWindow from "../ui/terminal-window"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { ContactClassic } from "./ContactClassic"

interface ContactTerminalProps {
  id: string
}

export const ContactTerminal: React.FC<ContactTerminalProps> = ({ id }) => {
  const { theme } = useTheme()

  if (theme === "classic") {
    return <ContactClassic id={id} />
  }

  return (
    <CRTBackground id={id} showBackIndicator={true} scrollBackTarget="experience" scrollIndicatorDelay={2.0}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Terminal Window */}
          <TerminalWindow
            title="mikael@portfolio:~/contact"
            icon={User}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <ContactInfo isDesktop={true} />
          </TerminalWindow>

          {/* Contact Form Terminal Window */}
          <TerminalWindow
            title="message-composer"
            icon={Send}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <ContactForm isDesktop={true} />
          </TerminalWindow>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Combined Contact Terminal Window */}
        <TerminalWindow
          title="mikael@portfolio:~/contact"
          icon={Mail}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shadow-xl"
          contentClassName="font-mono text-green-400 space-y-4"
        >
          <ContactInfo isDesktop={false} />
          <div className="border-t border-green-500/20 pt-4">
            <ContactForm isDesktop={false} />
          </div>
        </TerminalWindow>
      </div>
    </CRTBackground>
  )
}
