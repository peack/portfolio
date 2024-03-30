import React from "react";

interface SkillBarProps {
  title: string;
  percent: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ title, percent }) => {
  return (
    <div className="skillbar" data-percent={percent}>
      <div className="skillbar-title">{title}</div>
      <div className="skill-bar-percent">{percent}</div>
      <div className="skillbar-bar" style={{ width: percent }}></div>
    </div>
  );
};

const SkillBarsComponent: React.FC = () => {
  return (
    <div className="wrapper">
      <SkillBar title="Web design" percent="55%" />
      <SkillBar title="development" percent="80%" />
      <SkillBar title="Photography" percent="40%" />
      <SkillBar title="branding" percent="70%" />
    </div>
  );
};

export default SkillBarsComponent;
