import React from "react"
import { motion } from "framer-motion"
import { Terminal, User } from "lucide-react"
import introData from "../data/intro.json"
import meTall from "../assets/me_wizard_2.jpg"
import CRTBackground from "./ui/crt-background"
import TerminalWindow from "./ui/terminal-window"

const Introduction: React.FC = () => {
  return (
    <CRTBackground
      id="about"
      showScrollIndicator={true}
      scrollTarget="skills"
      showBackIndicator={true}
      scrollBackTarget="home"
      scrollIndicatorDelay={2.0}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Text Terminal Window */}
          <TerminalWindow
            title="mikael@portfolio:~/about"
            icon={Terminal}
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
              <div className="text-green-500">$ cat introduction.md</div>
              <div className="text-gray-200 leading-relaxed mt-4" style={{ whiteSpace: "pre-line" }}>
                {introData.introduction}
              </div>
              <div className="text-green-400 opacity-60 mt-4">EOF</div>
            </motion.div>
          </TerminalWindow>

          {/* Image Terminal Window */}
          <TerminalWindow
            title="image-viewer"
            icon={User}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src={meTall}
                alt="Mikael Galliot"
                className="rounded-lg object-cover border-2 border-green-500/30 w-full shadow-xl shadow-green-500/10"
              />

              {/* Image Overlay */}
              <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* CRT Scanlines on Image */}
              <div
                className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 0, 0.05) 1px, rgba(0, 255, 0, 0.05) 2px)",
                }}
              />
            </motion.div>
          </TerminalWindow>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8">
        {/* Text Terminal Window */}
        <TerminalWindow
          title="mikael@portfolio:~/about"
          icon={Terminal}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shadow-xl"
          contentClassName="font-mono text-green-400 space-y-4"
        >
          <div className="text-green-500 text-sm sm:text-base">$ cat introduction.md</div>
          <div className="text-gray-200 leading-relaxed text-sm sm:text-base" style={{ whiteSpace: "pre-line" }}>
            {introData.introduction}
          </div>
          <div className="text-green-400 opacity-60 text-xs sm:text-sm">EOF</div>
        </TerminalWindow>

        {/* Image Terminal Window - Hidden on mobile */}
        {/* 
        <TerminalWindow
          title="image-viewer"
          icon={User}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group flex justify-center"
          >
            <img
              src={meTall}
              alt="Mikael Galliot"
              className="rounded-lg object-cover border-2 border-green-500/30 max-w-xs sm:max-w-sm w-full shadow-xl shadow-green-500/10"
            />

            {/* Image Overlay */}
        {/* <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* CRT Scanlines on Image */}
        {/* <div
              className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 0, 0.05) 1px, rgba(0, 255, 0, 0.05) 2px)",
              }}
            />
          </motion.div>
        </TerminalWindow>
        */}
      </div>
    </CRTBackground>
  )
}

export default Introduction
