import React from "react";
import ContentBoxGrid from "../Layout/ContentBoxGrid.tsx";
import { Skills } from "./Skills.tsx";
interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBoxGrid
      id={id}
      gridCol={2}
      gridRow={1}
      sizing={"min-h-20vh max-h-50vh max-w-90vw"}
    >
      <Skills />
    </ContentBoxGrid>
  );
};

export default SkillContainer;
