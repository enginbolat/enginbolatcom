import { Icon } from "@/components";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Headers = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const effective = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            ENGIN BOLAT
          </span>
        </Link>

        <button
          onClick={() => setTheme(effective === "dark" ? "light" : "dark")}
          className={`transition-colors duration-300`}
        >
          <Icon
            name={effective === "dark" ? "sunny" : "dark"}
            color={effective === "dark" ? "white" : "dark"}
            className="w-6 h-6"
          />
        </button>
      </div>
    </header>
  );
};
