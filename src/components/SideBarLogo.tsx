import React from "react";
import { portrait } from "../assets/portrait.jpg";

const SideBarLogo: React.FC = () => {
  return (
    <img
      className="my-8 mx-4 h-20 w-20 rounded-full object-cover"
      src={portrait}
      alt="protrait"
    />
  );
};

export default SideBarLogo;
