import React from "react";
import SkillPillContainer from "./SkillPillContainer.tsx";
import SkillChart from "./SkillChart.tsx";
import ContentBox from "../ContentBox.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBox id={id} gridCol={2} gridRow={1}>
      <SkillChart />
      <SkillPillContainer />
    </ContentBox>
  );
};

export default SkillContainer;
