import React from "react";
import { TSkill } from "../../types/TSkill";

interface SkillProps {
  skill: TSkill;
  active: boolean;
}

const SkillContainer: React.FC<SkillProps> = ({ skill, active = false }) => {
  return (
    <div
      key={skill.name} // Use skill.name if unique, otherwise fallback to index
      className={` rounded-3xl m-0.5 text-white height font-medium border-2 border-blue-600 bg-blue-900 px-4 p-2 mr-2 text-center text-sm ${active ? "border-blue-600" : "border-red-500"} `}
    >
      {skill.name}
    </div>
  );
};

export default SkillContainer;
