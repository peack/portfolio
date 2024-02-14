import React from "react";
import { NavItem } from "../types/NavItem";
import SideBarLogo from "./SideBarLogo";
import SidebarHeader from "./SidebarHeader.tsx";

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => (
  <>
    <div className="h-full bg-gray-800 w-64 fixed left-0 top-0 overflow-auto">
      <nav className="mx-4">
        <div className="flex justify-center items-center ">
          <SideBarLogo />
        </div>
        <SidebarHeader title={"Mikael Galliot"} />
        {navItems.map((item: NavItem, index: React.Key | null | undefined) => (
          <a
            key={index}
            href={item.href}
            className="my-2 text-white hover:bg-gray-700 p-2 rounded-md block"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  </>
);

export default Sidebar;
