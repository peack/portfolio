import React from "react";
import { NavItem } from "../types/NavItem";
import SideBarLogo from "./SideBarLogo";
import SidebarHeader from "./SidebarHeader.tsx";

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => (
  <nav>
    <div className="flex-none h-screen bg-gray-800 w-48">
      <div className="flex justify-center items-center ">
        <SideBarLogo />
      </div>
      <SidebarHeader title={"Mikael Galliot"} />
      {navItems.map((item: NavItem, index: React.Key | null | undefined) => (
        <a
          key={index}
          href={item.href}
          className="m-2 text-white hover:bg-gray-700 p-2 rounded block"
        >
          {item.name}
        </a>
      ))}
    </div>
  </nav>
);

export default Sidebar;
