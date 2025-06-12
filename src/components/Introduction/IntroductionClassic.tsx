import React from "react"
import { motion } from "framer-motion"
import { User, ArrowDown, ArrowUp } from "lucide-react"
import introData from "../../data/intro.json"
import meTall from "../../assets/me_wizard_2.jpg"
import { Polaroid } from "../ui/Polaroid"

interface IntroductionClassicProps {
  id: string
}

const IntroductionClassic: React.FC<IntroductionClassicProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen bg-gray-50 py-20 relative overflow-hidden flex items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Accent dots at grid intersections */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.8) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/70 via-transparent to-purple-50/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know who I am and what drives me</p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-16 items-center justify-center">
              {/* Image Section - 1/3 width */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <Polaroid src={meTall} alt="Mikael Galliot" caption="Mikael Galliot" size="md" />

                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </motion.div>

              {/* Text Section - 2/3 width */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="col-span-2 space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-blue-600" size={32} />
                  <h3 className="text-3xl font-bold text-gray-900">My Story</h3>
                </div>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  {introData.introduction.split("\n\n").map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-lg"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12 flex flex-col items-center">
            {/* Image Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Polaroid src={meTall} alt="Mikael Galliot" caption="Mikael Galliot" size="sm" />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              </div>
              <div className="space-y-4">
                {introData.introduction.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <ArrowDown size={32} className="animate-bounce" />
        </a>
      </motion.div>

      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <ArrowUp size={32} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default IntroductionClassic
