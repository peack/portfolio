import React from "react";
import skillsData from "../../data/skills.json";
import { TSkill } from "../../types/TSkill";
import SkillPill from "./SkillPill.tsx";

const SkillPillContainer: React.FC = () => {
  const skills: TSkill[] = skillsData.skills;

  // const skillsTag: string[] = skills.reduce((skill) => {
  //   skill.tags;
  // });

  return (
    <div className="col-span-1">
      <div className="border rounded shadow-md ">
        <div className="bg-gray-200 p-3 rounded-t">
          <h2 className="text-lg font-semibold">Header</h2>
        </div>
        <div className="flex">
          <p>
            {skills.map((skill): string[] => {
              return skill.tags;
            })}
          </p>
        </div>
        <div className="">
          <div className="p-4 flex flex-wrap max-h-50vh overflow-auto">
            {skills.map((skill) => (
              <SkillPill key={skill.name} skill={skill} active={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPillContainer;
