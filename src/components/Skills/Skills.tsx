import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Code, Filter } from "lucide-react"
import * as Progress from "@radix-ui/react-progress"
import SkillBar from "./SkillBar.tsx"
import CategoriesData from "./../../data/category.json"
import SkillsData from "./../../data/skills.json"
import SkillOverall from "./../../data/skillOverall.json"
import CRTBackground from "../ui/crt-background"
import TerminalWindow from "../ui/terminal-window"

const overallSkills: SkillsData = SkillOverall

interface Skill {
  name: string
  skill_rate: number
  tags: string[]
  category: string[]
}

interface Category {
  name: string
  skills: string[]
}

interface SkillsData {
  skills: Skill[]
}

export const Skills: React.FC = () => {
  const skillsD: SkillsData = SkillsData
  const [activeCat, setActiveCat] = useState("Overall")
  const [topSkills, setTopSkills] = useState<Skill[]>(overallSkills.skills)
  const [animatedValues, setAnimatedValues] = useState<number[]>([])

  useEffect(() => {
    // Reset animated values when skills change
    setAnimatedValues(new Array(topSkills.length).fill(0))

    // Animate progress bars with staggered effect
    topSkills.forEach((skill, index) => {
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
  }, [topSkills])

  useEffect(() => {
    if (activeCat == "Overall") {
      setTopSkills(overallSkills.skills)
      return
    }
    const filteredSkills = filterSkills(getTopSkillsByCategory(CategoriesData, activeCat), skillsD.skills)

    filteredSkills.sort((a, b) => b.skill_rate - a.skill_rate)

    const top4Skills: Skill[] = filteredSkills.slice(0, 4)
    top4Skills.sort((a, b) => a.name.localeCompare(b.name))

    setTopSkills(top4Skills)
  }, [activeCat, skillsD])

  const handleOnClick = (newCat: string) => {
    setActiveCat(newCat)
  }

  const catArray = ["Overall", ...CategoriesData.map((category) => category.name)]

  function getTopSkillsByCategory(categories: Category[], targetCategory: string): string[] {
    const filteredSkills: string[] = []

    for (const category of categories) {
      if (category.name === targetCategory) {
        filteredSkills.push(...category.skills)
        break
      }
    }
    return filteredSkills
  }

  function filterSkills(filteredCategories: string[], skills: Skill[]): Skill[] {
    const matchedSkills: Skill[] = []
    for (const skill of skills) {
      for (const tag of skill.tags) {
        if (filteredCategories.includes(tag)) {
          matchedSkills.push(skill)
          break
        }
      }
    }
    return matchedSkills
  }

  return (
    <CRTBackground
      className="min-h-screen py-12 sm:py-20 px-2 sm:px-4 md:px-8"
      showScrollIndicator={true}
      scrollTarget="experience"
      scrollIndicatorDelay={2.0}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Skills Terminal Window */}
            <TerminalWindow
              title="mikael@portfolio:~/skills"
              icon={Code}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              contentClassName="font-mono text-green-400 space-y-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-green-500">$ ls skills/{activeCat.toLowerCase()}/</div>
                <div className="mt-4 space-y-3">
                  {topSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">{skill.name}</span>
                        <span className="text-green-400 text-xs">[{skill.skill_rate}%]</span>
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
                          className="relative overflow-hidden bg-gray-700 w-full h-3"
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
                <div className="text-green-400 opacity-60 mt-4">EOF</div>
              </motion.div>
            </TerminalWindow>

            {/* Category Filter Terminal Window */}
            <TerminalWindow
              title="skill-filter"
              icon={Filter}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              contentClassName="font-mono text-green-400 space-y-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-green-500">$ cat categories.txt</div>
                <div className="mt-4 space-y-2">
                  {catArray.map((category, index) => (
                    <motion.button
                      key={category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      onClick={() => handleOnClick(category)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        activeCat === category
                          ? "bg-green-600/30 text-green-300 border border-green-500/50"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                      }`}
                    >
                      {category === activeCat ? "▶ " : "  "}
                      {category}
                    </motion.button>
                  ))}
                </div>
                <div className="text-green-400 opacity-60 mt-4">EOF</div>
              </motion.div>
            </TerminalWindow>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Skills Terminal Window */}
          <TerminalWindow
            title="mikael@portfolio:~/skills"
            icon={Code}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="shadow-xl"
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <div className="text-green-500 text-sm">$ ls skills/{activeCat.toLowerCase()}/</div>
            <div className="space-y-3">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs">{skill.name}</span>
                    <span className="text-green-400 text-xs">[{skill.skill_rate}%]</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="w-full"
                  >
                    <Progress.Root
                      value={animatedValues[index] || 0}
                      max={100}
                      className="relative overflow-hidden bg-gray-700 w-full h-2"
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
            <div className="text-green-400 opacity-60 text-xs">EOF</div>
          </TerminalWindow>

          {/* Category Filter Terminal Window */}
          <TerminalWindow
            title="skill-filter"
            icon={Filter}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="shadow-xl"
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <div className="text-green-500 text-sm">$ cat categories.txt</div>
            <div className="grid grid-cols-2 gap-2">
              {catArray.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => handleOnClick(category)}
                  className={`px-3 py-2 rounded text-xs transition-all ${
                    activeCat === category
                      ? "bg-green-600/30 text-green-300 border border-green-500/50"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="text-green-400 opacity-60 text-xs">EOF</div>
          </TerminalWindow>
        </div>
      </div>
    </CRTBackground>
  )
}
