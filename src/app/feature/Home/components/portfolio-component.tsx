import { PortfolioCard, SectionTitle } from "@/components";
import { ProjectModel } from "@/model";
import { memo } from "react";

export const PortfolioComponent = memo(
  ({ projects }: { projects: ProjectModel[] }) => (
    <>
      <div className="my-5">
        <SectionTitle title="Portfolio" navigationUrl="/portfolio" />
      </div>
      <div id="portfolio" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((item: ProjectModel) => {
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
  )
);
