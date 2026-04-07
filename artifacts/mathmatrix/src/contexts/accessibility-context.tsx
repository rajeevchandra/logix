import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type FontSize = "sm" | "md" | "lg";

interface AccessibilityContextType {
  theme: Theme;
  toggleTheme: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  dyslexiaFont: boolean;
  toggleDyslexiaFont: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return (localStorage.getItem("logix-theme") as Theme) || "light"; } catch { return "light"; }
  });

  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    try { return (localStorage.getItem("logix-fontSize") as FontSize) || "md"; } catch { return "md"; }
  });

  const [dyslexiaFont, setDyslexiaFont] = useState<boolean>(() => {
    try { return localStorage.getItem("logix-dyslexia") === "true"; } catch { return false; }
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    try { localStorage.setItem("logix-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const sizes: Record<FontSize, string> = { sm: "14px", md: "16px", lg: "19px" };
    document.documentElement.style.setProperty("--base-font-size", sizes[fontSize]);
    try { localStorage.setItem("logix-fontSize", fontSize); } catch {}
  }, [fontSize]);

  useEffect(() => {
    const html = document.documentElement;
    if (dyslexiaFont) {
      html.classList.add("dyslexia");
    } else {
      html.classList.remove("dyslexia");
    }
    try { localStorage.setItem("logix-dyslexia", String(dyslexiaFont)); } catch {}
  }, [dyslexiaFont]);

  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");
  const setFontSize = (size: FontSize) => setFontSizeState(size);
  const toggleDyslexiaFont = () => setDyslexiaFont(d => !d);

  return (
    <AccessibilityContext.Provider value={{ theme, toggleTheme, fontSize, setFontSize, dyslexiaFont, toggleDyslexiaFont }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}
