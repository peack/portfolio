import React, { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Eye } from "lucide-react"
import type { TExperience } from "../../types/TExperience"
import CRTBackground from "../ui/crt-background"
import TerminalWindow from "../ui/terminal-window"
import ExperienceList from "./ExperienceList"
import ExperienceDetail from "./ExperienceDetail"

interface ExperienceTerminalProps {
  experiences: TExperience[]
  id: string
}

export const ExperienceTerminal: React.FC<ExperienceTerminalProps> = ({ experiences, id }) => {
  const [selectedExperience, setSelectedExperience] = useState<TExperience | null>(
    experiences.length > 0 ? experiences[0] : null
  )

  const handleExperienceSelect = (experience: TExperience) => {
    setSelectedExperience(experience)
  }

  return (
    <CRTBackground
      id={id}
      showScrollIndicator={true}
      scrollTarget="contact"
      showBackIndicator={true}
      scrollBackTarget="skills"
      scrollIndicatorDelay={2.0}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Skills Terminal Window */}
          <TerminalWindow
            title="mikael@portfolio:~/projects"
            icon={Briefcase}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <ExperienceList
              experiences={experiences}
              selectedExperience={selectedExperience}
              onExperienceSelect={handleExperienceSelect}
              isDesktop={true}
            />
          </TerminalWindow>

          {/* Experience Detail Terminal Window */}
          <TerminalWindow
            title="project-viewer"
            icon={Eye}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <ExperienceDetail experience={selectedExperience} isDesktop={true} />
          </TerminalWindow>
        </div>

        {/* Floating Icon Window */}
        {selectedExperience?.references &&
          selectedExperience.references.length > 0 &&
          selectedExperience.references[0].iconLink && (
            <motion.div
              key={selectedExperience.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-4 right-4 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-green-500/30 p-4 shadow-xl z-10"
            >
              <img
                src={selectedExperience.references[0].iconLink}
                alt={`${selectedExperience.title} icon`}
                className="w-16 h-16 object-contain"
              />
            </motion.div>
          )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {/* Experience List Terminal Window */}
        <TerminalWindow
          title="mikael@portfolio:~/projects"
          icon={Briefcase}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shadow-xl"
          contentClassName="font-mono text-green-400 space-y-3"
        >
          <ExperienceList
            experiences={experiences}
            selectedExperience={selectedExperience}
            onExperienceSelect={handleExperienceSelect}
            isDesktop={false}
          />
        </TerminalWindow>

        {/* Experience Detail Terminal Window */}
        <TerminalWindow
          title="project-viewer"
          icon={Eye}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="shadow-xl"
          contentClassName="font-mono text-green-400 space-y-3"
        >
          <ExperienceDetail experience={selectedExperience} isDesktop={false} />
        </TerminalWindow>
      </div>
    </CRTBackground>
  )
}
