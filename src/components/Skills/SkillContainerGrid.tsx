import React from "react";
import SkillPillContainer from "./SkillPillContainer.tsx";
import SkillChart from "./SkillChart.tsx";
import ContentBoxFlex from "../Layout/ContentBoxFlex.tsx";
import SkillBarsComponent from "./SkillbarComponent.tsx";
import ContentBoxGrid from "../Layout/ContentBoxGrid.tsx";
import SkillBar from "./SkillBar.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    <ContentBoxFlex>
      <div className="skillbar">
        <SkillBar title="Web design" percent={30} />
        {/* <SkillBar title="development" percent={70} /> */}
      </div>
    </ContentBoxFlex>
  );
};

export default SkillContainer;
