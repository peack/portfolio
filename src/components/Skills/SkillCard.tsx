import React from "react"

interface SkillCardProps {
  skill: {
    name: string
    category: string
    icon: string
  }
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="flex-shrink-0 bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-700 w-40 sm:w-48 mx-2 sm:mx-3 flex flex-col items-center justify-center text-center">
    {/* Real devicon */}
    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
      <img src={skill.icon} alt={`${skill.name} icon`} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-sm sm:text-lg font-semibold text-gray-400">{skill.name}</h3>
  </div>
)

export default SkillCard
