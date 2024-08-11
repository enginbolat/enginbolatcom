"use client";
import React from "react";

import {
  CircleButton,
  Navbar,
  PortfolioCard,
  SectionTitle,
} from "@/components";
import {
  ProjectData,
  SocialMediaData,
  TechStack,
  Experiences,
  Education,
} from "@/data";
import {
  ProjectModel,
  SocialMediaModel,
  TechStack as TechStackModel,
} from "@/model";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <div
        id="aboutMe"
        className="flex flex-col items-center justify-center max-md:px-12 max-lg:px-40 lg:px-40 pt-24"
      >
        <img className="block xl:w-64 xl:h-64" src="/images/profile.png" />
        <span className="text-black text-4xl pt-5 text-center font-bold">
          Hello! I'm Engin
        </span>
        <div className="flex-row pt-3 items-center justify-center">
          <span className="text-black text-2xl font-medium">Software </span>
          <span className="text-gray-400 text-2xl font-medium">Developer</span>
        </div>
        <span className="text-black pt-3 text-center text-xl">
          I develop mobile applications and web services using{" "}
          <b>React Native</b> and <b>Swift</b> with a focus on creating
          user-centered solutions. My passion for technology drives me to
          continually learn and strive for improvement.
        </span>
        <SocialMediaComponent />
      </div>
      <TechStackSlide items={TechStack} />
      <div className="max-md:px-10 md:px-10 max-lg:px-40 lg:px-40">
        <PortfolioComponent />
        <JobTimeLineComponent />
        <EducationTimeLineComponent />
      </div>
      <Navbar />
    </div>
  );
}

const TechStackSlide = ({ items }: Readonly<{ items: TechStackModel[] }>) => {
  return (
    <Marquee
      play
      className="flex flex-row overflow-x-auto max-md:py-12 py-32 image_wrapper techStackContainer"
      speed={125}
    >
      {items.map((item: TechStackModel) => (
        <img
          key={item.id}
          className="block mr-52"
          src={item.imagePath}
          alt={item.name}
          height={32}
          width={32}
        />
      ))}
    </Marquee>
  );
};

const SocialMediaComponent = () => {
  return (
    <div className="flex max-md:py-6 max-lg:py-6 pt-5">
      {SocialMediaData.map((item: SocialMediaModel) => {
        return <CircleButton path={item.path} link={item.link} key={item.id} />;
      })}
    </div>
  );
};

const PortfolioComponent = () => {
  return (
    <>
      <div className="my-5">
        <SectionTitle title="Portfolio" navigationUrl="/portfolio" />
      </div>
      <div id="portfolio" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ProjectData.slice(0, 4).map((item: ProjectModel) => {
          return (
            <PortfolioCard
              link={item.link}
              path={item.image}
              title={item.name}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

const JobTimeLineComponent = () => {
  return (
    <div id="experiencetimeline">
      <SectionTitle title="Experience" />
      <div
        id="timeline"
        className="border-l-4 border-grey-200 ml-3 mt-1 py-6 spac-y-14"
      >
        {Experiences.map((item, index) => {
          return (
            <div id="inner-container" className="ml-2 py-5" key={index}>
              <div className="relative items-center">
                <div className="absolute -left-5 ml-0.5 top-1.5 bg-gray-500 border border-white h-4 w-4 rounded-full pulsate" />
                <div className="ml-2">
                  <div>
                    <a href={item.link} target="_blank">
                      <span className="font-bold text-xl text-black">
                        {item.companyName}
                      </span>
                    </a>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold text-gray-500">
                      {item.location}
                    </span>
                    <span className="px-2">-</span>
                    <span className="text-gray-500 font-semibold">
                      {item.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-black">{item.description}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const EducationTimeLineComponent = () => {
  return (
    <div id="educationtimeline">
      <SectionTitle title="Education" />
      <div
        id="timeline"
        className="border-l-4 border-grey-200 ml-3 mt-1 py-6 spac-y-14"
      >
        {Education.map((item, index) => {
          return (
            <div id="inner-container" className="ml-2 py-5" key={index}>
              <div className="relative items-center">
                <div className="absolute -left-5 ml-0.5 top-1.5 bg-gray-500 border border-white h-4 w-4 rounded-full pulsate" />
                <div className="ml-2">
                  <div>
                    <span className="font-bold text-xl text-black">
                      {item.title}{" "}
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="font-semibold text-gray-500">
                      {item.location}
                    </span>
                    <span className="px-2">-</span>
                    <span className="text-gray-500 font-semibold">
                      {item.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-black">{item.description}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
