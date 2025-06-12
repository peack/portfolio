import React from "react"
import { motion } from "framer-motion"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TechFilterProps {
  allTechnologies: string[]
  selectedTech: string | null
  onTechFilter: (tech: string) => void
  onClearFilter: () => void
  filteredCount: number
}

const TechFilter: React.FC<TechFilterProps> = ({
  allTechnologies,
  selectedTech,
  onTechFilter,
  onClearFilter,
  filteredCount,
}) => {
  return (
    <motion.div
      className="px-4 mb-4 sm:mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter by Technology:</span>
          {selectedTech && (
            <>
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                {filteredCount} project{filteredCount !== 1 ? "s" : ""}
              </Badge>
              <Button
                onClick={onClearFilter}
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs text-gray-500 hover:text-gray-700"
              >
                <X className="w-3 h-3 mr-1" />
                Clear
              </Button>
            </>
          )}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                onClick={() => onTechFilter(tech)}
                variant={selectedTech === tech ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap text-xs transition-all flex-shrink-0 ${
                  selectedTech === tech
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-100 border-gray-300"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Desktop: Wrapped layout */}
        <div className="hidden lg:block">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                onClick={() => onTechFilter(tech)}
                variant={selectedTech === tech ? "default" : "outline"}
                className={`cursor-pointer text-sm transition-all ${
                  selectedTech === tech
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-100 border-gray-300"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TechFilter
