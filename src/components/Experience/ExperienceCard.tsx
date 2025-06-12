import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import type { TExperience } from "../../types/TExperience"

interface ExperienceCardProps {
  experience: TExperience
  index: number
  onViewDetails: (experience: TExperience) => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full h-full flex flex-col"
    >
      {/* Icons Row */}
      {experience.references && experience.references.length > 0 && (
        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
          {experience.references.slice(0, 3).map(
            (reference, refIndex) =>
              reference.iconLink && (
                <div key={refIndex} className="w-12 h-12 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img src={reference.iconLink} alt={`${reference.name} icon`} className="w-full h-full object-cover" />
                </div>
              )
          )}
        </div>
      )}

      {/* Title and Date */}
      <div className="mb-4 flex-shrink-0">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">{experience.title}</h3>
        <p className="text-sm text-gray-500">
          {experience.date_start} - {experience.date_end || "Present"}
        </p>
      </div>

      {/* Description Preview */}
      {experience.description && (
        <div className="mb-4 flex-1">
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
            {experience.description.length > 160
              ? `${experience.description.substring(0, 160)}...`
              : experience.description}
          </p>
        </div>
      )}

      {/* Tech Stack */}
      {experience.techStack && experience.techStack.length > 0 && (
        <div className="mb-4 flex-shrink-0">
          <div className="flex flex-wrap gap-1">
            {experience.techStack.slice(0, 4).map((tech, techIndex) => (
              <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
            {experience.techStack.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                +{experience.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-auto flex-shrink-0">
        <button
          onClick={() => onViewDetails(experience)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
        >
          <Eye size={14} />
          View Details
        </button>

        {/* Quick Reference Link */}
        {experience.references && experience.references.length > 0 && experience.references[0].href && (
          <a
            href={experience.references[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={12} />
            View App
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ExperienceCard
