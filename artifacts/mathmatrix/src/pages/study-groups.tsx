import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Plus, Users, Radio } from "lucide-react";

const SUBJECTS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

const LIVE_SESSIONS = [
  {
    unit: "Unit 2: Systems and Matrices",
    title: "Substitution vs. Elimination",
    desc: "The ultimate showdown: breaking down algebraic methods for solving linear systems.",
    viewers: 842,
    live: true,
  },
  {
    unit: "Unit 5: Exponents and Radicals",
    title: "Laws of Exponents",
    desc: "From variables to values: learning the essential rules for handling powers and bases.",
    viewers: 419,
    live: false,
    comingSoon: "12:00 PM",
  },
  {
    unit: "Unit 3: Quadratics and Polynomials",
    title: "Graphing Parabolas",
    desc: "Visualizing quadratic functions: Identifying the vertex, axis of symmetry, and direction of opening.",
    viewers: 419,
    live: true,
  },
];

const COMMUNITY_POSTS = [
  { initials: "LV", name: "Liam Vance", msg: "Posted a new shortcut for factoring trinomials in #quadratics.", color: "bg-indigo-100 text-indigo-700" },
  { initials: "SC", name: "Sarah Chen", msg: "Started a live study room: 'Systems of Equations Review'.", color: "bg-red-100 text-red-700" },
];

const PRO_TIP = {
  title: "The Substitution Shortcut",
  body: "Did you know you can verify any answer by plugging your x and y values back into the original equation? If both sides match, your solution is 100% correct!",
};

export function StudyGroups() {
  const [activeSubject, setActiveSubject] = useState("Algebra");
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <div className="flex gap-10">
          {/* Left subject sidebar */}
          <div className="w-[160px] shrink-0">
            <div className="flex flex-col gap-1">
              {SUBJECTS.map(s => (
                <button
                  key={s}
                  onClick={() => setActiveSubject(s)}
                  className={`text-left px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors ${
                    activeSubject === s ? "bg-[#e6f5ee] text-primary" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
              <button
                onClick={() => setShowCreate(true)}
                className="mt-4 flex items-center gap-2 border border-gray-200 text-gray-600 text-[13px] font-medium px-3 py-2.5 rounded-xl hover:border-primary hover:text-primary transition-colors"
              >
                <Plus className="w-4 h-4" /> Create Group
              </button>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Create Group Modal */}
            {showCreate && (
              <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setShowCreate(false)}>
                <div className="bg-white rounded-2xl p-8 w-[480px] shadow-2xl" onClick={e => e.stopPropagation()}>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Create New Study Group</h2>
                  <p className="text-gray-500 text-[13px] mb-6">Initiate a specialized workspace for collaborative learning.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Group Name</label>
                      <input className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Advanced Multivariable Theory" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Subject</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option>Calculus</option>
                          <option>Algebra</option>
                          <option>Geometry</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Session Type</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option>Live Study</option>
                          <option>Async</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Privacy</label>
                        <div className="flex gap-2">
                          {["Public", "Private"].map(opt => (
                            <button key={opt} className="flex-1 border border-gray-200 py-2 rounded-xl text-[13px] text-gray-600 hover:border-primary hover:text-primary transition-colors">{opt}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Schedule Time</label>
                        <input type="datetime-local" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                    </div>
                    <button className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors">
                      Create Group
                    </button>
                    <p className="text-center text-[12px] text-gray-400">By creating a group, you agree to the Community Guidelines.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Community Hub</h1>
              <p className="text-[15px] font-semibold text-gray-700 mb-1">Study With The Community</p>
              <p className="text-gray-500 text-[14px]">Join the forefront of mathematical exploration. From complex derivations to fundamental logic, learn from the best in real-time.</p>
            </div>

            <div className="flex gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-5">
                  {LIVE_SESSIONS.map((session, i) => (
                    <div key={session.title} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      {session.live && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1.5 bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full">
                            <Radio className="w-3 h-3" /> LIVE
                          </div>
                          <div className="flex items-center gap-1 text-[12px] text-gray-500">
                            <Users className="w-3.5 h-3.5" /> {session.viewers.toLocaleString()} Viewers
                          </div>
                        </div>
                      )}
                      {session.comingSoon && (
                        <div className="mb-3 text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                          Coming soon at {session.comingSoon}
                        </div>
                      )}
                      <div className="text-[11px] text-gray-400 mb-1">{session.unit}</div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2">{session.title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{session.desc}</p>
                      <button className="bg-primary/10 text-primary text-[13px] font-semibold px-5 py-2 rounded-xl hover:bg-primary/20 transition-colors">
                        Join Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[260px] shrink-0">
                {/* The Algebra Lab */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-5">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">The Algebra Lab</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                    A dedicated space for solving equations together. Join our daily sessions to master variables, graphing, and word problems with fellow students.
                  </p>
                  <div className="flex flex-col gap-2">
                    {COMMUNITY_POSTS.map(post => (
                      <div key={post.name} className="flex items-start gap-2">
                        <div className={`${post.color} w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0`}>{post.initials}</div>
                        <div>
                          <div className="text-[11px] font-semibold text-gray-700">{post.name}</div>
                          <div className="text-[11px] text-gray-500 leading-snug">{post.msg}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide mb-2">Pro-Tip</div>
                  <h4 className="text-[14px] font-bold text-gray-900 mb-2">{PRO_TIP.title}</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{PRO_TIP.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
