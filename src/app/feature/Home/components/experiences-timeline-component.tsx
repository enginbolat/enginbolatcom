import React from "react";
import { SectionTitle, TimelineItem } from "@/components";
import { Experience } from "@/model";

export const ExperiencesTimeLineComponent = React.memo(
  ({ experiences }: { experiences: Experience[] }) => {
    return (
      <div id="experiencetimeline">
        <SectionTitle title="Experience" />
        <div
          id="timeline"
          className="border-l-4 border-gray-200 dark:border-zinc-800 ml-3 mt-1 py-6 space-y-14"
        >
          {experiences.map((item, index) => (
            <TimelineItem
              key={`${index}-${item.companyName}`}
              link={item.link}
              companyName={item.companyName}
              location={item.location}
              date={item.date}
              description={item.description}
              isCurrent={item.isCurrent}
            />
          ))}
        </div>
      </div>
    );
  }
);
