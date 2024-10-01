// 表明这是客户端上显示的内容
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const getDefaultTheme = () => {
  if (typeof window !== "undefined") {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme || "light";
  }
  return "light";
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const userTheme = () => useContext(ThemeContext);
