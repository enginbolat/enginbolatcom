import * as React from "react";
import type { SVGProps } from "react";

interface IcSunnyProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const IcSunny = ({ color = "black", ...props }: IcSunnyProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color} // artık burası direkt verilen rengi kullanıyor
      d="m6.76 5.34-1.8-1.79-1.41 1.41 1.79 1.79zM1 11h3v2H1zm10-9.95h2V4h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 11h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"
    />
  </svg>
);

export default IcSunny;
