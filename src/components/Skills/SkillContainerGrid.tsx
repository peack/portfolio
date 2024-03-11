import React from "react";
import SkillPillContainer from "./SkillPillContainer.tsx";
import SkillChart from "./SkillChart.tsx";
import ContentBoxGrid from "../Layout/ContentBoxGrid.tsx";
import ContentBoxFlex from "../Layout/ContentBoxFlex.tsx";

interface SkillContainerProps {
  id: string;
}

const SkillContainer: React.FC<SkillContainerProps> = ({ id }) => {
  return (
    // <ContentBoxGrid id={id} gridCol={3} gridRow={1}>
    <ContentBoxFlex>
      <SkillChart />
      <SkillPillContainer />
    </ContentBoxFlex>
    //   {/* <div className="flex-nowrap"> */}
    //   {/* </div> */}
    // {/* </ContentBoxGrid> */}
  );
};

export default SkillContainer;
