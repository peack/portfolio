import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

interface ContactInfoProps {
  isDesktop: boolean
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isDesktop }) => {
  const contactLinks = [
    {
      name: "Email",
      value: "mikael.galliot@proton.me",
      href: "mailto:mikael.galliot@proton.me",
      icon: Mail,
    },
    {
      name: "GitHub",
      value: "github.com/peack",
      href: "https://github.com/peack",
      icon: Github,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/mike-galliot-a22277270",
      href: "https://www.linkedin.com/in/mike-galliot-a22277270/",
      icon: Linkedin,
    },
    {
      name: "Location Timezone",
      value: "GMT+1",
      href: null,
      icon: MapPin,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>$ cat contact_info.txt</div>

      <div className={`mt-4 ${isDesktop ? "space-y-3" : "space-y-2"}`}>
        {contactLinks.map((contact, index) => (
          <motion.div
            key={contact.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className={`flex items-center ${isDesktop ? "gap-3" : "gap-2"}`}
          >
            <contact.icon className={`${isDesktop ? "w-4 h-4" : "w-3 h-3"} text-green-400 flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className={`text-green-400 font-medium ${isDesktop ? "text-sm" : "text-xs"}`}>{contact.name}:</div>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-200 hover:text-green-300 transition-colors ${isDesktop ? "text-sm" : "text-xs"} truncate block`}
                >
                  {contact.value}
                </a>
              ) : (
                <span className={`text-gray-200 ${isDesktop ? "text-sm" : "text-xs"} truncate block`}>
                  {contact.value}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default ContactInfo
