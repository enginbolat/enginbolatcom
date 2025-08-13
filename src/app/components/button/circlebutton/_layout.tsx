"use client";

import { IconKeys } from "app/assets/icons/icons";
import { Icon } from "app/components/icon";
import { useTheme } from "next-themes";
import Link from "next/link";

interface CircleButtonProps {
  link: string;
  icon: IconKeys;
}

export function CircleButton({ link, icon }: Readonly<CircleButtonProps>) {
  const { theme, systemTheme } = useTheme();
  const effective = theme === "system" ? systemTheme : theme;

  return (
    <Link
      href={link}
      className="block transation duration-300 transform hover:scale-110 hover:zoom-in hover:ease-in-out hover:-rotate-3"
      target="_blank"
    >
      <Icon
        name={icon}
        height={52}
        width={52}
        className={`block rounded-xl p-2 max-md:w-12 max-md:h-12 max-lg:w-12 max-lg:h-14
              ${effective === "dark" ? "text-white" : "text-black"}
              hover:bg-gray-100 dark:hover:bg-slate-950`}
      />
    </Link>
  );
}
