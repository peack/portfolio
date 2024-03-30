import React from "react";

interface SkillbarProps {
  title: string;
  percent: number;
}

const Skillbar: React.FC<SkillbarProps> = ({ title, percent }) => {
  const progressStyle = {
    width: `${percent}%`,
  };

  return (
    <>
      <div className="skillbar-bar skillbar-bar:before" style={progressStyle}>
        <span className="skillbar-title">{title}</span>
      </div>
      <span className="skill-bar-percent">{percent}%</span>
    </>
  );
};

export default Skillbar;
