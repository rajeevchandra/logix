import React, { useState } from "react";
import { Link } from "wouter";

function LogixLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L30 11 L18 18 L6 11 Z" fill="#2da87a"/>
      <path d="M6 11 L18 18 L18 30 L4 23 Z" fill="#4dc49a"/>
      <path d="M18 18 L30 11 L32 23 L18 30 Z" fill="#1a7a57"/>
    </svg>
  );
}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="w-[45%] bg-gray-900 flex flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900 to-gray-900" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-20">
            <LogixLogo />
            <span className="text-white font-bold text-lg">Logix</span>
          </div>
          <div className="text-[11px] font-bold text-primary uppercase tracking-widest mb-4">Elite Mathematical Learning</div>
          <h1 className="text-[40px] font-extrabold text-white leading-tight mb-4">
            Master the logic<br/>behind the universe.
          </h1>
          <blockquote className="border-l-2 border-primary pl-4 mt-10">
            <p className="text-gray-300 text-[15px] italic leading-relaxed">
              "The only way to learn mathematics is to do mathematics."
            </p>
            <footer className="text-primary text-[13px] font-semibold mt-2">— Paul Halmos</footer>
          </blockquote>
        </div>
        <div className="relative z-10 flex items-center gap-10">
          {[
            { value: "15k+", label: "Students" },
            { value: "200+", label: "Curricula" },
            { value: "98%", label: "Success Rate" },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-[12px] text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center bg-white px-12">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="flex items-center gap-2">
              <LogixLogo />
              <span className="text-gray-900 font-bold text-[16px]">Logix</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-[14px] font-semibold text-gray-900">Login</Link>
              <Link href="/signup" className="text-[14px] font-medium text-gray-500 hover:text-gray-700 transition-colors">Sign Up</Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Welcome back</h2>
          <p className="text-gray-500 text-[14px] mb-8">Continue your journey to mathematical mastery.</p>

          <div className="flex gap-3 mb-6">
            {["Google", "Apple"].map(provider => (
              <button key={provider} className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-[14px] font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                {provider === "Google" ? "🇬" : "🍎"} {provider}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[12px] text-gray-400">or login with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[13px] font-semibold text-gray-700">Password</label>
                <a href="#" className="text-[13px] text-primary font-medium hover:underline">Forgot Password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="w-4 h-4 rounded accent-primary"
              />
              <span className="text-[13px] text-gray-600">Keep me logged in for 30 days</span>
            </label>
          </div>

          <Link href="/dashboard" className="block w-full bg-primary text-white text-center font-semibold text-[14px] py-3 rounded-xl hover:bg-primary/90 transition-colors mb-6">
            Sign In to Logix
          </Link>

          <div className="text-center space-y-3">
            <p className="text-[13px] text-gray-400">Need assistance? <a href="#" className="text-primary hover:underline">Contact Student Support</a></p>
            <div className="flex items-center justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Help Center"].map(item => (
                <a key={item} href="#" className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
