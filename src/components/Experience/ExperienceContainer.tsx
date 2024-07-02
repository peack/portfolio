import { TExperience } from "../../types/TExperience";
import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import ContentBoxFlex from "../Layout/ContentBoxFlex";

interface ExperienceContainerProps {
  experiences: TExperience[];
  id: string;
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({
  experiences,
  id,
}) => {
  return (
    <ContentBoxFlex id={id}>
      <ExperienceTimeline experiences={experiences} />
    </ContentBoxFlex>
  );
};

export default ExperienceContainer;
