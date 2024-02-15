import { TExperience } from "../types/TExperience";
import ExperienceCard from "./ExperienceCard.tsx";
import React from "react";

interface ExperienceContainerProps {
  experiences: TExperience[];
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  experiences,
}) => {
  return (
    <div className="flex flex-wrap">
      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
};

export default ExperienceContainer;
