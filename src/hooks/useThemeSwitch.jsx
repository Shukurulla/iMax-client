import { useState, useEffect } from "react";

const useThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true); // Default true qilingan

  useEffect(() => {
    // Check local storage for dark mode preference
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      // Agar localStorage da ma'lumot bor bo'lsa, uni ishlatamiz
      const isDark = savedMode === "true";
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Agar localStorage da ma'lumot yo'q bo'lsa, dark mode ni default qilamiz
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  return { darkMode, toggleDarkMode };
};

export default useThemeSwitch;
