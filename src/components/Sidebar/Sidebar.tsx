import React from "react"
import { X, Menu } from "lucide-react"
import type { TNavItem } from "../../types/TNavItem"
import SidebarHeader from "./SidebarHeader.tsx"
import SideBarLogo from "./SideBarLogo.tsx"

interface SidebarProps {
  navItems: TNavItem[]
  isSidebarOpen: boolean
  handleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, isSidebarOpen, handleSidebar }) => {
  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={handleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <SideBarLogo />
            </div>
            <button onClick={handleSidebar} className="rounded-md p-2 text-foreground hover:bg-accent lg:hidden">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-border">
            <SidebarHeader title="Mikael Galliot" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item: TNavItem, index: React.Key | null | undefined) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4">
            <div className="text-xs text-sidebar-foreground/60 text-center">Socials here</div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      {!isSidebarOpen && (
        <button
          onClick={handleSidebar}
          className="fixed top-4 left-4 z-40 rounded-md bg-sidebar p-2 text-sidebar-foreground shadow-lg lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>
      )}
    </>
  )
}

export default Sidebar
