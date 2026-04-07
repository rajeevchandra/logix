import React from "react";
import { Navbar } from "./navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
