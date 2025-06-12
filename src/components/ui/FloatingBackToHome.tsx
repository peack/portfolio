import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, ArrowUp } from "lucide-react"
import { scrollToSection } from "../../utils/navigation"
import { useTheme } from "../../contexts/ThemeContext"

const FloatingBackToHome: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 100vh
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBackToHome = () => {
    scrollToSection("home")
  }

  const buttonClasses =
    theme === "terminal"
      ? "bg-gray-900/90 border border-green-500/50 text-green-400 hover:bg-green-600/20 hover:border-green-400"
      : "bg-white/90 border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400 shadow-lg"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToHome}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${buttonClasses}`}
          aria-label="Back to top"
        >
          {theme === "terminal" ? <Home className="w-5 h-5" /> : <ArrowUp className="w-5 h-5" />}
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default FloatingBackToHome
