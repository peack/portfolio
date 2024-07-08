import React from "react";
import { TNavItem } from "../../types/TNavItem";
import SidebarHeader from "./SidebarHeader.tsx";
import SidebarSocialContainer from "./SidebarSocialContainer.tsx";
import MenuIconOpen from "@mui/icons-material/MenuOpen";
import SideBarLogo from "./SideBarLogo.tsx";

interface SidebarProps {
  navItems: TNavItem[];
  isSidebarOpen: boolean;
  handleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  isSidebarOpen: isSidebarOpen,
  handleSidebar: handleSidebar,
}) => {
  return (
    <div
      className={` ${isSidebarOpen ? "w-48" : "w-0"} flex-shrink-0 text-white flex overflow-hidden transition-all duration-300 overflow-y-auto  bg-gray-800 h-[calc(100dvh)] transform ${isSidebarOpen ? "" : "-translate-x-full"} font-[RobotoSlab-Bold]`}
    >
      <div className="container justify-center items-center text-center">
        <span className="flex justify-end" onClick={handleSidebar}>
          <MenuIconOpen />
        </span>
        <SideBarLogo />
        <div className="flex justify-center items-center">
          <SidebarHeader title={"Mikael Galliot"} />
        </div>
        <div className="flex-col content-center sidebarLinks nav-links">
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
