import { useEffect } from "react";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [isdarkMode, setDarkMode] = useState(false);
  //to change the theme creating toggle function

  const toggleTheme = () => {
    setDarkMode(!isdarkMode);
  };

  //persist the dark mode after the page reload if applicable

  useEffect(() => {
    function setTheme() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      }
    }
    setTheme();
  }, []);

  //setting the dark mode or light mode for page

  useEffect(() => {
    if (isdarkMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [isdarkMode]);

  return (
    <div className="darkModeToggle">
      <button
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        {isdarkMode ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
