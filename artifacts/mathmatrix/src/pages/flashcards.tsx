import React, { useState } from "react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Plus, Flame, Brain } from "lucide-react";

const DECKS = [
  {
    title: "Linear Algebra",
    desc: "Foundations of algebra: Linear equations, slope-intercept form, and basic variables",
    cards: 20,
    mastery: 68,
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    title: "Algebra II",
    desc: "Logarithmic functions, complex numbers, and transformations of polynomial graphs.",
    cards: 86,
    mastery: 45,
    color: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    title: "Trigonometry",
    desc: "Sine, Cosine, and Tangent identities with practical wave applications.",
    cards: 210,
    mastery: 92,
    color: "bg-green-100",
    textColor: "text-green-700",
  },
];

export function Flashcards() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <div className="flex gap-10">
          <ResourceSidebar />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-900">Interactive Flashcards</h1>
              <button className="flex items-center gap-2 bg-primary text-white text-[13px] font-semibold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" /> Create New Deck
              </button>
            </div>
            <p className="text-gray-500 text-[14px] mb-8">
              Master complex concepts through active recall and spaced repetition. Stay consistent to boost your long-term memory.
            </p>

            <div className="flex gap-5 mb-8">
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-[13px] text-gray-500 mb-1">Daily Progress</div>
                <div className="text-3xl font-bold text-gray-900 mb-0.5">42 <span className="text-[16px] text-gray-400">/ 50</span></div>
                <div className="text-[12px] text-gray-400">New Concepts Mastered Today</div>
                <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "84%" }} />
                </div>
              </div>
              <div className="w-44 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center">
                <Flame className="w-8 h-8 text-orange-500 mb-2" />
                <div className="text-3xl font-bold text-gray-900">12</div>
                <div className="text-[12px] text-gray-500">Days Streak</div>
                <div className="text-[11px] text-primary font-medium mt-1">Consistency Streak</div>
              </div>
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="text-[13px] font-bold text-gray-900 mb-2">Quick Review</div>
                <div className="text-[12px] text-gray-500 mb-4">
                  The following cards are due for repetition according to your spaced learning schedule.
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] font-semibold text-red-600">Critical Review</div>
                    <div className="text-[13px] font-bold text-gray-900">18 <span className="text-[11px] text-gray-400 font-normal">Due Now</span></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[12px] font-semibold text-amber-600">Needs Practice</div>
                    <div className="text-[13px] font-bold text-gray-900">34 <span className="text-[11px] text-gray-400 font-normal">Due in 4h</span></div>
                  </div>
                </div>
                <button className="w-full bg-primary text-white text-[13px] font-semibold py-2 rounded-xl hover:bg-primary/90 transition-colors">
                  Start Session
                </button>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
              <Brain className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <div className="text-[13px] font-bold text-gray-900 mb-1">Memory Hack — Visualizing Integration</div>
                <p className="text-[13px] text-gray-600">
                  Recent data shows you master calculus cards 40% faster when viewing the area-under-curve graphs. We've added 15 new visual proofs to your Calculus deck.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[15px] font-bold text-gray-900">Your Decks</h2>
              <div className="flex items-center gap-2 text-[13px] text-gray-500">
                Sort by: <span className="text-gray-900 font-medium">Recently Studied</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {DECKS.map(deck => (
                <div key={deck.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${deck.color} ${deck.textColor} text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-3`}>
                    {deck.mastery}% Mastery
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">{deck.title}</h3>
                  <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">{deck.desc}</p>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${deck.mastery}%` }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-gray-400">{deck.cards} Cards</span>
                    <button className="bg-primary/10 text-primary text-[13px] font-semibold px-4 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                      Study Now
                    </button>
                  </div>
                </div>
              ))}

              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
                  <Plus className="w-6 h-6 text-gray-400 group-hover:text-primary" />
                </div>
                <div className="text-[14px] font-semibold text-gray-500 group-hover:text-gray-700 mb-1">Create New Deck</div>
                <div className="text-[12px] text-gray-400">Import from PDF or start fresh</div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-[14px] font-bold text-gray-900">Memory Strength — 72%</h3>
              </div>
              <p className="text-[13px] text-gray-500 mb-3">Your memory retention is higher than last week.</p>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                <div className="text-[12px] font-semibold text-gray-700 mb-1">Study Tip</div>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  Try to link new flashcards to concepts you already know. This "Elaborative Rehearsal" makes it 3x easier to recall later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
