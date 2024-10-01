import { userTheme } from "@/app/context/theme";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = userTheme();
  // state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button className="nav-link" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      )}
    </>
  );
}
