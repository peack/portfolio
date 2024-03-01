import React from "react";
import skillsData from "../../data/skills.json";
import { TSkill } from "../../types/TSkill";
import ContentBox from "../ContentBox.tsx";
import Skill from "./Skill.tsx";

const SkillContainer: React.FC = () => {
  const skills: TSkill[] = skillsData.skills;

  return (
    <ContentBox gridCol={2} gridRow={2}>
      <div className="grid m-10 max-w-fit ">
        <div className=" border min-w-96 rounded shadow-md ">
          <div className="bg-gray-200 p-3 rounded-t">
            <h2 className="text-lg font-semibold">Header</h2>
          </div>
          <div className="skillsbox p-4 ">
            {skills.map((skill) => (
              <Skill key={skill.name} skill={skill} active={false} />
            ))}
          </div>
        </div>
      </div>
    </ContentBox>
  );
};

export default SkillContainer;
