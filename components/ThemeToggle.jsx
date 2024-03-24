"use client";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

const themes = {
  pastel: "pastel",
  night: "night",
};

function ThemeToggle() {
  const [theme, setTheme] = useState(themes.night);

  const toggleTheme = () => {
    const newTheme = theme === themes.pastel ? themes.night : themes.pastel;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "pastel" ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
}
export default ThemeToggle;
