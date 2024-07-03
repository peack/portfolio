import React from "react";
import { TExperience } from "../../types/TExperience";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExperienceProps {
  experience: TExperience;
  isOpen: boolean;
  toggleOpen: (id: string) => void;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  experience,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-3 lg:p-6 w-full lg:m-0.5">
      <div
        className="font-bold text-xl mb-2 flex justify-between cursor-pointer"
        onClick={() => toggleOpen(experience.id)}
      >
        {experience.title}
        <div
          className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
        >
          <ExpandMoreIcon />
        </div>
      </div>
      {isOpen && (
        <p className="text-gray-700 text-sm">{experience.description}</p>
      )}
      {!isOpen &&
        experience.description &&
        experience.description.length > 80 && (
          <p className="text-gray-700 text-sm line-clamp-3 overflow-hidden">
            {experience.description.substring(0, 180).trim()}
            {experience.description.length > 180 && "..."}
          </p>
        )}
    </div>
  );
};

export default ExperienceCard;
