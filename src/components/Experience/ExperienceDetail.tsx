import React from "react"
import { motion } from "framer-motion"
import type { TExperience } from "../../types/TExperience"

interface ExperienceDetailProps {
  experience: TExperience | null
  isDesktop: boolean
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience, isDesktop }) => {
  if (!experience) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 text-center py-8">
        No project selected
      </motion.div>
    )
  }

  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>
        $ cat {experience.title.toLowerCase().replace(/\s+/g, "_")}.md
      </div>

      <div className="space-y-3">
        {/* Title and Period */}
        <div>
          <h3 className={`text-white font-semibold ${isDesktop ? "text-lg" : "text-base"}`}>{experience.title}</h3>
          <p className={`text-green-400 ${isDesktop ? "text-sm" : "text-xs"}`}>
            {experience.date_start} - {experience.date_end || "Present"}
          </p>
        </div>

        {/* Description */}
        <div
          className={`text-gray-200 leading-relaxed ${isDesktop ? "text-sm" : "text-xs"}`}
          style={{ whiteSpace: "pre-line" }}
        >
          {experience.description}
        </div>

        {/* Tech Stack */}
        {experience.techStack && experience.techStack.length > 0 && (
          <div>
            <p className={`text-green-400 font-medium ${isDesktop ? "text-sm" : "text-xs"} mb-2`}>Tech Stack:</p>
            <div className="flex flex-wrap gap-1">
              {experience.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 bg-gray-700/50 text-green-300 rounded text-xs border border-green-500/30`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* References/Links */}
        {experience.references && experience.references.length > 0 && (
          <div>
            <p className={`text-green-400 font-medium ${isDesktop ? "text-sm" : "text-xs"} mb-2`}>References:</p>
            <div className="flex flex-wrap gap-2">
              {experience.references.map((ref, index) => (
                <a
                  key={index}
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600/50 text-blue-300 rounded text-xs hover:bg-blue-600/70 transition-colors border border-blue-500/30"
                >
                  {ref.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(experience.githubLink || experience.liveLink) && (
          <div className="flex flex-wrap gap-2">
            {experience.githubLink && (
              <a
                href={experience.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-600/50 text-green-400 rounded text-xs hover:bg-gray-600/70 transition-colors border border-green-500/30"
              >
                GitHub
              </a>
            )}
            {experience.liveLink && (
              <a
                href={experience.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600/50 text-blue-300 rounded text-xs hover:bg-blue-600/70 transition-colors border border-blue-500/30"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default ExperienceDetail
