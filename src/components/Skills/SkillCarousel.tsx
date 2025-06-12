import React from "react"
import { motion } from "framer-motion"
import SkillCard from "./SkillCard"

interface SkillCarouselProps {
  skills: Array<{ name: string; category: string; icon: string }>
  direction?: "left" | "right" // Controls scroll direction
  duration?: number // Animation speed control
}

const SkillCarousel: React.FC<SkillCarouselProps> = ({ skills, direction = "left", duration = 30 }) => {
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex gap-4 animate-infinite-scroll"
        style={{
          width: `${skills.length * 120}px`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
      >
        {/* Duplicate skills for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillCarousel
