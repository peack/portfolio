import React from "react"
import type { TExperience } from "../../types/TExperience"

interface ExperienceProps {
  experience: TExperience
  isOpen: boolean
  toggleOpen: (id: string) => void
}

const ExperienceCard: React.FC<ExperienceProps> = ({ experience, isOpen, toggleOpen }) => {
  return (
    <div
      style={{ whiteSpace: "pre-line" }}
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-2 lg:p-6 w-full lg:m-0.5 "
    >
      <div
        className="font-bold text-xl mb-2 flex justify-between cursor-pointer"
        onClick={() => toggleOpen(experience.id)}
      >
        {experience.title}
        <div className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300`}>{">"}</div>
      </div>
      <div className="flex flex-col md:flex-row item-center">
        {isOpen && (
          <div className="flex md:flex-col items-start flex-row md:col-span-2 justify-center mb-2 md:justify-evenly flex-shrink-0 references-icons pr-2">
            {experience.references?.map((reference, index) => (
              <a key={index} href={reference?.href || ""} target="_blank">
                <img
                  key={index}
                  className="w-16 h-16 m-2 rounded-2xl shadow-2xl  transition-transform duration-500 ease-in-out hover:translate-y-1 "
                  src={reference?.iconLink || ""}
                  alt={reference?.name || ""}
                  style={{ alignSelf: "center" }}
                />
              </a>
            ))}
          </div>
        )}
        {isOpen ? (
          <p className="text-gray-700 text-sm">{experience.description}</p>
        ) : (
          experience.description &&
          experience.description.length > 80 && (
            <div className="flex-1">
              <p className="text-gray-700 text-sm line-clamp-3 overflow-hidden">
                {experience.description.substring(0, 180).trim()}
                {experience.description.length > 180 && "..."}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
