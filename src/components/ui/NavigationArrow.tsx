import React from "react"
import { type LucideIcon } from "lucide-react"

interface NavigationArrowProps {
  icon: LucideIcon
  onClick: () => void
  className?: string
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({
  icon: Icon,
  onClick,
  className = "text-gray-400 hover:text-blue-400",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} transition-colors duration-300 cursor-pointer touch-manipulation will-change-transform`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <Icon size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
    </button>
  )
}

export default NavigationArrow
