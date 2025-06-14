import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Terminal } from "lucide-react"
import CRTBackground from "./ui/crt-background"

interface MyHeroProps {
  id: string
}

const MyHero: React.FC<MyHeroProps> = ({ id }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isBooting, setIsBooting] = useState(true)
  const [currentCommand, setCurrentCommand] = useState(0)
  const [commandTexts, setCommandTexts] = useState<string[]>([])

  const commands = ["whoami", "cat roles.txt", "ls skills/", "cat mission.md"]

  const roles = ["Full Stack Developer", "Swift Connoisseur", "JavaScript Lover"]

  // Boot sequence
  useEffect(() => {
    const bootTimeout = setTimeout(() => {
      setIsBooting(false)
      // Start typing first command after boot
      setTimeout(() => setCurrentCommand(0), 500)
    }, 3000)
    return () => clearTimeout(bootTimeout)
  }, [])

  // Typing animation for commands
  useEffect(() => {
    if (isBooting || currentCommand >= commands.length) return

    const currentCommandText = commands[currentCommand]
    const currentDisplayed = commandTexts[currentCommand] || ""

    let timeout: NodeJS.Timeout

    if (currentDisplayed.length < currentCommandText.length) {
      // Typing the current command
      const typingSpeed = Math.random() * 80 + 60
      timeout = setTimeout(() => {
        const newTexts = [...commandTexts]
        newTexts[currentCommand] = currentCommandText.slice(0, currentDisplayed.length + 1)
        setCommandTexts(newTexts)
      }, typingSpeed)
    } else {
      // Command complete, move to next after delay
      setTimeout(() => {
        setCurrentCommand((prev) => prev + 1)
      }, 800)
    }

    return () => clearTimeout(timeout)
  }, [commandTexts, currentCommand, isBooting])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 600)

    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToContent = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <CRTBackground
      id={id}
      isHero={true}
      glowIntensity="hero"
      showScrollIndicator={currentCommand >= 4}
      scrollTarget="about"
      scrollIndicatorDelay={1.0}
    >
      {/* Terminal Window */}
      <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-8">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-2xl max-h-[90dvh] sm:max-h-[85dvh] lg:max-h-[85dvh] overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/80 rounded-t-lg border-b border-green-500/20">
            <div className="flex space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-green-400 text-xs sm:text-sm font-mono flex items-center justify-center gap-2">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                mikael@portfolio:~
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-3 sm:p-4 md:p-6 font-mono text-green-400 space-y-2 sm:space-y-3 md:space-y-4 max-h-[80dvh] sm:max-h-[75dvh] lg:max-h-[75dvh] overflow-y-auto text-xs sm:text-sm">
            {/* Boot Sequence */}
            {isBooting ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <div className="text-green-500">Initializing portfolio system...</div>
                <div className="text-green-400">Loading dependencies...</div>
                <div className="text-green-300">├── react.js ✓</div>
                <div className="text-green-300">├── typescript.ts ✓</div>
                <div className="text-green-300">├── framer-motion ✓</div>
                <div className="text-green-300">└── tailwindcss ✓</div>
                <div className="text-blue-400">Mounting components...</div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-1 bg-green-500 rounded"
                />
                <div className="text-green-500">✓ System ready</div>
              </motion.div>
            ) : (
              <>
                {/* whoami command */}
                {currentCommand >= 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="text-green-500 flex items-center">
                      $ {commandTexts[0] || ""}
                      {currentCommand === 0 && (
                        <span
                          className={`ml-1 w-3 h-5 bg-green-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                        >
                          █
                        </span>
                      )}
                    </div>
                    {commandTexts[0] === "whoami" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <div className="text-white">MIKAEL GALLIOT</div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* cat roles.txt command */}
                {currentCommand >= 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="text-green-500 flex items-center">
                      $ {commandTexts[1] || ""}
                      {currentCommand === 1 && (
                        <span
                          className={`ml-1 w-3 h-5 bg-green-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                        >
                          █
                        </span>
                      )}
                    </div>
                    {commandTexts[1] === "cat roles.txt" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        {roles.map((role, index) => (
                          <motion.div
                            key={role}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.2 }}
                            className="text-white"
                          >
                            {role}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* ls skills/ command */}
                {currentCommand >= 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="text-green-500 flex items-center">
                      $ {commandTexts[2] || ""}
                      {currentCommand === 2 && (
                        <span
                          className={`ml-1 w-3 h-5 bg-green-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                        >
                          █
                        </span>
                      )}
                    </div>
                    {commandTexts[2] === "ls skills/" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <div className="text-blue-400 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>react.js</div>
                          <div>typescript.ts</div>
                          <div>swift.swift</div>
                          <div>node.js</div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* cat mission.md command */}
                {currentCommand >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="text-green-500 flex items-center">
                      $ {commandTexts[3] || ""}
                      {currentCommand === 3 && (
                        <span
                          className={`ml-1 w-3 h-5 bg-green-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                        >
                          █
                        </span>
                      )}
                    </div>
                    {commandTexts[3] === "cat mission.md" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        <div className="text-gray-300 text-sm leading-relaxed">
                          Crafting digital experiences with modern technologies and clean code.
                          <br />
                          Passionate about creating solutions that make a difference.
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Commands */}
                {currentCommand >= 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 pt-4"
                  >
                    <div className="text-green-500">$ Available commands:</div>
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-green-600/20 border border-green-500/50 rounded text-green-400 hover:bg-green-600/30 transition-all text-sm"
                      >
                        ./view-projects
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded text-blue-400 hover:bg-blue-600/30 transition-all text-sm"
                      >
                        ./contact-me
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Social Links */}
                {currentCommand >= 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex space-x-4 pt-4"
                  >
                    {[
                      { icon: Github, href: "#", cmd: "github" },
                      { icon: Linkedin, href: "#", cmd: "linkedin" },
                      { icon: Mail, href: "#", cmd: "email" },
                    ].map(({ icon: Icon, href, cmd }) => (
                      <motion.a
                        key={cmd}
                        href={href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-green-400 hover:text-green-300 transition-colors"
                        aria-label={cmd}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </CRTBackground>
  )
}

export default MyHero
