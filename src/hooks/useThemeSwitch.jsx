import { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return { darkMode, toggleDarkMode };
};

export default useThemeSwitch;
