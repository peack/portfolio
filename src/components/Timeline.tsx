// Timeline.tsx

import React, { useState } from "react";

interface TimelineItem {
  timestamp: string;
  title: string;
  description: string;
  // You can add more properties like icon, link, etc.
}

const timelineItems: TimelineItem[] = [
  {
    timestamp: "2023-01-01",
    title: "Started my journey as a developer",
    description:
      "Learned the basics of web development and built my first website.",
  },
  {
    timestamp: "2023-06-01",
    title: "Joined my first development team",
    description: "Gained experience collaborating on real-world projects.",
  },
  {
    timestamp: "2024-02-13",
    title: "Building amazing things with React!",
    description: "Currently learning and growing as a developer.",
  },
  // Add more timeline items as needed
];

const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  const handleItemClick = (item: TimelineItem) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <div className="container mx-auto mt-12">
      <ul className="timeline">
        {timelineItems.map((item, index) => {
          const isActive = item === activeItem;
          return (
            <li
              key={item.timestamp}
              className={`timeline-item cursor-pointer ${isActive ? "active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="timeline-indicator">
                {/* You can use icons or dots here */}
                <div
                  className={`bg-blue-500 border-blue-500 border-w-2 rounded-full w-3 h-3 ${
                    isActive || index > 0 ? "" : "opacity-50"
                  }`}
                />
              </div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.timestamp}</p>
                <div className={`timeline-details ${isActive ? "" : "hidden"}`}>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
              <div
                className={`timeline-line ${isActive ? "" : "opacity-50"}`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
