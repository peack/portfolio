import React, { useEffect, useState } from "react";

interface SkillbarProps {
  title: string;
  percent: number;
}

const Skillbar: React.FC<SkillbarProps> = ({ title, percent }) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const timeout = Math.floor(Math.random() * 20) + 10;
    const interval = setInterval(() => {
      if (width < percent) {
        setWidth((prevWidth) => prevWidth + 1);
      } else {
        clearInterval(interval);
      }
    }, timeout);

    return () => clearInterval(interval);
  }, [percent, width]);

  const progressStyle = {
    width: `${width}%`,
  };

  return (
    <>
      {window.innerWidth > 300 ? (
        <div className="skillbar p-2 lg:p-4 sm:min-w-10vh lg:min-w-70vh flex-grow overflow-x-hidden ">
          <div className="skill-bar:before"></div>
          <div className="skillbar-bar" style={progressStyle}>
            <span className="skillbar-title">{title}</span>
          </div>
          <span className="skill-bar-percent">{width}%</span>
        </div>
      ) : (
        <>
          <div className="">
            <span className="skillbar-title">{title}</span>
          </div>
          <span className="skill-bar-percent">{width}%</span>
        </>
      )}
    </>
  );
};
export default Skillbar;
