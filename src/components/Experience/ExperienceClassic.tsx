import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react"
import type { TExperience } from "../../types/TExperience"
import ExperienceCard from "./ExperienceCard"
import ExperienceModal from "./ExperienceModal"
import ExperienceCarousel from "./ExperienceCarousel"
import ExperienceCompactCard from "./ExperienceCompactCard"
import GradientBackground from "../ui/GradientBackground"

interface ExperienceClassicProps {
  experiences: TExperience[]
  id: string
}

const ExperienceClassic: React.FC<ExperienceClassicProps> = ({ experiences, id }) => {
  const [selectedExperience, setSelectedExperience] = useState<TExperience | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  // Fixed pagination for mobile - always show 6 items per page
  const itemsPerPage = 4
  const totalPages = Math.ceil(experiences.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const currentExperiences = experiences.slice(startIndex, startIndex + itemsPerPage)

  const handleViewDetails = (experience: TExperience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)
  }

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id={id} className="h-dvh bg-gray-50 py-8 sm:py-12 relative overflow-hidden flex flex-col justify-center">
      {/* Background decoration */}
      <GradientBackground variant="light" />

      <div className="w-full relative z-10 flex-1 flex flex-col justify-center max-h-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience & Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600">A showcase of my professional journey</p>
        </motion.div>

        {/* Desktop Layout - 2-Row Carousel */}
        <div className="hidden lg:block flex-1 min-h-0">
          <ExperienceCarousel experiences={experiences} onViewDetails={handleViewDetails} />
        </div>

        {/* Mobile/Tablet Layout - Fixed Size Pages */}
        <div className="lg:hidden px-4 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            <div className="h-[50vh] flex flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto">
                {currentExperiences.map((experience, index) => (
                  <ExperienceCompactCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                    onViewDetails={handleViewDetails}
                  />
                ))}
                {/* Fill remaining space if fewer items */}
                {currentExperiences.length < itemsPerPage && <div className="flex-1" />}
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentPage ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <ExperienceModal experience={selectedExperience} isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Navigation indicators */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <ArrowDown size={28} className="sm:w-8 sm:h-8 animate-bounce" />
        </a>
      </motion.div>

      <motion.div
        className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
          <ArrowUp size={28} className="sm:w-8 sm:h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default ExperienceClassic
