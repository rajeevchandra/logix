import React from "react";
import { Link, useLocation } from "wouter";
import { FileQuestion, Play, FileText, BookOpen } from "lucide-react";

const SIDEBAR_ITEMS = [
  { href: "/quizzes", label: "Quizzes", icon: FileQuestion },
  { href: "/videos", label: "Videos", icon: Play },
  { href: "/notes", label: "Notes", icon: FileText },
  { href: "/flashcards", label: "Flashcards", icon: BookOpen },
];

export function ResourceSidebar() {
  const [location] = useLocation();

  return (
    <div className="w-[200px] shrink-0">
      <div className="mb-5">
        <div className="text-[13px] font-semibold text-gray-900">Resource Hub</div>
        <div className="text-[12px] text-gray-500 mt-0.5">Explore & Master</div>
      </div>
      <nav className="flex flex-col gap-1">
        {SIDEBAR_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = location === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                active
                  ? "bg-[#e6f5ee] text-primary"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? "text-primary" : "text-gray-400"}`} />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
