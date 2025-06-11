import introData from "../data/intro.json"
import React from "react"
import { motion } from "framer-motion"
import MyHero from "./MyHero"

interface HomePageProps {
  id: string
}

const HomePage: React.FC<HomePageProps> = ({ id }) => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <MyHero id={id} />

      {/* Content Section */}
      <section id="content" className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-foreground/90"
          >
            <p className="text-lg leading-relaxed text-center" style={{ whiteSpace: "pre-line" }}>
              {introData.introduction}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
