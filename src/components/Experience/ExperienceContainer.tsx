import type { TExperience } from "../../types/TExperience"
import React from "react"
import ExperienceTimeline from "./ExperienceTimeline"
import ContentBoxFlex from "../Layout/ContentBoxFlex"
import CRTBackground from "../ui/crt-background"

interface ExperienceContainerProps {
  experiences: TExperience[]
  id: string
}

const ExperienceContainer: React.FC<ExperienceContainerProps> = ({ experiences, id }) => {
  return (
    <CRTBackground
      id={id}
      className="min-h-screen py-12 sm:py-20 px-2 sm:px-4 md:px-8"
      showScrollIndicator={true}
      scrollTarget="contact"
      scrollIndicatorDelay={2.0}
    >
      <ContentBoxFlex id={id}>
        <span className="col-auto text-xl font-[RobotoSlab-Bold] p-3 ">Projects</span>
        <br />
        <ExperienceTimeline experiences={experiences} />
      </ContentBoxFlex>
    </CRTBackground>
  )
}

export default ExperienceContainer
