import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Filter } from "lucide-react"
import CategoriesData from "./../../data/category.json"
import SkillsData from "./../../data/skills.json"
import SkillOverall from "./../../data/skillOverall.json"
import CRTBackground from "../ui/crt-background"
import TerminalWindow from "../ui/terminal-window"
import SkillProgressBar from "./SkillProgressBar"
import CategorySelector from "./CategorySelector"

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

const overallSkills: SkillsData = SkillOverall

export const SkillsTerminal: React.FC = () => {
  const skillsD: SkillsData = SkillsData
  const [activeCat, setActiveCat] = useState("Overall")
  const [topSkills, setTopSkills] = useState<Skill[]>(overallSkills.skills)

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
              <SkillProgressBar skills={topSkills} activeCat={activeCat} isDesktop={true} />
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
              <CategorySelector
                categories={catArray}
                activeCat={activeCat}
                onCategoryClick={handleOnClick}
                isDesktop={true}
              />
            </TerminalWindow>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <TerminalWindow
            title="skill-filter"
            icon={Filter}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="shadow-xl"
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <CategorySelector
              categories={catArray}
              activeCat={activeCat}
              onCategoryClick={handleOnClick}
              isDesktop={false}
            />
          </TerminalWindow>

          <TerminalWindow
            title="mikael@portfolio:~/skills"
            icon={Code}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="shadow-xl"
            contentClassName="font-mono text-green-400 space-y-4"
          >
            <SkillProgressBar skills={topSkills} activeCat={activeCat} isDesktop={false} />
          </TerminalWindow>
        </div>
      </div>
    </CRTBackground>
  )
}
