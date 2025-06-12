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
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 sm:gap-6 px-4 sm:px-6"
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {/* Triple the array for seamless loop */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <SkillCard key={`${direction}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

export default SkillCarousel
