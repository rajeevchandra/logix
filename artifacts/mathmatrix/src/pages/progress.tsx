import React, { useState } from "react";
import { Link } from "wouter";
import { MainLayout } from "@/components/layout/main-layout";
import { ArrowLeft, TrendingUp, Trophy, Zap, Crown, Check, ExternalLink } from "lucide-react";

// ─── Score Trends SVG chart ────────────────────────────────────────────────────

function ScoreTrends({ view }: { view: "weekly" | "monthly" }) {
  const weeklyPts  = [62, 68, 71, 75, 80, 84, 87, 88];
  const monthlyPts = [55, 63, 70, 78, 82, 85, 86, 88];
  const pts = view === "weekly" ? weeklyPts : monthlyPts;
  const labels = view === "weekly"
    ? ["WK 01","WK 02","WK 03","WK 04","WK 05","WK 06","WK 07","WK 08"]
    : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

  const W = 560, H = 120;
  const minV = 40, maxV = 100;
  const toX = (i: number) => (i / (pts.length - 1)) * (W - 20) + 10;
  const toY = (v: number) => H - ((v - minV) / (maxV - minV)) * (H - 20) + 2;

  const pathD = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const areaD = `${pathD} L ${toX(pts.length-1)} ${H} L ${toX(0)} ${H} Z`;

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-36">
        <defs>
          <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a7a57" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1a7a57" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#trendGrad)" />
        <path d={pathD} fill="none" stroke="#1a7a57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((v, i) => (
          <g key={i}>
            <circle cx={toX(i)} cy={toY(v)} r="4" fill="#1a7a57" />
            <text x={toX(i)} y={toY(v) - 10} textAnchor="middle" fontSize="9" fill="#6b7280">{v}%</text>
          </g>
        ))}
      </svg>
      <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1.5">
        {labels.map(l => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
}

// ─── Subject bar ───────────────────────────────────────────────────────────────

function SubjectBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[140px] shrink-0 text-[11px] font-bold text-gray-500 uppercase tracking-wider">{label}</div>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
      <div className="w-10 text-right text-[13px] font-bold text-gray-800">{pct}%</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    label: "Logic Master",
    desc: "10 Perfect Scores in a Row",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Zap,
    label: "Rapid Solver",
    desc: "Quizzes finished 2× faster",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Crown,
    label: "Curriculum King",
    desc: "Complete all courses",
    color: "bg-green-100 text-green-600",
  },
];

const QUIZ_HISTORY = [
  { name: "Advanced Polynomials II",       date: "Oct 24, 2023", score: 96, status: "PASSED" },
  { name: "Spatial Transformations",        date: "Oct 21, 2023", score: 88, status: "PASSED" },
  { name: "Bayesian Probability Intro",     date: "Oct 18, 2023", score: 74, status: "REVIEW NEEDED" },
  { name: "Vector Calculus Foundations",    date: "Oct 15, 2023", score: 92, status: "PASSED" },
];

export function Progress() {
  const [trendView, setTrendView] = useState<"weekly" | "monthly">("weekly");

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-[1100px] mx-auto px-8 pt-8">

        {/* Back link */}
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Logix Progress Report</h1>
            <p className="text-[14px] text-gray-600 max-w-xl">
              Alex Johnson, your current mastery trajectory is exceptional. You've completed <strong>85%</strong> of your target curriculum for the semester.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-[12px] font-bold px-3 py-1.5 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" /> +12% vs last month
            </div>
            <div className="bg-primary text-white text-[11px] font-extrabold px-3 py-1 rounded-full tracking-widest">
              TOP 5%
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Average Score",  value: "88%",     sub: "All quizzes" },
            { label: "Total Quizzes",  value: "45",      sub: "This semester" },
            { label: "Time Invested",  value: "12h 30m", sub: "Study hours" },
            { label: "Mastery Level",  value: "Elite",   sub: "Top 5% of students" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</div>
              <div className="text-2xl font-extrabold text-gray-900 mb-0.5">{value}</div>
              <div className="text-[11px] text-gray-400">{sub}</div>
            </div>
          ))}
        </div>

        {/* Score Trends + Subject Breakdown */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-[15px] font-bold text-gray-900">Score Trends</h2>
                <p className="text-[12px] text-gray-400">Performance mapping over the last 12 weeks</p>
              </div>
              <div className="flex rounded-xl overflow-hidden border border-gray-200">
                {(["weekly","monthly"] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => setTrendView(v)}
                    className={`text-[12px] font-semibold px-3 py-1.5 capitalize transition-colors ${
                      trendView === v ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <ScoreTrends view={trendView} />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
            <h2 className="text-[15px] font-bold text-gray-900 mb-5">Subject Breakdown</h2>
            <div className="flex flex-col gap-4 flex-1">
              <SubjectBar label="Algebra II"    pct={94} color="bg-primary" />
              <SubjectBar label="Geometry"      pct={82} color="bg-blue-400" />
              <SubjectBar label="Trigonometry"  pct={71} color="bg-violet-400" />
              <SubjectBar label="Statistics"    pct={98} color="bg-amber-400" />
            </div>
            <button className="mt-6 w-full border border-gray-200 text-gray-600 text-[13px] font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              View Detailed Syllabus <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mb-8">
          <h2 className="text-[15px] font-bold text-gray-900 mb-4">Recent Achievements</h2>
          <div className="grid grid-cols-3 gap-4">
            {ACHIEVEMENTS.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-gray-900">{label}</div>
                  <div className="text-[12px] text-gray-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Quiz History */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-[15px] font-bold text-gray-900">Recent Quiz History</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["Quiz Name","Date","Score","Status","Action"].map(col => (
                  <th key={col} className="text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider px-6 py-3">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUIZ_HISTORY.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-[13px] font-semibold text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[14px] font-bold ${row.score >= 90 ? "text-primary" : row.score >= 80 ? "text-blue-600" : "text-orange-500"}`}>
                      {row.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      row.status === "PASSED"
                        ? "bg-primary/10 text-primary"
                        : "bg-orange-100 text-orange-600"
                    }`}>
                      {row.status === "PASSED" && <Check className="w-3 h-3 inline mr-1" />}
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[12px] font-semibold text-primary hover:underline">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 border-t border-gray-100 text-center">
            <button className="text-[13px] font-semibold text-primary hover:underline">
              View All Quiz History (45)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
