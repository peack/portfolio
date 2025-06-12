import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { TExperience } from "../../types/TExperience"

interface ExperienceCardProps {
  experience: TExperience
  index: number
  onViewDetails: (experience: TExperience) => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full h-full"
    >
      <Card className="h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <CardContent className="p-4 h-full flex flex-col">
          {/* Title Row with Icons */}
          <div className="flex items-start gap-3 mb-3 flex-shrink-0">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2 mb-1">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-500">
                {experience.date_start} - {experience.date_end || "Present"}
              </p>
            </div>

            {/* Icons aligned to the right */}
            {experience.references && experience.references.length > 0 && (
              <div className="flex gap-2 flex-shrink-0">
                {experience.references.slice(0, 2).map(
                  (reference, refIndex) =>
                    reference.iconLink && (
                      <div key={refIndex} className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
                        <img
                          src={reference.iconLink}
                          alt={`${reference.name} icon`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                )}
              </div>
            )}
          </div>

          {/* Description Preview */}
          {experience.description && (
            <div className="mb-3 flex-1">
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {experience.description.length > 120
                  ? `${experience.description.substring(0, 120)}...`
                  : experience.description}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          {experience.techStack && experience.techStack.length > 0 && (
            <div className="mb-3 flex-shrink-0">
              <div className="flex flex-wrap gap-1">
                {experience.techStack.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {experience.techStack.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{experience.techStack.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-auto flex-shrink-0 gap-2">
            <Button onClick={() => onViewDetails(experience)} variant="outline" size="sm" className="flex-1">
              <Eye className="mr-2 h-4 w-4" />
              Details
            </Button>

            {/* Quick Reference Link */}
            {experience.references && experience.references.length > 0 && experience.references[0].href && (
              <Button asChild size="sm" className="flex-1">
                <a href={experience.references[0].href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ExperienceCard
