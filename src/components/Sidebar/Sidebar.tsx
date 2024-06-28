import React from "react";
import { TNavItem } from "../../types/TNavItem";
import SideBarLogo from "./SideBarLogo.tsx";
import SidebarHeader from "./SidebarHeader.tsx";
import SidebarSocialContainer from "./SidebarSocialContainer.tsx";

interface SidebarProps {
  navItems: TNavItem[];
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  isSidebarOpen: isSidebarOpen,
}) => {
  return (
    <div
      className={`sidebar overflow-auto bg-gray-800 h-screen w-48 transition-transform transform ${isSidebarOpen ? "" : "-translate-x-full"}`}
    >
      <div className="container  justify-center items-center text-center">
        <div className="flex">
          <SideBarLogo />
        </div>
        <div className="flex-col content-center sidebarLinks">
          <SidebarHeader title={"Mikael Galliot"} />
          {navItems.map(
            (item: TNavItem, index: React.Key | null | undefined) => (
              <a
                key={index}
                href={item.href}
                className="m-2 text-white p-2 rounded block "
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <SidebarSocialContainer />
      </div>
    </div>
  );
};

export default Sidebar;
