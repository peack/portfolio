import React from "react"
import { motion } from "framer-motion"
import type { TExperience } from "../../types/TExperience"

interface ExperienceListProps {
  experiences: TExperience[]
  selectedExperience: TExperience | null
  onExperienceSelect: (experience: TExperience) => void
  isDesktop: boolean
}

const ExperienceList: React.FC<ExperienceListProps> = ({
  experiences,
  selectedExperience,
  onExperienceSelect,
  isDesktop,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>$ ls projects/</div>

      {isDesktop ? (
        <div className="mt-4 space-y-2">
          {experiences.map((experience, index) => (
            <motion.button
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => onExperienceSelect(experience)}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                selectedExperience?.id === experience.id
                  ? "bg-green-600/30 text-green-300 border border-green-500/50"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
              }`}
            >
              <span>
                {selectedExperience?.id === experience.id ? "▶ " : "  "}
                {experience.title}
              </span>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {experiences.map((experience, index) => (
              <motion.button
                key={experience.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onClick={() => onExperienceSelect(experience)}
                className={`flex-shrink-0 px-3 py-2 rounded text-xs transition-all ${
                  selectedExperience?.id === experience.id
                    ? "bg-green-600/30 text-green-300 border border-green-500/50"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                }`}
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  {experience.references && experience.references.length > 0 && experience.references[0].iconLink && (
                    <img
                      src={experience.references[0].iconLink}
                      alt={`${experience.title} icon`}
                      className="w-5 h-5 object-contain flex-shrink-0"
                    />
                  )}
                  <span className="text-xs">{experience.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default ExperienceList
