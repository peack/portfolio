import React from "react";

interface SidebarHeaderProps {
  title: string;
  description?: string;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="font-sans-bold text-xl py-5">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SidebarHeader;
