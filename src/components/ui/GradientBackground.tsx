import React from "react"

interface GradientBackgroundProps {
  variant?: "dark" | "light"
  className?: string
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ variant = "dark", className = "" }) => {
  const isDark = variant === "dark"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className={`absolute top-20 left-10 w-72 h-72 ${
          isDark ? "bg-blue-600/10" : "bg-blue-500/5"
        } rounded-full blur-3xl`}
      ></div>

      <div
        className={`absolute bottom-20 right-10 w-96 h-96 ${
          isDark ? "bg-purple-600/10" : "bg-purple-500/5"
        } rounded-full blur-3xl`}
      ></div>

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${
          isDark
            ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            : "bg-gradient-to-r from-blue-500/3 to-purple-500/3"
        } rounded-full blur-3xl`}
      ></div>
    </div>
  )
}

export default GradientBackground
