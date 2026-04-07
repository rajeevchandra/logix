import React, { useRef, useEffect } from "react";
import { Sun, Moon, Type, BookOpen, Check } from "lucide-react";
import { useAccessibility } from "@/contexts/accessibility-context";

interface AccessibilityPanelProps {
  onClose: () => void;
}

export function AccessibilityPanel({ onClose }: AccessibilityPanelProps) {
  const { theme, toggleTheme, fontSize, setFontSize, dyslexiaFont, toggleDyslexiaFont } = useAccessibility();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
    >
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-widest">Accessibility</h3>
        <p className="text-[11px] text-gray-400 mt-0.5">Customize your reading experience</p>
      </div>

      {/* Appearance */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          {theme === "dark" ? <Moon className="w-3.5 h-3.5 text-primary" /> : <Sun className="w-3.5 h-3.5 text-primary" />}
          <span className="text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Appearance</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { if (theme !== "light") toggleTheme(); }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-[13px] font-medium transition-all ${
              theme === "light"
                ? "bg-primary/10 border-primary text-primary"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Light
            {theme === "light" && <Check className="w-3 h-3" />}
          </button>
          <button
            onClick={() => { if (theme !== "dark") toggleTheme(); }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-[13px] font-medium transition-all ${
              theme === "dark"
                ? "bg-primary/10 border-primary text-primary"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Dark
            {theme === "dark" && <Check className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Font size */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Type className="w-3.5 h-3.5 text-primary" />
          <span className="text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Text Size</span>
        </div>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size, i) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`flex-1 flex flex-col items-center py-2.5 rounded-xl border transition-all ${
                fontSize === size
                  ? "bg-primary/10 border-primary"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              <span
                className={`font-bold ${fontSize === size ? "text-primary" : "text-gray-500"}`}
                style={{ fontSize: 10 + i * 3 }}
              >
                A
              </span>
              <span className={`text-[10px] mt-0.5 ${fontSize === size ? "text-primary" : "text-gray-400"}`}>
                {size === "sm" ? "Small" : size === "md" ? "Medium" : "Large"}
              </span>
            </button>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-2 text-center">Scales all text across the entire site</p>
      </div>

      {/* Dyslexia font */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-primary" />
          <span className="text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Dyslexia-Friendly Font</span>
        </div>
        <button
          onClick={toggleDyslexiaFont}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
            dyslexiaFont
              ? "bg-primary/10 border-primary"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="text-left">
            <div className={`text-[13px] font-semibold ${dyslexiaFont ? "text-primary" : "text-gray-700"}`}>
              OpenDyslexic
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">Easier to distinguish letter shapes</div>
          </div>
          <div className={`w-10 h-5 rounded-full transition-colors relative ${dyslexiaFont ? "bg-primary" : "bg-gray-200"}`}>
            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${dyslexiaFont ? "left-5" : "left-0.5"}`} />
          </div>
        </button>
        <p className="text-[11px] text-gray-400 mt-2 text-center">Heavier bases reduce letter confusion</p>
      </div>
    </div>
  );
}
