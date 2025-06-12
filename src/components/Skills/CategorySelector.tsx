import React from "react"
import { motion } from "framer-motion"

interface CategorySelectorProps {
  categories: string[]
  activeCat: string
  onCategoryClick: (category: string) => void
  isDesktop: boolean
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, activeCat, onCategoryClick, isDesktop }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`text-green-500 ${isDesktop ? "text-base" : "text-sm"}`}>$ cat categories.txt</div>

      {isDesktop ? (
        <div className="mt-4 space-y-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              onClick={() => onCategoryClick(category)}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                activeCat === category
                  ? "bg-green-600/30 text-green-300 border border-green-500/50"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
              }`}
            >
              {category === activeCat ? "▶ " : "  "}
              {category}
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 mt-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              onClick={() => onCategoryClick(category)}
              className={`px-3 py-2 rounded text-xs transition-all ${
                activeCat === category
                  ? "bg-green-600/30 text-green-300 border border-green-500/50"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      )}

      <div className={`text-green-400 opacity-60 mt-4 ${isDesktop ? "text-base" : "text-xs"}`}>EOF</div>
    </motion.div>
  )
}

export default CategorySelector
