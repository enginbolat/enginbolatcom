"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectData } from "../data";
import { Headers } from "./components";

type Project = (typeof ProjectData)[number];

const ProjectCard = React.memo(function ProjectCard({
  item,
}: {
  item: Project;
}) {
  return (
    <article className="group rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block outline-none"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[0.98]"
            priority={false}
          />
        </div>
        <header className="px-4 py-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {item.name}
          </h3>
        </header>
      </Link>
    </article>
  );
});

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Sticky header */}
      <Headers />

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-2">
          {ProjectData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
