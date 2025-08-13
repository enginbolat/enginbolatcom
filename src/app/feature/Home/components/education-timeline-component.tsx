import React from "react";
import { SectionTitle, TimelineItem } from "@/components";
import { EducationModel } from "app/model/education.model";

export const EducationTimeLineComponent = React.memo(
  ({ education }: { education: EducationModel[] }) => {
    return (
      <div id="educationtimeline">
        <SectionTitle title="Education" />
        <div
          id="timeline"
          className="border-l-4 border-gray-200 dark:border-zinc-800 ml-3 mt-1 py-6 space-y-14"
        >
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              companyName={item.title}
              location={item.location}
              date={item.date}
              isCurrent={item.isCurrent}
            />
          ))}
        </div>
      </div>
    );
  }
);
