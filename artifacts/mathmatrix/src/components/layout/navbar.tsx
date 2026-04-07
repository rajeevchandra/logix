import React from "react";
import { Link, useLocation } from "wouter";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function LogixLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L30 11 L18 18 L6 11 Z" fill="#2da87a"/>
      <path d="M6 11 L18 18 L18 30 L4 23 Z" fill="#4dc49a"/>
      <path d="M18 18 L30 11 L32 23 L18 30 Z" fill="#1a7a57"/>
      <path d="M18 18 L18 30 L32 23 Z" fill="#0d5c42" opacity="0.4"/>
    </svg>
  );
}

function ToggleSwitch({ on = true }: { on?: boolean }) {
  return (
    <div className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${on ? 'bg-primary' : 'bg-gray-300'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${on ? 'left-7' : 'left-1'}`} />
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/tutoring", label: "Schedule" },
    { href: "/videos", label: "Resources" },
    { href: "/study-groups", label: "Study Groups" },
  ];

  const isResourcesActive = location === "/videos" || location === "/quizzes" || location.startsWith("/resources");
  const isActive = (href: string) => {
    if (href === "/videos") return isResourcesActive;
    if (href === "/") return location === "/";
    return location === href || location.startsWith(href + "/");
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <LogixLogo />
            <span className="text-[17px] font-bold text-gray-900 tracking-tight">Logix</span>
          </Link>

          <nav className="flex items-center gap-8">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors relative py-5 ${
                    active
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ToggleSwitch on={true} />
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-white text-sm font-semibold">A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
