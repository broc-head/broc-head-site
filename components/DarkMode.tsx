import { useState, useEffect } from "react"

function DarkMode() {
  const [darkMode, setDarkMode]= useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const theme = darkMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
        root.classList.remove(theme);
        root.classList.add(darkMode);
    
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", darkMode);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}

export default DarkMode