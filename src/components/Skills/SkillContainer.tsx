import ContentBox from "../ContentBox.tsx";
import React from "react";
import SkillPillContainer from "./SkillPillContainer.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBox id={id} gridCol={2} gridRow={2}>
      <SkillPillContainer />
    </ContentBox>
  );
};

export default SkillContainer;
