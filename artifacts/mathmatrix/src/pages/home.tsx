import React from "react";
import { Link } from "wouter";
import { Target, TrendingUp, Clock, Zap, ChevronRight, Check, Play, Lock, Star, Trophy, Bolt } from "lucide-react";

function CircularProgress({ value }: { value: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ - (value / 100) * circ;
  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="60" cy="60" r={r} fill="none"
          stroke="url(#grad)" strokeWidth="8"
          strokeDasharray={circ}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2da87a" />
            <stop offset="100%" stopColor="#1a7a57" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{value}%</span>
        <span className="text-[11px] text-gray-500 text-center leading-tight">Overall<br/>Progress</span>
      </div>
    </div>
  );
}

function AreaChart() {
  const points = [
    { x: 0, y: 80 }, { x: 80, y: 65 }, { x: 160, y: 70 }, { x: 240, y: 55 },
    { x: 320, y: 45 }, { x: 400, y: 30 }, { x: 480, y: 20 }, { x: 560, y: 10 }
  ];
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L 560 120 L 0 120 Z`;

  return (
    <svg viewBox="0 0 560 120" className="w-full h-36">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a7a57" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1a7a57" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#areaGrad)" />
      <path d={pathD} fill="none" stroke="#1a7a57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#1a7a57" />
      ))}
    </svg>
  );
}

const LEARNING_PATH_ROWS = [
  ["done", "done", "done", "done"],
  ["done", "done", "current", "current"],
  ["locked", "locked", "locked", "locked"],
];

const UPCOMING_SESSIONS = [
  { date: "24", month: "Thu", title: "Calculus Review", color: "bg-blue-500" },
  { date: "26", month: "Tue", title: "Algebra 101 Quiz", color: "bg-green-500" },
  { date: "27", month: "Wed", title: "Group Study", color: "bg-orange-400" },
];

const MODULES = [
  { title: "Systems of Equations", subtitle: "Advanced Algebra • 4 problems left", progress: 78 },
  { title: "Factoring", subtitle: "Advanced Algebra • to join class", progress: 45 },
  { title: "Domain & Range", subtitle: "Fundamental Concept", progress: 60 },
];

export function Home() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-8">
        <div className="text-xs text-gray-400 mb-6 flex items-center gap-1">
          <span>Level 15</span>
          <span>•</span>
          <span>Week 8</span>
        </div>

        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1.5">Hey Alex !</h1>
            <p className="text-gray-500 text-[15px]">You're making incredible progress. Let's keep the momentum going.</p>
          </div>
          <CircularProgress value={92} />
        </div>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { icon: Target, label: "Goals", value: "8/10", color: "text-green-600", bg: "bg-green-50" },
            { icon: TrendingUp, label: "Progress", value: "82%", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: Clock, label: "Study Time", value: "24h", color: "text-purple-600", bg: "bg-purple-50" },
            { icon: Zap, label: "Challenges", value: "156", color: "text-orange-500", bg: "bg-orange-50" },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className={`${bg} ${color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-gray-900 mb-1">Weekly Overview</h2>
            <p className="text-[12px] text-gray-400 mb-4">Last 7 days of progress</p>
            <AreaChart />
            <div className="flex justify-between text-[11px] text-gray-400 mt-2 px-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-gray-900 mb-4">Upcoming Sessions</h2>
            <div className="flex flex-col gap-3">
              {UPCOMING_SESSIONS.map(s => (
                <div key={s.date} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className={`${s.color} text-white w-10 h-10 rounded-lg flex flex-col items-center justify-center text-[10px] font-bold shrink-0`}>
                    <span className="text-[11px]">{s.month}</span>
                    <span className="text-[14px] leading-none">{s.date}</span>
                  </div>
                  <span className="text-[13px] font-medium text-gray-700">{s.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">Knowledge Map</span>
            </div>
            <h2 className="text-[15px] font-semibold text-gray-900 mb-1">Learning Path</h2>
            <p className="text-[12px] text-gray-400 mb-5">Navigate through your mathematical journey</p>

            <div className="flex flex-col gap-3">
              {LEARNING_PATH_ROWS.map((row, ri) => (
                <div key={ri} className="flex gap-3 justify-center">
                  {row.map((state, ci) => (
                    <div key={ci} className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                      state === 'done' ? 'bg-primary text-white shadow-sm' :
                      state === 'current' ? 'bg-blue-100 text-blue-600 border-2 border-blue-300' :
                      'bg-gray-100 text-gray-300'
                    }`}>
                      {state === 'done' ? <Check className="w-5 h-5" /> :
                       state === 'current' ? <Play className="w-5 h-5 fill-current" /> :
                       <Lock className="w-5 h-5" />}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-5 text-[12px] text-gray-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-primary" /> Completed</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-blue-300" /> Current</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-gray-300" /> Locked</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-semibold text-gray-900 mb-1">Your Badges</h2>
            <p className="text-[12px] text-gray-400 mb-4">Just 4 unlocked</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Star, color: "bg-amber-100 text-amber-500" },
                { icon: Trophy, color: "bg-green-100 text-green-600" },
                { icon: Bolt, color: "bg-blue-100 text-blue-500" },
                { color: "bg-gray-100 text-gray-300", locked: true },
                { color: "bg-gray-100 text-gray-300", locked: true },
                { color: "bg-gray-100 text-gray-300", locked: true },
              ].map((badge, i) => (
                <div key={i} className={`${badge.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                  {!badge.locked && badge.icon && <badge.icon className="w-7 h-7" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[15px] font-semibold text-gray-900">Current Modules</h2>
            <a href="#" className="text-[13px] text-primary font-medium hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {MODULES.map((mod) => (
              <div key={mod.title} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="text-[14px] font-semibold text-gray-900 mb-1">{mod.title}</div>
                <div className="text-[12px] text-gray-500 mb-4">{mod.subtitle}</div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${mod.progress}%` }} />
                </div>
                <div className="text-[11px] text-gray-400 mt-1.5">{mod.progress}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-8 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-green-200 uppercase tracking-widest mb-2">AI PERSONALIZED PLAN</div>
            <h2 className="text-xl font-bold text-white mb-1.5">Your Custom Strategy is Ready</h2>
            <p className="text-green-100 text-[14px] max-w-md">
              Stressed about an upcoming test? Tell me what it covers and when it is — I'll build you a personalized daily study plan.
            </p>
          </div>
          <button className="bg-white text-primary font-semibold text-[14px] px-6 py-2.5 rounded-xl hover:bg-green-50 transition-colors whitespace-nowrap">
            GENERATE PLAN
          </button>
        </div>
      </div>
    </div>
  );
}
