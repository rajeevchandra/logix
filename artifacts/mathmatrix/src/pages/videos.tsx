import React, { useState } from "react";
import { Play, Download, BarChart2, Lightbulb } from "lucide-react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";

const CATEGORIES = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

const VIDEO_GRID: Record<string, { title: string; duration: string; img: string }[]> = {
  Algebra: [
    { title: "Foundations of Algebra", duration: "18:24", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop" },
    { title: "Linear Functions", duration: "12:45", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=340&fit=crop" },
    { title: "Systems of Equations", duration: "12:45", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=340&fit=crop" },
    { title: "Polynomials & Factoring", duration: "12:45", img: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=600&h=340&fit=crop" },
    { title: "Quadratic Functions", duration: "22:10", img: "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?w=600&h=340&fit=crop" },
  ],
  Geometry: [
    { title: "Foundations of Geometry", duration: "18:24", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop" },
    { title: "Congruence & Proof", duration: "12:45", img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&h=340&fit=crop" },
    { title: "Similarity & Trigonometry", duration: "12:45", img: "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?w=600&h=340&fit=crop" },
    { title: "Circles & Conic Sections", duration: "12:45", img: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=340&fit=crop" },
    { title: "Area, Volume, & Modeling", duration: "22:10", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop" },
  ],
  "Pre-Calculus": [
    { title: "Functions & Analysis", duration: "18:24", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop" },
    { title: "Trigonometric Foundations", duration: "18:24", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=340&fit=crop" },
    { title: "Analytic Trigonometry", duration: "12:45", img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=340&fit=crop" },
    { title: "Vectors & Polar Systems", duration: "12:45", img: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=600&h=340&fit=crop" },
    { title: "Limits & Continuity", duration: "22:10", img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=600&h=340&fit=crop" },
  ],
  Calculus: [
    { title: "Differentiation Rules", duration: "18:24", img: "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?w=600&h=340&fit=crop" },
    { title: "Derivatives & Rates", duration: "18:24", img: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=340&fit=crop" },
    { title: "Integration Theory", duration: "12:45", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop" },
    { title: "Differential Equations", duration: "12:45", img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=340&fit=crop" },
    { title: "Sequences & Series", duration: "22:10", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop" },
  ],
};

const UP_NEXT = [
  { num: "04", title: "The Fundamental Theorem", meta: "Currently Watching • 24:15", duration: "24:15", current: true,  img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=200&h=120&fit=crop" },
  { num: "05", title: "Integration by Parts",    meta: "Math Lesson • Dr. Helena Vance",    duration: "18:40", current: false, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop" },
  { num: "06", title: "Volumes of Solids",        meta: "Geometry Focus • Prof. Mark Chen",  duration: "21:05", current: false, img: "https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?w=200&h=120&fit=crop" },
  { num: "07", title: "Polar Coordinates",        meta: "Advanced Algebra • Dr. Helena Vance", duration: "15:50", current: false, img: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=200&h=120&fit=crop" },
  { num: "08", title: "Infinite Series Intro",   meta: "Calculus III • Prof. Sarah J.",     duration: "32:10", current: false, img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=200&h=120&fit=crop" },
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
            <div className="flex gap-6 mb-6">
              {/* Featured player */}
              <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ aspectRatio: "16/9", maxHeight: 440 }}>
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&h=500&fit=crop"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-6 pt-16">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Advanced</span>
                    <span className="bg-gray-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Calculus</span>
                  </div>
                  <h2 className="text-white font-bold text-[22px] leading-snug mb-2">
                    Visualizing Integration: The Fundamental Theorem
                  </h2>
                  <p className="text-white/70 text-[13px]">Session 04 • 24:15 • By Dr. Helena Vance</p>
                </div>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl hover:bg-primary/90 transition-colors">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </button>
              </div>

              {/* Up Next panel */}
              <div className="w-[320px] shrink-0 border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-[15px] font-bold text-gray-900">Up Next</h3>
                  <span className="text-[11px] text-gray-400 font-semibold tracking-wide">12 LESSONS</span>
                </div>
                <div className="flex flex-col divide-y divide-gray-100">
                  {UP_NEXT.map((v) => (
                    <div
                      key={v.num}
                      className={`flex gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                        v.current ? "border-l-4 border-primary bg-gray-50" : "border-l-4 border-transparent"
                      }`}
                    >
                      <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
                        <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-semibold px-1 py-0.5 rounded">
                          {v.duration}
                        </div>
                      </div>
                      <div className="min-w-0 flex flex-col justify-center">
                        <div className={`text-[12px] font-semibold leading-snug ${v.current ? "text-primary" : "text-gray-900"}`}>
                          {v.num}. {v.title}
                        </div>
                        <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">{v.meta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Takeaways + Pro Tip */}
            <div className="flex gap-5 mb-8">
              <div className="flex-1 bg-[#f0faf5] border border-[#c8ead9] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-[#d0eed9] rounded-lg flex items-center justify-center">
                    <BarChart2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[15px] font-bold text-gray-900">Key Takeaways</span>
                </div>
                <ul className="space-y-3 text-[13px] text-gray-700">
                  {[
                    "Understanding the relationship between derivatives and integrals.",
                    "Visualizing area under the curve using Riemann sums.",
                    "Practical applications in physics and engineering.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-72 bg-[#f3f0fc] border border-[#d9d0f5] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-violet-500" />
                  <span className="text-[15px] font-bold text-gray-900">Pro Tip</span>
                </div>
                <p className="text-[13px] text-violet-700 italic leading-relaxed">
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
                <div key={video.title} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={video.img}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                      {video.duration}
                    </div>
                  </div>
                  <div className="px-4 py-4 flex items-center justify-between gap-3">
                    <span className="text-[15px] font-bold text-gray-900 leading-snug">{video.title}</span>
                    <button className="flex items-center gap-1.5 text-[12px] text-primary font-medium border border-primary/20 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full transition-colors shrink-0">
                      <Download className="w-3.5 h-3.5" /> Audio File
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
