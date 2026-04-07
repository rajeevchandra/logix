import React from "react";
import { Link, useLocation } from "wouter";
import { Bell, Search, Sigma } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/videos", label: "Resources" },
    { href: "/tutoring", label: "Schedule" },
    { href: "/", label: "Study Groups" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Sigma className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">MathMatrix</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  location === link.href || (location.startsWith(link.href) && link.href !== "/")
                    ? "text-primary font-medium" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar className="h-8 w-8 border border-border">
            <AvatarFallback className="bg-primary/20 text-primary text-xs">A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
