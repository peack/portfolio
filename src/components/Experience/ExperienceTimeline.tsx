/* eslint-disable react/prop-types */
import type { TExperience } from "../../types/TExperience"
import ExperienceCard from "./ExperienceCard"
import { useState } from "react"

interface ExperienceTimelineProps {
  experiences: TExperience[]
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(null)

  const toggleOpen = (id: string) => {
    setActiveExperienceId(activeExperienceId === id ? null : id)
  }

  return (
    <div className="relative p-4">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="flex items-start mb-8 last:mb-0">
          {/* Timeline dates - left side */}
          <div className="flex-shrink-0 w-20 md:w-32 lg:w-40 pr-4 text-right">
            <div className="font-bold text-sm md:text-base text-gray-600">{experience.date_start}</div>
            <div className="font-bold text-sm md:text-base text-gray-600">{experience.date_end}</div>
          </div>

          {/* Timeline line and dot */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            {index < experiences.length - 1 && <div className="w-px h-16 bg-gray-300 mt-2"></div>}
          </div>

          {/* Timeline content - right side */}
          <div className="flex-1 ml-4">
            <ExperienceCard
              experience={experience}
              key={index}
              isOpen={activeExperienceId === experience.id}
              toggleOpen={toggleOpen}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline
