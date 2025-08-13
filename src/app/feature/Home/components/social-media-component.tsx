import { CircleButton } from "@/components";
import { SocialMediaModel } from "@/model";
import { memo } from "react";

export const SocialMediaComponent = memo(
  ({ social }: { social: SocialMediaModel[] }) => (
    <div className="flex max-md:py-6 max-lg:py-6 pt-5">
      {social.map((item: SocialMediaModel) => (
        <CircleButton icon={item.icon} link={item.link} key={item.id} />
      ))}
    </div>
  )
);
