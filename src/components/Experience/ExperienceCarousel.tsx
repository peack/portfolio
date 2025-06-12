import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { TExperience } from "../../types/TExperience"
import ExperienceCard from "./ExperienceCard"

interface ExperienceCarouselProps {
  experiences: TExperience[]
  onViewDetails: (experience: TExperience) => void
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ experiences, onViewDetails }) => {
  // Split experiences into pairs for 2-row layout
  const experiencePairs: TExperience[][] = []
  for (let i = 0; i < experiences.length; i += 2) {
    experiencePairs.push(experiences.slice(i, i + 2))
  }

  return (
    <div className="relative px-8 py-4 h-full flex items-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mx-8 "
      >
        <CarouselContent className="-ml-4">
          {experiencePairs.map((pair, pairIndex) => (
            <CarouselItem key={pairIndex} className="pl-4 basis-1/2 lg:basis-1/3">
              <div className="grid grid-rows-2 gap-4 h-full py-2">
                {pair.map((experience, index) => (
                  <div key={experience.id} className="flex">
                    <div className="w-full min-h-[280px] flex">
                      <ExperienceCard
                        experience={experience}
                        index={pairIndex * 2 + index}
                        onViewDetails={onViewDetails}
                      />
                    </div>
                  </div>
                ))}
                {/* Fill empty space if odd number of experiences */}
                {pair.length === 1 && <div className="flex-1" />}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"default"} />
        <CarouselNext variant={"default"} />
      </Carousel>
    </div>
  )
}

export default ExperienceCarousel
