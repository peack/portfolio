import React from "react"
import { ChevronRight } from "lucide-react"
import type { TExperience } from "../../types/TExperience"

interface ExperienceCompactCardProps {
  experience: TExperience
  index: number
  onViewDetails: (experience: TExperience) => void
}

const ExperienceCompactCard: React.FC<ExperienceCompactCardProps> = ({ experience, index, onViewDetails }) => {
  return (
    <div
      onClick={() => onViewDetails(experience)}
      className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-4 group"
    >
      {/* Icon */}
      {experience.references && experience.references.length > 0 && experience.references[0].iconLink && (
        <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
          <img
            src={experience.references[0].iconLink}
            alt={`${experience.references[0].name} icon`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-sm truncate mb-1">{experience.title}</h3>
        <p className="text-xs text-gray-500 truncate">
          {experience.date_start} - {experience.date_end || "Present"}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
    </div>
  )
}

export default ExperienceCompactCard
