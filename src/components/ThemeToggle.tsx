import { useEffect, useState } from "react";
import logoThemeDark from "@/assets/logo_theme_dark.png";
import logoThemeLight from "@/assets/logo_theme_light.png";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 transition-all duration-500 hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      <img
        src={theme === "light" ? logoThemeLight : logoThemeDark}
        alt="Theme Toggle"
        className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
      />
    </button>
  );
};
