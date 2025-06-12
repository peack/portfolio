import React from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavigationArrow from "./ui/NavigationArrow"
import { scrollToSection } from "../utils/navigation"
import { useTheme } from "../contexts/ThemeContext"
import { useTypewriter } from "../hooks/useTypewriter"
import { useCursor } from "../hooks/useCursor"
import socialData from "../data/socialData.json"

interface HomePageClassicProps {
  id: string
}

const HomePageClassic: React.FC<HomePageClassicProps> = ({ id }) => {
  const { theme, toggleTheme } = useTheme()

  // Get social links from data
  const githubLink = socialData.socials.find((social) => social.name === "GitHub")?.href || "#"
  const linkedinLink = socialData.socials.find((social) => social.name === "LinkedIn")?.href || "#"

  const phrases = ['"A Full Stack Developer"', '"A Software Engineer"', '"A Problem Solver."']
  
  const displayedText = useTypewriter({
    phrases,
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseTime: 250
  })
  
  const showCursor = useCursor(500)

  return (
    <section id={id} className="dark h-dvh bg-hero-dark flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mikael</span>
          </motion.h1>

          <motion.p
            className="text-3xl md:text-5xl text-gray-300 mb-8 leading-relaxed min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {displayedText}
            <span className={`ml-2 text-blue-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
              |
            </span>
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative solutions and building exceptional digital experiences with modern
            technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button onClick={() => scrollToSection("contact")} variant="gradient-primary" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button onClick={toggleTheme} variant="gradient-terminal" size="lg" className="font-mono">
              <Terminal className="mr-2 h-5 w-5" />
              ./terminal_theme-wip
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              asChild
              variant="outline"
              size="icon"
              className="p-4 bg-gray-800 border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700 transform hover:-translate-y-1 rounded-full w-12 h-12"
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="p-4 bg-gray-800 border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-400 hover:text-blue-400 hover:bg-gray-700 transform hover:-translate-y-1 rounded-full w-12 h-12"
            >
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <NavigationArrow
            icon={ArrowDown}
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-white"
          />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default HomePageClassic
