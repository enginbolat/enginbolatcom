import { IconKeys, Icons } from "app/assets/icons/icons";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  name: IconKeys;
}

export const Icon = ({ name, ...props }: Props) => {
  const SelectedIcon = Icons[name];
  
  return <SelectedIcon {...props} />;
};
