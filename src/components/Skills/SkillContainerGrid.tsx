import React from "react";
import SkillPillContainer from "./SkillPillContainer.tsx";
import SkillChart from "./SkillChart.tsx";
import ContentBoxFlex from "../Layout/ContentBoxFlex.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBoxFlex id={id}>
      <SkillChart />
      <SkillPillContainer />
    </ContentBoxFlex>
  );
};

export default SkillContainer;
