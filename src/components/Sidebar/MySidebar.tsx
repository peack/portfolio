import React from "react"
import { User, Briefcase, Mail } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import type { TNavItem } from "../../types/TNavItem"
import SidebarHeaderComponent from "./SidebarHeader.tsx"
import SideBarLogo from "./SideBarLogo.tsx"

interface MySidebarProps {
  navItems: TNavItem[]
  isSidebarOpen: boolean
  handleSidebar: () => void
}

// Icon mapping for navigation items
const getNavIcon = (name: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Home: User,
    About: User,
    Projects: Briefcase,
    Contact: Mail,
  }
  return iconMap[name] || User
}

const MySidebar: React.FC<MySidebarProps> = ({ navItems, isSidebarOpen, handleSidebar }) => {
  return (
    <div className="hidden lg:block">
      <SidebarProvider open={isSidebarOpen} onOpenChange={handleSidebar}>
        <Sidebar variant="sidebar" side="left" className="border-sidebar-border">
          <SidebarHeader className="border-b border-sidebar-border">
            <div className="flex items-center space-x-2 p-2">
              <SideBarLogo />
              <SidebarHeaderComponent title="Mikael Galliot" />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item: TNavItem, index: number) => {
                    const Icon = getNavIcon(item.name)
                    return (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                          <a href={item.href} className="flex items-center gap-2">
                            <Icon className="h-4 w-4" />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-sidebar-border">
            <div className="p-4">
              <div className="text-xs text-sidebar-foreground/60 text-center">Socials here</div>
            </div>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}

export default MySidebar
