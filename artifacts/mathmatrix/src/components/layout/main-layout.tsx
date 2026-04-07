import React from "react";
import { Navbar } from "./navbar";
import { Link } from "wouter";

function LogixFooterLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L30 11 L18 18 L6 11 Z" fill="#2da87a"/>
      <path d="M6 11 L18 18 L18 30 L4 23 Z" fill="#4dc49a"/>
      <path d="M18 18 L30 11 L32 23 L18 30 Z" fill="#1a7a57"/>
      <path d="M18 18 L18 30 L32 23 Z" fill="#0d5c42" opacity="0.4"/>
    </svg>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white pt-14 pb-8">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LogixFooterLogo />
                <span className="font-bold text-lg text-white">Logix</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                Pioneering the next generation of mathematical education through precision, clarity, and interactive digital design.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">LEARNING</h4>
              <ul className="space-y-2.5">
                {["Dashboard", "Resources", "Live Tutoring", "Study Groups"].map(item => (
                  <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">COMPANY</h4>
              <ul className="space-y-2.5">
                {["About Us", "Research", "Careers", "Contact"].map(item => (
                  <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">SUPPORT</h4>
              <ul className="space-y-2.5">
                {["Citations", "Community", "Status", "Security"].map(item => (
                  <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
            <p className="text-xs text-gray-500">© 2026 Logix. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
