/* eslint-disable react/prop-types */
import {
  Timeline,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { TimelineItem } from "@mui/lab";
import { TimelineSeparator } from "@mui/lab";
import { TimelineConnector } from "@mui/lab";
import { TimelineContent } from "@mui/lab";
import { TimelineDot } from "@mui/lab";
import { TExperience } from "../../types/TExperience";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";

interface ExperienceTimelineProps {
  experiences: TExperience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(
    null
  );

  const toggleOpen = (id: string) => {
    setActiveExperienceId(activeExperienceId === id ? null : id);
  };
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
          padding: 0.4,
        },
        [`& .${timelineOppositeContentClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        [`&`]: {
          padding: 1,
        },
        "@media (min-width: 768px)": {
          // Target screens less than 768px wide
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.15, // Adjust flex value for smaller screens
            padding: 3, // Adjust padding for smaller screens
          },
        },
        "@media (min-width: 1024px)": {
          // Target screens less than 768px wide
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2, // Adjust flex value for smaller screens
            padding: 3, // Adjust padding for smaller screens
          },
        },
      }}
    >
      {experiences.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            color="textSecondary"
            className="timeNoPadding"
          >
            <div className="font-[RobotoSlab-Bold]">
              {experience.date_start}
            </div>
            <div className="font-[RobotoSlab-Bold]">{experience.date_end}</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ExperienceCard
              experience={experience}
              key={index}
              isOpen={activeExperienceId === experience.id}
              toggleOpen={toggleOpen}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
