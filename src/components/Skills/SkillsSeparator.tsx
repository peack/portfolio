import React from "react"

interface SkillsSeparatorProps {
  color?: "blue" | "purple"
}

const SkillsSeparator: React.FC<SkillsSeparatorProps> = ({ color = "blue" }) => {
  const dotColor = color === "blue" ? "bg-blue-500" : "bg-purple-500"

  return (
    <div className="flex items-center justify-center">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      <div className="px-4">
        <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </div>
  )
}

export default SkillsSeparator
