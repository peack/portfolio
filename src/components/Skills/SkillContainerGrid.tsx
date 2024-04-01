import React from "react";
import ContentBoxGrid from "../Layout/ContentBoxGrid.tsx";
import SkillBar from "./SkillBar.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBoxGrid gridCol={2} gridRow={1} sizing={"min-h-20vh max-h-50vh"}>
      <div className="">
        <span>SKILLS</span>
      </div>
      <SkillBar title="Web Design" percent={45} />
      <SkillBar title="Stuff" percent={70} />
      <SkillBar title="O e eew we" percent={30} />
      <SkillBar title="A really really long skill title" percent={100} />
    </ContentBoxGrid>
  );
};

export default SkillContainer;
