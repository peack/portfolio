import React from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

interface TerminalWindowProps {
  title?: string
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  className?: string
  headerClassName?: string
  contentClassName?: string
  initial?: any
  animate?: any
  transition?: any
  viewport?: any
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  icon: Icon = Terminal,
  children,
  className = "",
  headerClassName = "",
  contentClassName = "",
  initial,
  animate,
  transition,
  viewport,
}) => {
  const MotionDiv = initial || animate ? motion.div : "div"

  return (
    <MotionDiv
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      className={`bg-gray-900/90 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-2xl ${className}`}
    >
      {/* Terminal Header */}
      <div className={`flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/20 ${headerClassName}`}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-green-400 text-xs sm:text-sm lg:text-sm font-mono flex items-center justify-center gap-2">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
            {title}
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className={`p-4 sm:p-6 ${contentClassName}`}>
        {children}
      </div>
    </MotionDiv>
  )
}

export default TerminalWindow
