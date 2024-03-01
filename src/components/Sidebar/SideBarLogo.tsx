import React from "react";
import portrait from "../../assets/portrait noBG.png";

const SideBarLogo: React.FC = () => {
  return (
    <img
      className="my-8 mx-4 h-40 w-40\ rounded-full object-cover flex-1 bg-almost-white"
      src={portrait}
      alt="protrait"
    />
  );
};

export default SideBarLogo;
