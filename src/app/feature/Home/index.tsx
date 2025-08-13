import React from "react";
import Image from "next/image";

import { AnimatedSection, Navbar } from "@/components";

import {
  ProjectData,
  SocialMediaData,
  TechStack,
  Experiences,
  Education,
} from "@/data";

import {
  ExperiencesTimeLineComponent,
  EducationTimeLineComponent,
  TechStackSlide,
  PortfolioComponent,
  SocialMediaComponent,
} from "./components/";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div
        id="aboutMe"
        className="flex flex-col items-center justify-center max-md:px-12 max-lg:px-40 lg:px-40 pt-24"
      >
        <Image
          src={"/images/profile.png"}
          alt="profile"
          width={32}
          height={32}
          className="block xl:w-64 xl:h-64 max-md:h-32 max-lg:w-32 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800n"
        />
        <span className="text-4xl pt-5 text-center font-bold">
          Hello! I'm Engin
        </span>

        <div className="flex-row pt-3 items-center justify-center">
          <span className="text-2xl font-medium">Software </span>
          <span className="text-2xl font-medium text-zinc-500 dark:text-zinc-400">
            Developer
          </span>
        </div>

        <span className="pt-3 text-center text-xl">
          I develop mobile applications and web services using{" "}
          <b>React Native</b> and <b>Swift</b> with a focus on creating
          user-centered solutions. My passion for technology drives me to
          continually learn and strive for improvement.
        </span>

        <SocialMediaComponent social={SocialMediaData} />
      </div>
      <TechStackSlide items={TechStack} />
      <div className="max-md:px-10 md:px-10 max-lg:px-40 lg:px-40">
        <AnimatedSection>
          <PortfolioComponent projects={ProjectData} />
        </AnimatedSection>
        <AnimatedSection>
          <ExperiencesTimeLineComponent experiences={Experiences} />
        </AnimatedSection>
        <AnimatedSection>
          <EducationTimeLineComponent education={Education} />
        </AnimatedSection>
      </div>
      <Navbar />
    </div>
  );
}
