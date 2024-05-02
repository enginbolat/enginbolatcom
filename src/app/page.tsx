"use client"

import { Component, ReactNode, useEffect, useRef } from "react";
import { CircleButton, PortfolioCard, SectionTitle } from "./components";
import { ProjectData, SocialMediaData, TechStack } from "./data";
import { ProjectModel, SocialMediaModel, TechStack as TechStackModel, } from "./model";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col items-center justify-center px-8 pb-12">
        <img className="block xl:w-64 xl:h-64" src="/images/profile.png" />
        <span className="text-black text-4xl pt-5 text-center">Hello! I'm Engin</span>
        <div className="flex-row pt-3 items-center justify-center">
          <span className="text-black text-2xl font-medium">Software </span>
          <span className="text-gray-400 text-2xl font-medium">Developer</span>
        </div>
        <span className="text-black pt-3 text-center text-xl">
          I develop mobile applications and web services using <b>React Native</b> and <b>Next.JS</b> with a focus on creating user-centered solutions. My passion for technology drives me to continually learn and strive for improvement.
        </span>
        <SocialMediaComponent />
      </div>
      <TechStackSlide items={TechStack} />
      <div className="px-5">
        <PortfolioComponent />
      </div>

    </div >
  );
}

function TechStackSlide({ items }: { items: TechStackModel[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 2;
        const scrollRight = sliderRef.current.scrollLeft + sliderRef.current.clientWidth;
        const scrollWidth = sliderRef.current.scrollWidth;
        if (scrollRight >= scrollWidth) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 50);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div ref={sliderRef} className="flex flex-row py-12 overflow-x-auto techStackContainer">
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
    </div>
  );
}

class SocialMediaComponent extends Component {
  render(): ReactNode {
    return <>
      <div className="flex py-6">
        {SocialMediaData.map((item: SocialMediaModel) => {
          return <CircleButton path={item.path} link={item.link} key={item.id} />
        })}
      </div>
    </>
  }
}

class PortfolioComponent extends Component {
  render(): ReactNode {
    return <>
      <div className="my-5">
        <SectionTitle title="Portfolio"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {ProjectData.map((item: ProjectModel) => {
          return <PortfolioCard link={item.link} path={item.image} title={item.name} key={item.id} />
        })}
      </div>
    </>
  }
}
