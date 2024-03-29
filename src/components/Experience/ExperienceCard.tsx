import React from "react";
import { TExperience } from "../../types/TExperience";

interface ExperienceProps {
  experience: TExperience;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-6 w-full m-0.5">
      <div className="font-bold text-xl mb-2">{experience.title}</div>
      {experience.date && (
        <div className="text-gray-500 mb-2">{experience.date}</div>
      )}
      <p className="text-gray-700 text-sm">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
