
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md p-2 transition-colors hover:bg-finverse-accent/20 focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-finverse-blue" />
      ) : (
        <Sun className="h-5 w-5 text-finverse-accent" />
      )}
    </button>
  );
}
