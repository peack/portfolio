import React, { useState } from "react";
import skillsData from "../../data/skills.json";
import { TSkill } from "../../types/TSkill";
import SkillPill from "./SkillPill.tsx";

interface DropdownItemProps {
  tag: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ tag }) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
      tabIndex={-1}
      id="menu-item-0"
    >
      {tag}
    </a>
  );
};

interface DropdownProps {
  tagArr: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ tagArr }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={toggleDropdown}
        >
          Options
          {/* Arrow */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1 h-48" role="none">
            {/* Dropdown items */}
            {tagArr.map((tagItem) => {
              return <DropdownItem key={tagItem} tag={tagItem} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
const SkillPillContainer: React.FC = () => {
  const skills: TSkill[] = skillsData.skills;

  const skillsTag: string[] = skills.reduce(
    (skillArr: string[], skill: TSkill) => {
      skill.tags.map((skillTag: string) => {
        if (!skillArr.includes(skillTag)) {
          skillArr.push(skillTag);
        }
      });
      return skillArr;
    },
    []
  );

  return (
    <div className="col-span-1 ">
      <div className="border rounded shadow-md ">
        <div className="flex  bg-gray-200 p-3 rounded-t justify-between">
          <h2 className="title start-0 text-lg font-semibold">Header</h2>
          <div className="en">
            <Dropdown tagArr={skillsTag} />
          </div>
        </div>
        <div className="">
          <p>{skillsTag.map((item) => `| ${item}|`)} </p>
          {/*items*/}
        </div>
        <div className="">
          <div className="p-4 flex flex-wrap overflow-auto">
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
