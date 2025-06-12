import React from "react"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { TExperience } from "../../types/TExperience"

interface ExperienceCompactCardProps {
  experience: TExperience
  index: number
  onViewDetails: (experience: TExperience) => void
}

const ExperienceCompactCard: React.FC<ExperienceCompactCardProps> = ({ experience, index, onViewDetails }) => {
  return (
    <div data-theme="light">
      <Card
        onClick={() => onViewDetails(experience)}
        className="cursor-pointer hover:shadow-lg transition-all duration-200 group"
      >
        <CardContent className="flex items-center gap-3 px-3">
          {/* Icon */}
          {experience.references && experience.references.length > 0 && experience.references[0].iconLink && (
            <div className="w-8 h-8 rounded-md overflow-hidden shadow-sm flex-shrink-0">
              <img
                src={experience.references[0].iconLink}
                alt={`${experience.references[0].name} icon`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-xs truncate mb-0.5">{experience.title}</h3>
            <p className="text-xs text-gray-500 truncate">
              {experience.date_start} - {experience.date_end || "Present"}
            </p>
          </div>

          {/* Arrow */}
          <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
        </CardContent>
      </Card>
    </div>
  )
}

export default ExperienceCompactCard
