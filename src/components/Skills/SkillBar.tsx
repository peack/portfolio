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
      <div className="skillbar p-2 lg:p-4 min-w-50vh sm:min-w-70vh lg:min-w-100vh flex-grow">
        <div className="skill-bar:before"></div>
        <div className="skillbar-bar" style={progressStyle}>
          <span className="skillbar-title">{title}</span>
        </div>
        <span className="skill-bar-percent">{percent}%</span>
      </div>
    </>
  );
};

export default Skillbar;
