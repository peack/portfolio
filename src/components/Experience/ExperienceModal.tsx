import React from "react"
import { ExternalLink, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import type { TExperience } from "../../types/TExperience"

interface ExperienceModalProps {
  experience: TExperience | null
  isOpen: boolean
  onClose: () => void
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose }) => {
  if (!experience) return null

  return (
    <div className="contents">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <div data-theme="light">
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden bg-white text-gray-900 border-gray-200 [&]:bg-white [&]:text-gray-900">
            <DialogHeader className="flex flex-row items-center gap-4 space-y-0">
              {/* App Icons */}
              {experience.references && experience.references.length > 0 && (
                <div className="flex gap-2">
                  {experience.references.slice(0, 2).map(
                    (reference, index) =>
                      reference.iconLink && (
                        <div key={index} className="w-12 h-12 rounded-lg overflow-hidden shadow-md">
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
              <div className="flex-1">
                <DialogTitle className="text-xl font-bold text-gray-900">{experience.title}</DialogTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <Calendar size={14} />
                  {experience.date_start} - {experience.date_end || "Present"}
                </div>
              </div>
            </DialogHeader>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)] space-y-6">
              {/* Description */}
              {experience.description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{experience.description}</div>
                </div>
              )}

              {/* Tech Stack */}
              {experience.techStack && experience.techStack.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech, index) => {
                      // Map technologies to specific badge variants
                      const getBadgeVariant = (techName: string) => {
                        const lowerTech = techName.toLowerCase()
                        if (lowerTech.includes("react")) return "react"
                        if (lowerTech.includes("typescript")) return "typescript"
                        if (lowerTech.includes("swift")) return "swift"
                        if (lowerTech.includes("node")) return "node"
                        if (lowerTech.includes("javascript")) return "javascript"
                        return "tech"
                      }

                      return (
                        <Badge key={index} variant={getBadgeVariant(tech)} className="text-sm">
                          {tech}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* References */}
              {experience.references && experience.references.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Links</h3>
                  <div className="space-y-3">
                    {experience.references.map((reference, index) => (
                      <a
                        key={index}
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {reference.iconLink && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                            <img
                              src={reference.iconLink}
                              alt={`${reference.name} icon`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{reference.name}</div>
                          <div className="text-sm text-gray-500">View project</div>
                        </div>
                        <ExternalLink size={16} className="text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  )
}

export default ExperienceModal
