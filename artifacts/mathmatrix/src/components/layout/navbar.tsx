import React from "react";
import { Link, useLocation } from "wouter";
import { Bell, Search, Sigma, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/overview", label: "Overview" },
    { href: "/schedule", label: "Schedule" },
    { href: "/videos", label: "Resources" },
    { href: "/study-groups", label: "Study Groups" },
  ];

  return (
    <div className="fixed top-5 left-[23px] right-[23px] max-w-[1394px] mx-auto z-50">
      <header className="h-[67px] w-full rounded-2xl border-b border-white/5 bg-[#0a0b10]/75 backdrop-blur-xl px-[34px] flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-[51px] w-[49px] items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sigma className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MathMatrix</span>
          </Link>

          <nav className="hidden md:flex items-center ml-12 gap-8">
            {links.map((link) => {
              const isActive = location === link.href || (location.startsWith(link.href) && link.href !== "/");
              return (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className={`text-[15px] transition-colors relative py-5 ${
                    isActive
                      ? "text-white font-medium" 
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white h-8 w-8 rounded-full">
            <Moon className="h-[18px] w-[18px]" />
          </Button>
          <div className="flex items-center gap-4 border-l border-white/10 pl-5">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white h-8 w-8 rounded-full">
              <Search className="h-[16px] w-[16px]" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white h-8 w-8 rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="h-8 w-8 rounded-full bg-primary/20">
              <AvatarFallback className="text-primary text-sm font-medium">A</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </div>
  );
}
