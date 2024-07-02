import React from "react";
import { TSkill } from "../../types/TSkill";

interface SkillProps {
  skill: TSkill;
  active: boolean;
}

const SkillPill: React.FC<SkillProps> = ({ skill, active = false }) => {
  return (
    <div
      key={skill.name}
      className={`rounded-xl max-w-48 m-0.5 text-white height font-medium border-2 border-blue-600 bg-blue-900 px-4 p-2 mr-2 text-center text-sm ${active ? "border-blue-600" : "border-blue-300 border-3 "} `}
    >
      {skill.name}
    </div>
  );
};

export default SkillPill;
