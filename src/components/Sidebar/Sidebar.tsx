import React from "react"
import type { TNavItem } from "../../types/TNavItem"
import SidebarHeader from "./SidebarHeader.tsx"
// import SidebarSocialContainer from "./SidebarSocialContainer.tsx"
import SideBarLogo from "./SideBarLogo.tsx"

interface SidebarProps {
  navItems: TNavItem[]
  isSidebarOpen: boolean
  handleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, isSidebarOpen: isSidebarOpen, handleSidebar: handleSidebar }) => {
  return (
    <div
      className={` ${isSidebarOpen ? "w-48" : "w-0"} content-box flex-shrink-0 text-white flex overflow-hidden transition-all duration-300 overflow-y-hidden bg-gray-800 h-[calc(100dvh)] transform ${isSidebarOpen ? "" : "-translate-x-full"} font-[RobotoSlab-Bold]`}
    >
      <div className="container justify-center items-center text-center">
        <span className="flex justify-end" onClick={handleSidebar}>
          {"O"}
        </span>
        <SideBarLogo />
        <div className="flex justify-center items-center">
          <SidebarHeader title={"Mikael Galliot"} />
        </div>
        <div className="flex-col flex-shrink content-center sidebarLinks nav-links overflow-y-auto">
          {navItems.map((item: TNavItem, index: React.Key | null | undefined) => (
            <a key={index} href={item.href} className="m-2 text-white p-2 rounded block ">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-full backdrop-blur-xl">
        {/* <SidebarSocialContainer /> */}
        {"Socials here"}
      </div>
    </div>
  )
}

export default Sidebar
