import React, { useEffect, useState } from "react";
import SkillBar from "./SkillBar.tsx";
import Dropdown from "../Dropdown.tsx";
import CategoriesData from "./../../data/category.json";
import SkillsData from "./../../data/skills.json";
import SkillOverall from "./../../data/skillOverall.json";

const overallSkills: SkillsData = SkillOverall;

interface Skill {
  name: string;
  skill_rate: number;
  tags: string[];
  category: string[];
}

interface Category {
  name: string;
  skills: string[];
}

interface SkillsData {
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const skillsD: SkillsData = SkillsData;
  const [activeCat, setActiveCat] = useState("Overall");
  const [topSkills, setTopSkills] = useState<Skill[]>(overallSkills.skills);

  useEffect(() => {
    if (activeCat == "Overall") {
      setTopSkills(overallSkills.skills);
      return;
    }
    const filteredSkills = filterSkills(
      getTopSkillsByCategory(CategoriesData, activeCat),
      skillsD.skills
    );

    filteredSkills.sort((a, b) => b.skill_rate - a.skill_rate);

    const top4Skills: Skill[] = filteredSkills.slice(0, 4);
    top4Skills.sort((a, b) => a.name.localeCompare(b.name));

    setTopSkills(top4Skills);
  }, [activeCat, skillsD]);

  const handleOnClick = (newCat: string) => {
    setActiveCat(newCat);
  };

  const catArray = [
    "Overall",
    ...CategoriesData.map((category) => category.name),
  ];

  function getTopSkillsByCategory(
    categories: Category[],
    targetCategory: string
  ): string[] {
    const filteredSkills: string[] = [];

    for (const category of categories) {
      if (category.name === targetCategory) {
        filteredSkills.push(...category.skills);
        break;
      }
    }
    return filteredSkills;
  }

  function filterSkills(
    filteredCategories: string[],
    skills: Skill[]
  ): Skill[] {
    const matchedSkills: Skill[] = [];
    for (const skill of skills) {
      for (const tag of skill.tags) {
        if (filteredCategories.includes(tag)) {
          matchedSkills.push(skill);
          break;
        }
      }
    }
    return matchedSkills;
  }

  return (
    <>
      <div className="flex justify-between">
        <span className="text-xl font-bold">SKILLS</span>
        <Dropdown
          items={catArray}
          activeCat={activeCat}
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="skill-transform ">
        {topSkills.map((skill) => (
          <SkillBar
            key={skill.name}
            title={skill.name}
            percent={skill.skill_rate}
          />
        ))}
      </div>
    </>
  );
};
