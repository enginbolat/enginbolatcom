import React from "react";

type FooterProps = {
  name?: string;
};

const Footer: React.FC<FooterProps> = ({ name = "ENGIN BOLAT" }) => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-white dark:bg-zinc-950 py-2 flex items-center justify-center">
      <span className="text-gray-500 dark:text-gray-400 font-medium">
        {name} © {year}
      </span>
    </div>
  );
};

export default Footer;
