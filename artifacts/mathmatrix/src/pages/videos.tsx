import React, { useState } from "react";
import { Play, Download, Volume2 } from "lucide-react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";

const CATEGORIES = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

const VIDEO_GRID: Record<string, { title: string; duration: string; bg: string; emoji: string }[]> = {
  Algebra: [
    { title: "Foundations of Algebra", duration: "18:24", bg: "bg-amber-100", emoji: "🧮" },
    { title: "Linear Functions", duration: "12:45", bg: "bg-blue-100", emoji: "📈" },
    { title: "Systems of Equations", duration: "12:45", bg: "bg-indigo-100", emoji: "🔢" },
    { title: "Polynomials & Factoring", duration: "12:45", bg: "bg-teal-100", emoji: "✏️" },
    { title: "Quadratic Functions", duration: "22:10", bg: "bg-green-100", emoji: "🟢" },
  ],
  Geometry: [
    { title: "Foundations of Geometry", duration: "18:24", bg: "bg-purple-100", emoji: "📐" },
    { title: "Congruence & Proof", duration: "12:45", bg: "bg-blue-100", emoji: "🔷" },
    { title: "Similarity & Trigonometry", duration: "12:45", bg: "bg-rose-100", emoji: "📏" },
    { title: "Circles & Conic Sections", duration: "12:45", bg: "bg-orange-100", emoji: "⭕" },
    { title: "Area, Volume, & Modeling", duration: "22:10", bg: "bg-cyan-100", emoji: "📦" },
  ],
  "Pre-Calculus": [
    { title: "Functions & Analysis", duration: "18:24", bg: "bg-violet-100", emoji: "📊" },
    { title: "Trigonometric Foundations", duration: "18:24", bg: "bg-amber-100", emoji: "🌊" },
    { title: "Analytic Trigonometry", duration: "12:45", bg: "bg-blue-100", emoji: "📐" },
    { title: "Vectors & Polar Systems", duration: "12:45", bg: "bg-teal-100", emoji: "🧭" },
    { title: "Limits & Continuity", duration: "22:10", bg: "bg-green-100", emoji: "∞" },
  ],
  Calculus: [
    { title: "Differentiation Rules", duration: "18:24", bg: "bg-red-100", emoji: "d/dx" },
    { title: "Derivatives & Rates", duration: "18:24", bg: "bg-orange-100", emoji: "📉" },
    { title: "Integration Theory", duration: "12:45", bg: "bg-blue-100", emoji: "∫" },
    { title: "Differential Equations", duration: "12:45", bg: "bg-indigo-100", emoji: "🔄" },
    { title: "Sequences & Series", duration: "22:10", bg: "bg-green-100", emoji: "Σ" },
  ],
};

const UP_NEXT = [
  { num: "04", title: "The Fundamental Theorem", meta: "Currently Watching • 24:15", current: true },
  { num: "05", title: "Integration by Parts", meta: "North LinAlge • By Dr. Helena Vance", current: false },
  { num: "06", title: "Volumes of Solids", meta: "Student's Focus • Prof. Mari Chen", current: false },
  { num: "07", title: "Polar Coordinates", meta: "Advanced Algebra • Dr. Vance", current: false },
  { num: "08", title: "Infinite Series Intro", meta: "Calculus 4 • Prof. Sorin J.", current: false },
];

export function Videos() {
  const [activeCategory, setActiveCategory] = useState("Algebra");
  const videos = VIDEO_GRID[activeCategory] || [];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <div className="flex gap-10">
          <ResourceSidebar />

          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Math Video Lessons</h1>
            <p className="text-gray-500 text-[14px] mb-8 max-w-lg">
              Deep dive into complex mathematical concepts through cinematic educational modules and expert-led derivations.
            </p>

            {/* Featured video + up-next */}
            <div className="flex gap-6 mb-8">
              <div className="flex-1 bg-gray-900 rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9", maxHeight: 320 }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20 text-white font-serif">∫</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Advanced</span>
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Calculus</span>
                  </div>
                  <h2 className="text-white font-bold text-[17px] leading-snug mb-1">
                    Visualizing Integration: The Fundamental Theorem
                  </h2>
                  <p className="text-white/70 text-[12px]">Session 04 • 24:15 • By Dr. Helena Vance</p>
                </div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </button>
              </div>

              <div className="w-[280px] shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[14px] font-bold text-gray-900">Up Next</h3>
                  <span className="text-[11px] text-gray-400 font-medium">12 LESSONS</span>
                </div>
                <div className="flex flex-col gap-2">
                  {UP_NEXT.map((v) => (
                    <div
                      key={v.num}
                      className={`flex gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors ${v.current ? "bg-gray-50 border border-gray-200" : ""}`}
                    >
                      <div className="w-16 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 text-white/40 text-[10px] font-mono">
                        {v.num}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[12px] font-semibold text-gray-900 leading-snug truncate">{v.title}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5 truncate">{v.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Takeaways + Pro Tip */}
            <div className="flex gap-6 mb-8">
              <div className="flex-1 bg-[#e8f5ee] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] font-semibold text-gray-800">📋 Key Takeaways</span>
                </div>
                <ul className="space-y-2 text-[13px] text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Understanding the relationship between derivatives and integrals</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Visualizing area under the curve using Riemann sums</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span> Practical applications in physics and engineering</li>
                </ul>
              </div>
              <div className="w-64 bg-[#f0eef8] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[13px] font-semibold text-gray-800">💡 Pro Tip</span>
                </div>
                <p className="text-[13px] text-gray-700 italic leading-relaxed">
                  "Always visualize the infinitesimal change before jumping into the algebraic manipulation. The geometry holds the truth."
                </p>
              </div>
            </div>

            {/* Subject tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-6">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[14px] font-medium pb-3 border-b-2 transition-colors ${
                      activeCategory === cat ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Video grid — 2 columns */}
            <div className="grid grid-cols-2 gap-5">
              {videos.map((video) => (
                <div key={video.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className={`${video.bg} h-40 relative flex items-center justify-center`}>
                    <span className="text-5xl opacity-40">{video.emoji}</span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-90">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-gray-900">{video.title}</span>
                    <button className="flex items-center gap-1 text-[11px] text-primary font-medium hover:underline">
                      <Volume2 className="w-3.5 h-3.5" /> Audio File
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
