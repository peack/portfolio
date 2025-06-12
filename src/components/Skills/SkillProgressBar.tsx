import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import * as Progress from "@radix-ui/react-progress"

interface Skill {
  name: string
  skill_rate: number
  tags: string[]
  category: string[]
}

interface SkillProgressBarProps {
  skills: Skill[]
  activeCat: string
  isDesktop: boolean
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skills, activeCat, isDesktop }) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([])

  useEffect(() => {
    // Reset animated values when skills change
    setAnimatedValues(new Array(skills.length).fill(0))

    // Animate progress bars with staggered effect
    skills.forEach((skill, index) => {
      setTimeout(
        () => {
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = skill.skill_rate
            return newValues
          })
        },
        800 + index * 100
      )
    })
  }, [skills])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>
        $ ls skills/{activeCat.toLowerCase()}/
      </div>
      <div className={`mt-4 space-y-3`}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="space-y-1"
          >
            <div className="flex justify-between items-center">
              <span className={`text-white ${isDesktop ? "text-sm" : "text-xs"}`}>{skill.name}</span>
              <span className={`text-green-400 text-xs`}>[{skill.skill_rate}%]</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="w-full"
            >
              <Progress.Root
                value={animatedValues[index] || 0}
                max={100}
                className={`relative overflow-hidden bg-gray-700 w-full ${isDesktop ? "h-3" : "h-2"}`}
              >
                <Progress.Indicator
                  className="bg-green-500 w-full h-full transition-transform duration-1000 ease-out"
                  style={{
                    transform: `translateX(-${100 - (animatedValues[index] || 0)}%)`,
                  }}
                />
              </Progress.Root>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default SkillProgressBar
