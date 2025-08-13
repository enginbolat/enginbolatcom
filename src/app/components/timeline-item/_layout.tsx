import React from "react";

type TimelineItemProps = {
  link?: string;
  companyName: string;
  location: string;
  date: string;
  description?: string;
  isCurrent?: boolean;
};

const TimelineItemComponent: React.FC<TimelineItemProps> = ({
  link,
  companyName,
  location,
  date,
  description,
  isCurrent = false,
}) => (
  <div className="ml-2">
    <div className="relative items-center">
      <div
        className={`absolute -left-5 ml-0.5 top-1.5 h-4 w-4 rounded-full ${
          isCurrent ? "pulsate bg-slate-600 dark:bg-white" : "bg-slate-400 dark:bg-gray-400"
        }  border border-white dark:border-zinc-900`}
      />
      <div className="ml-2">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <span className="font-bold text-xl">{companyName}</span>
          </a>
        ) : (
          <span className="font-bold text-xl">{companyName}</span>
        )}
        <div className="my-2">
          <span className="font-semibold text-zinc-600 dark:text-zinc-400">
            {location}
          </span>
          <span className="px-2">-</span>
          <span className="font-semibold text-zinc-600 dark:text-zinc-400">
            {date}
          </span>
        </div>
        {description ? <span>{description}</span> : null}
      </div>
    </div>
  </div>
);

export const TimelineItem = React.memo(TimelineItemComponent);
