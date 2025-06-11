import React from "react"
import { Home, User, Briefcase, Mail } from "lucide-react"
import type { TNavItem } from "../../types/TNavItem"

interface MyNavBarProps {
  navItems: TNavItem[]
}

// Icon mapping for navigation items
const getNavIcon = (name: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Home: Home,
    About: User,
    Projects: Briefcase,
    Contact: Mail,
  }
  return iconMap[name] || Home
}

const MyNavBar: React.FC<MyNavBarProps> = ({ navItems }) => {
  return (
    <>
      {/* Desktop navigation - top */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              {navItems.map((item: TNavItem, index: number) => {
                const Icon = getNavIcon(item.name)
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation - bottom */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/95 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {navItems.map((item: TNavItem, index: number) => {
            const Icon = getNavIcon(item.name)
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-center p-2 rounded-full hover:bg-accent transition-colors"
                title={item.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default MyNavBar
