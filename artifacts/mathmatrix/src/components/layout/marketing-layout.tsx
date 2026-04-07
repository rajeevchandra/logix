import React from "react";
import { Link } from "wouter";

function LogixLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L30 11 L18 18 L6 11 Z" fill="#2da87a"/>
      <path d="M6 11 L18 18 L18 30 L4 23 Z" fill="#4dc49a"/>
      <path d="M18 18 L30 11 L32 23 L18 30 Z" fill="#1a7a57"/>
      <path d="M18 18 L18 30 L32 23 Z" fill="#0d5c42" opacity="0.4"/>
    </svg>
  );
}

function LogixFooterLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L30 11 L18 18 L6 11 Z" fill="#2da87a"/>
      <path d="M6 11 L18 18 L18 30 L4 23 Z" fill="#4dc49a"/>
      <path d="M18 18 L30 11 L32 23 L18 30 Z" fill="#1a7a57"/>
      <path d="M18 18 L18 30 L32 23 Z" fill="#0d5c42" opacity="0.4"/>
    </svg>
  );
}

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <LogixLogo />
            <span className="text-[17px] font-bold text-gray-900 tracking-tight">Logix</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Curriculum", "Accessibility", "Testimonials"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors">Login</Link>
            <Link href="/signup" className="bg-primary text-white text-[14px] font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-white pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
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
                {["🌐", "🐦", "✉️"].map((icon, i) => (
                  <button key={i} className="text-gray-400 hover:text-white transition-colors text-sm">{icon}</button>
                ))}
              </div>
            </div>
            {[
              { title: "LEARNING", items: ["Dashboard", "Resources", "Live Tutoring", "Study Groups"] },
              { title: "COMPANY", items: ["About Us", "Research", "Careers", "Contact"] },
              { title: "SUPPORT", items: ["Citations", "Community", "Status", "Security"] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.items.map(item => (
                    <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
            <p className="text-xs text-gray-500">© 2026 Logix. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
                <a key={item} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
