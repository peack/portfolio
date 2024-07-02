import React from "react";
import portrait from "../../assets/portrait noBG.png";

const SideBarLogo: React.FC = () => {
  return (
    <img
      className="my-8 mx-4 h-160 w-160 rounded-full object-cover flex-1 bg-almost-white"
      src={portrait}
      alt="portrait"
      style={{ width: "160px", height: "160px" }}
    />
  );
};

export default SideBarLogo;
