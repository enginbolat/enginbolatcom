"use client";
import React, { memo, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { Icon } from "../icon";

type ButtonType = {
  title: string;
  onPress: () => void;
};

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const effective = theme === "system" ? systemTheme : theme;

  const handleScrollTo = useCallback((elementName: string) => {
    const userAgent = window.navigator.userAgent;
    const section = document.getElementById(elementName);
    if (section) {
      section.scrollIntoView({
        behavior: userAgent.includes("Chrome") ? "instant" : "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  const navButtons: ButtonType[] = useMemo(
    () => [
      { title: "About Me", onPress: () => handleScrollTo("aboutMe") },
      { title: "Portfolio", onPress: () => handleScrollTo("portfolio") },
      {
        title: "Experience",
        onPress: () => handleScrollTo("experiencetimeline"),
      },
      {
        title: "Education",
        onPress: () => handleScrollTo("educationtimeline"),
      },
    ],
    []
  );

  const themeButton: ButtonType = {
    title: effective === "dark" ? "☀️" : "🌙",
    onPress: () => setTheme(effective === "dark" ? "light" : "dark"),
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center gap-6 border border-slate-100 rounded-full shadow bg-gray-50 px-20 py-3 max-md:hidden max-xl:hidden">
      {navButtons.map((button, index) => (
        <NavigationButton
          key={`${index}-${button.title}`}
          title={button.title}
          onPress={button.onPress}
        />
      ))}
      <button onClick={themeButton.onPress}>
        <Icon name={effective === "dark" ? "sunny" : "dark"} color="black"/>
      </button>
    </div>
  );
}

type NavigationButtonProps = {
  title: string;
  onPress: () => void;
};

const NavigationButton = memo(({ title, onPress }: NavigationButtonProps) => (
  <button onClick={onPress}>
    <span className="text-slate-600 text-base font-semibold hover:text-slate-950 dark:hover:text-white transition">
      {title}
    </span>
  </button>
));
