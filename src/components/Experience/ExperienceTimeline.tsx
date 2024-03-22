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

interface ExperienceTimelineProps {
  experiences: TExperience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {experiences.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="textSecondary">
            <div>{experience.date_start}</div>
            <div>{experience.date_end}</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ExperienceCard experience={experience} key={index} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
