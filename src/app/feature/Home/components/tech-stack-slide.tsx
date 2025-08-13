import React from "react";
import Marquee from "react-fast-marquee";
import { TechStack as TechStackModel } from "@/model";

export const TechStackSlide = React.memo(
  ({ items }: Readonly<{ items: TechStackModel[] }>) => {
    return (
      <Marquee
        play
        className="flex flex-row overflow-x-auto max-md:py-12 py-32 image_wrapper techStackContainer"
        speed={125}
      >
        {items.map((item: TechStackModel) => (
          <img
            key={item.id}
            className="block mr-52 opacity-90 hover:opacity-100 transition"
            src={item.imagePath}
            alt={item.name}
            height={32}
            width={32}
          />
        ))}
      </Marquee>
    );
  }
);
