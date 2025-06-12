import React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface CRTBackgroundProps {
  children: React.ReactNode
  className?: string
  showFlicker?: boolean
  glowIntensity?: "light" | "medium" | "strong" | "hero"
  showScrollIndicator?: boolean
  scrollTarget?: string
  scrollIndicatorDelay?: number
  isHero?: boolean
  id?: string
}

const CRTBackground: React.FC<CRTBackgroundProps> = ({
  children,
  className = "",
  showFlicker = true,
  glowIntensity = "medium",
  showScrollIndicator = false,
  scrollTarget,
  scrollIndicatorDelay = 1.0,
  isHero = false,
  id
}) => {
  const glowClasses = {
    light: "shadow-[inset_0_0_30px_rgba(0,255,0,0.03)]",
    medium: "shadow-[inset_0_0_50px_rgba(0,255,0,0.05)]",
    strong: "shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]",
    hero: "shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]"
  }

  const scanlineOpacity = isHero ? "opacity-10" : "opacity-5"
  const borderOpacity = isHero ? "border-green-500/20" : "border-green-500/10"

  const scrollToTarget = () => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const SectionTag = isHero ? "section" : "section"
  const sectionProps = isHero 
    ? { 
        id, 
        className: `relative h-dvh flex items-center justify-center overflow-hidden bg-black ${className}` 
      }
    : { 
        id, 
        className: `relative bg-black ${className}` 
      }

  return (
    <SectionTag {...sectionProps}>
      {/* CRT Background Effects */}
      <div className="absolute inset-0 bg-black">
        {/* Scanlines */}
        <div
          className={`absolute inset-0 ${scanlineOpacity} pointer-events-none`}
          style={{
            backgroundImage: isHero
              ? "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)"
              : "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.02) 2px, rgba(0, 255, 0, 0.02) 4px)",
          }}
        />
        
        {/* CRT Curvature & Glow */}
        <div className={`absolute inset-2 sm:inset-4 md:inset-8 bg-black rounded-lg ${glowClasses[glowIntensity]} border ${borderOpacity}`} />

        {/* Screen Flicker */}
        {showFlicker && (
          <motion.div
            className="absolute inset-0 bg-green-500/5"
            animate={{ opacity: [0.05, 0.02, 0.05] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </div>

      {/* Content */}
      <div className={isHero ? "relative z-10" : "relative z-10"}>
        {children}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: scrollIndicatorDelay }}
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            onClick={scrollToTarget}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 text-green-400 hover:text-green-300 transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </SectionTag>
  )
}

export default CRTBackground
