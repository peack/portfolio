import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

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
  showBackIndicator?: boolean
  scrollBackTarget?: string
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
  id,
  showBackIndicator = false,
  scrollBackTarget,
}) => {
  const sectionRef = useRef<HTMLElement>(null)

  const glowClasses = {
    light: "shadow-[inset_0_0_30px_rgba(0,255,0,0.03)]",
    medium: "shadow-[inset_0_0_50px_rgba(0,255,0,0.05)]",
    strong: "shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]",
    hero: "shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]",
  }

  const scanlineOpacity = isHero ? "opacity-10" : "opacity-5"
  const borderOpacity = isHero ? "border-green-500/20" : "border-green-500/10"

  const scrollToTarget = () => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget)
      if (element) {
        // Get viewport height
        const viewportHeight = window.innerHeight

        // Calculate offset to center the target element
        const elementRect = element.getBoundingClientRect()
        const offsetTop = window.pageYOffset + elementRect.top

        // Scroll to position that shows the full component
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  const scrollToBackTarget = () => {
    if (scrollBackTarget) {
      const element = document.getElementById(scrollBackTarget)
      if (element) {
        const elementRect = element.getBoundingClientRect()
        const offsetTop = window.pageYOffset + elementRect.top

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  useEffect(() => {
    if (!scrollTarget && !scrollBackTarget) return

    let scrollTimeout: NodeJS.Timeout
    let isScrolling = false
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let lastScrollTime = Date.now()

    const handleScroll = () => {
      if (isScrolling) return

      const currentSection = sectionRef.current
      if (!currentSection) return

      const rect = currentSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const currentScrollY = window.scrollY
      const currentTime = Date.now()

      // Calculate scroll velocity to detect intentional scrolling
      const timeDelta = currentTime - lastScrollTime
      const scrollDelta = currentScrollY - lastScrollY
      scrollVelocity = Math.abs(scrollDelta) / timeDelta

      const scrollDirection = scrollDelta > 0 ? "down" : "up"

      // Different velocity thresholds for desktop vs mobile
      const isMobile = window.innerWidth < 1024
      const minVelocity = isMobile ? 0.3 : 0.8

      if (scrollVelocity < minVelocity) {
        lastScrollY = currentScrollY
        lastScrollTime = currentTime
        return
      }

      // More precise thresholds for desktop
      const topThreshold = isMobile ? viewportHeight * 0.3 : viewportHeight * 0.4
      const bottomThreshold = isMobile ? viewportHeight * 0.7 : viewportHeight * 0.6

      // Handle downward scrolling
      if (scrollDirection === "down" && rect.top < -topThreshold && rect.bottom > bottomThreshold && scrollTarget) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(
          () => {
            isScrolling = true
            scrollToTarget()

            setTimeout(
              () => {
                isScrolling = false
              },
              isMobile ? 1500 : 1200
            )
          },
          isMobile ? 300 : 200
        )
      }

      // Handle upward scrolling
      if (
        scrollDirection === "up" &&
        rect.bottom > viewportHeight + topThreshold &&
        rect.top < bottomThreshold &&
        scrollBackTarget
      ) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(
          () => {
            isScrolling = true
            scrollToBackTarget()

            setTimeout(
              () => {
                isScrolling = false
              },
              isMobile ? 1500 : 1200
            )
          },
          isMobile ? 300 : 200
        )
      }

      lastScrollY = currentScrollY
      lastScrollTime = currentTime
    }

    // Use passive listener with throttling for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      clearTimeout(scrollTimeout)
    }
  }, [scrollTarget, scrollBackTarget])

  const SectionTag = isHero ? "section" : "section"
  const sectionProps = isHero
    ? {
        ref: sectionRef,
        id,
        className: `relative h-dvh w-full flex items-center justify-center overflow-hidden bg-black ${className}`,
      }
    : {
        ref: sectionRef,
        id,
        className: `relative min-h-dvh w-full flex items-center justify-center bg-black ${className}`,
      }

  return (
    <SectionTag {...sectionProps}>
      {/* CRT Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {/* Scanlines */}
        <div
          className={`absolute inset-0 w-full h-full ${scanlineOpacity} pointer-events-none`}
          style={{
            backgroundImage: isHero
              ? "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)"
              : "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.02) 2px, rgba(0, 255, 0, 0.02) 4px)",
          }}
        />

        {/* CRT Curvature & Glow */}
        <div
          className={`absolute inset-1 sm:inset-2 md:inset-4 bg-black rounded-lg ${glowClasses[glowIntensity]} border ${borderOpacity}`}
        />

        {/* Screen Flicker */}
        {showFlicker && (
          <motion.div
            className="absolute inset-0 w-full h-full bg-green-500/5"
            animate={{ opacity: [0.05, 0.02, 0.05] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">{children}</div>

      {/* Back Scroll Indicator */}
      {showBackIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: scrollIndicatorDelay + 0.3 }}
          className="absolute top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            onClick={scrollToBackTarget}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 text-green-400 hover:text-green-300 transition-colors"
            aria-label="Scroll to previous section"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}

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
