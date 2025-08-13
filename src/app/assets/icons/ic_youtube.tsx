"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import type { SVGProps } from "react";
const SvgIcYoutube = (props: SVGProps<SVGSVGElement>) => {
  const { theme, systemTheme } = useTheme();
  const effective = theme === "system" ? systemTheme : theme;

  const bgColor = effective === "dark" ? "white" : "black";
  const iconColor = effective === "dark" ? "black" : "white";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <g clipPath="url(#ic_youtube_svg__a)">
        <path
          fill={bgColor}
          d="M47.044 12.37A6.03 6.03 0 0 0 42.8 8.1c-3.752-1.01-18.752-1.01-18.752-1.01s-15 0-18.753 1.01a6.03 6.03 0 0 0-4.244 4.27C.048 16.14.048 24 .048 24s0 7.86 1.003 11.63a6.03 6.03 0 0 0 4.244 4.27c3.753 1.01 18.753 1.01 18.753 1.01s15 0 18.752-1.01a6.03 6.03 0 0 0 4.244-4.27C48.048 31.86 48.048 24 48.048 24s0-7.86-1.004-11.63"
        />
        <path fill={iconColor} d="M19.139 31.137V16.863L31.684 24z" />
      </g>
      <defs>
        <clipPath id="ic_youtube_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgIcYoutube;
