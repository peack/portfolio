import { TExperience } from "../types/TExperience";
import ExperienceCard from "./ExperienceCard.tsx";
import React from "react";

interface ExperienceContainerProps {
  experiences: TExperience[];
  id: string;
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  experiences,
  id,
}) => {
  return (
    <div id={id} className="flex flex-wrap m-10">
      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
};

export default ExperienceContainer;
