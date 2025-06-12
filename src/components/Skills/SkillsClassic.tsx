import React from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"
import NavigationArrow from "../ui/NavigationArrow"
import { scrollToSection } from "../../utils/navigation"
import skillsData from "../../data/skillsData.json"
import SkillCarousel from "./SkillCarousel"
import SkillsSeparator from "./SkillsSeparator"
import GradientBackground from "../ui/GradientBackground"

interface SkillsClassicProps {
  id: string
}

const SkillsClassic: React.FC<SkillsClassicProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-dvh bg-gray-950 py-16 sm:py-20 relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <GradientBackground variant="dark" />

      <div className="w-full relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg sm:text-xl text-gray-300">Technologies I work with and love</p>
        </motion.div>

        {/* Top Separator */}
        <div className="mb-6 sm:mb-8">
          <SkillsSeparator color="blue" />
        </div>

        {/* Carousel Container with Side Shadows */}
        <div className="relative">
          {/* Left Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>

          {/* Right Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

          {/* First Carousel - Left to Right */}
          <div className="mb-6 sm:mb-8">
            <SkillCarousel skills={skillsData.topRowSkills} direction="left" duration={30} />
          </div>

          {/* Second Carousel - Right to Left */}
          <div>
            <SkillCarousel skills={skillsData.bottomRowSkills} direction="right" duration={35} />
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="mt-6 sm:mt-8">
          <SkillsSeparator color="purple" />
        </div>
      </div>

      {/* Navigation indicators */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <NavigationArrow
          icon={ArrowDown}
          onClick={() => scrollToSection("experience")}
          className="text-gray-400 hover:text-blue-400"
        />
      </motion.div>

      <motion.div
        className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <NavigationArrow
          icon={ArrowUp}
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-blue-400"
        />
      </motion.div>
    </section>
  )
}

export default SkillsClassic
