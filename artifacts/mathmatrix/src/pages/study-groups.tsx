import React, { useState } from "react";
import { Plus, Users, Radio, ArrowLeft, Send, X } from "lucide-react";

const SUBJECTS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

const LIVE_SESSIONS = [
  {
    unit: "Unit 2: Systems and Matrices",
    title: "Substitution vs. Elimination",
    desc: "The ultimate showdown: breaking down algebraic methods for solving linear systems.",
    viewers: 842,
    live: true,
    elapsed: "01:24:45",
    sessionUnit: "Unit 5: Exponents and radicals",
    sessionTitle: "The Seven Laws of Exponents",
    watching: "12.4k",
    proTip: {
      heading: 'Pro-Tip: The "Zero" Hero',
      body: "Never get tricked — any base raised to the power of 0 is always 1. It doesn't matter how big the number is, if the exponent is 0, the answer is 1!",
    },
    summary: "In this session, we break down how to handle powers and bases. We'll cover why any number to the zero power is 1, how to 'flip' negative exponents, and the easiest way to simplify complex algebraic fractions.",
    tags: ["Advanced", "Derivatives", "Theorems"],
    chat: [
      { initials: "AM", name: "Alex_M", time: "12:45", msg: "Wait, why does any number to the power of 0 always equal 1?" },
      { initials: "MW", name: "MathWiz", time: "12:45", msg: "+12k Think of it as dividing a number by itself. x³ / x³ = 1, and the subtraction rule says 3 − 3 = 0!" },
      { initials: "SM", name: "Sarah_Math", time: "12:45", msg: "Oh! So x^0 is just the result of that pattern. That makes so much more sense now." },
      { initials: "JP", name: "JohnP", time: "12:45", msg: "Can we go over the Negative Exponent rule next? I always forget which way to flip them." },
    ],
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
    elapsed: "00:38:22",
    sessionUnit: "Unit 3: Quadratics and Polynomials",
    sessionTitle: "Graphing Parabolas",
    watching: "419",
    proTip: {
      heading: "Pro-Tip: Vertex Form Shortcut",
      body: "Convert standard form to vertex form by completing the square. The vertex (h, k) tells you exactly where the parabola's turning point is.",
    },
    summary: "Master graphing quadratics by identifying the vertex, axis of symmetry, and direction of opening from standard and vertex form equations.",
    tags: ["Intermediate", "Algebra II", "Graphing"],
    chat: [
      { initials: "LV", name: "Liam_V", time: "12:43", msg: "How do I tell if the parabola opens up or down?" },
      { initials: "MW", name: "MathWiz", time: "12:44", msg: "Look at the sign of 'a'. If a > 0, it opens up. If a < 0, it opens down!" },
    ],
  },
] as const;

type LiveSession = typeof LIVE_SESSIONS[number];

const COMMUNITY_POSTS = [
  { initials: "LV", name: "Liam Vance", msg: "Posted a new shortcut for factoring trinomials in #quadratics.", color: "bg-indigo-100 text-indigo-700" },
  { initials: "SC", name: "Sarah Chen", msg: "Started a live study room: 'Systems of Equations Review'.", color: "bg-red-100 text-red-700" },
];

const PRO_TIP = {
  title: "The Substitution Shortcut",
  body: "Did you know you can verify any answer by plugging your x and y values back into the original equation? If both sides match, your solution is 100% correct!",
};

// ─── Live Session View ─────────────────────────────────────────────────────────

function LiveSessionView({ session, onExit }: { session: LiveSession; onExit: () => void }) {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([...(session.chat ?? [])]);

  function sendMessage() {
    if (!chatInput.trim()) return;
    setMessages(prev => [...prev, { initials: "ME", name: "You", time: "now", msg: chatInput.trim() }]);
    setChatInput("");
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-6">
        <button onClick={onExit} className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800 transition-colors mb-5">
          <ArrowLeft className="w-4 h-4" /> Back to Study Groups
        </button>

        <div className="flex gap-6">
          {/* Left — subject tabs + main session */}
          <div className="flex-1 min-w-0">
            {/* Subject tabs */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {SUBJECTS.map(s => (
                <div key={s} className="flex items-center gap-1.5">
                  <span className={`text-[13px] font-semibold px-3 py-1.5 rounded-xl ${
                    s === "Algebra" ? "bg-[#e6f5ee] text-primary" : "text-gray-400"
                  }`}>{s}</span>
                  {s === "Algebra" && (
                    <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full tracking-wide">LIVE</span>
                  )}
                </div>
              ))}
            </div>

            {/* Session header */}
            <div className="bg-gray-900 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  ● LIVE
                </span>
                <span className="text-gray-300 text-[13px]">
                  <span className="text-white font-bold">{session.watching}</span> watching
                </span>
                <span className="text-gray-500 text-[12px] ml-auto font-mono">{session.elapsed} elapsed</span>
              </div>
              <div className="text-[11px] text-gray-400 mb-1">{session.sessionUnit}</div>
              <h2 className="text-xl font-bold text-white mb-4">{session.sessionTitle}</h2>
              <div className="h-32 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-[13px] border border-gray-700">
                ▶ Live Stream
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-5">
              {(session.tags ?? []).map((tag: string) => (
                <span key={tag} className="text-[11px] font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">{tag}</span>
              ))}
            </div>

            {/* Pro-Tip + Lesson Summary */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-2">Pro-Tip</div>
                <h4 className="text-[13px] font-bold text-gray-900 mb-1.5">{session.proTip?.heading}</h4>
                <p className="text-[12px] text-gray-600 leading-relaxed">{session.proTip?.body}</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Lesson Summary</div>
                <p className="text-[12px] text-gray-700 leading-relaxed">{session.summary}</p>
              </div>
            </div>

            {/* Audio player */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-[16px] font-bold">♪</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-gray-900 truncate">Introduction to Linear Functions.mp3</div>
                <div className="text-[11px] text-gray-400">Unit 1: The Core Foundation</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-36 h-1.5 bg-gray-100 rounded-full">
                  <div className="w-0 h-full bg-primary rounded-full" />
                </div>
                <span className="text-[11px] text-gray-500 font-mono">0:00 / 12:45</span>
              </div>
            </div>
          </div>

          {/* Right — Live Chat */}
          <div className="w-[280px] shrink-0 flex flex-col">
            <h3 className="text-[14px] font-bold text-gray-900 mb-3">Live Chat</h3>
            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col" style={{ height: "530px" }}>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {messages.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center shrink-0">
                      {m.initials}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[11px] font-bold text-gray-700">{m.name}</span>
                        <span className="text-[10px] text-gray-400">{m.time}</span>
                      </div>
                      <p className="text-[12px] text-gray-600 leading-snug">{m.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 p-3 flex items-center gap-2">
                <input
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  placeholder="Say something academic..."
                  className="flex-1 text-[12px] placeholder-gray-400 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button
                  onClick={sendMessage}
                  className="w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export function StudyGroups() {
  const [activeSubject, setActiveSubject] = useState("Algebra");
  const [showCreate, setShowCreate] = useState(false);
  const [activeSession, setActiveSession] = useState<LiveSession | null>(null);

  if (activeSession) {
    return <LiveSessionView session={activeSession} onExit={() => setActiveSession(null)} />;
  }

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
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-xl font-bold text-gray-900">Create New Study Group</h2>
                    <button onClick={() => setShowCreate(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
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
                          {SUBJECTS.filter(s => s !== "Calculus").map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Session Type</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option>Live Study</option>
                          <option>Async Review</option>
                          <option>Problem Set</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Privacy</label>
                        <div className="flex gap-2">
                          {["Public", "Private"].map(p => (
                            <label key={p} className="flex items-center gap-1.5 cursor-pointer">
                              <input type="radio" name="privacy" defaultChecked={p === "Public"} className="accent-primary" />
                              <span className="text-[13px] text-gray-600">{p}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-gray-700 block mb-1.5">Schedule Time</label>
                        <input type="datetime-local" className="w-full border border-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors">
                    Create Group
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-3">By creating a group, you agree to the Community Guidelines.</p>
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
                  {LIVE_SESSIONS.map((session) => (
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
                      {!session.live && "comingSoon" in session && session.comingSoon && (
                        <div className="mb-3 text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                          Coming soon at {session.comingSoon}
                        </div>
                      )}
                      <div className="text-[11px] text-gray-400 mb-1">{session.unit}</div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2">{session.title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{session.desc}</p>
                      <button
                        onClick={() => session.live && setActiveSession(session as LiveSession)}
                        className={`text-[13px] font-semibold px-5 py-2 rounded-xl transition-colors ${
                          session.live
                            ? "bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
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
