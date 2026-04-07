import React from "react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Check, X, Clock } from "lucide-react";

const CHALLENGES = [
  { title: "Mental Math Sprint", duration: "5 MIN", color: "bg-purple-100 text-purple-600", icon: "⚡" },
  { title: "Algebra Dash", duration: "4 MIN", color: "bg-blue-100 text-blue-600", icon: "△" },
  { title: "Function Matcher", duration: "8 MIN", color: "bg-violet-100 text-violet-600", icon: "📊" },
];

const LEARNING_PROFILE = [
  { topic: "Linear Foundations", done: true },
  { topic: "Systems & Matrices", done: true },
  { topic: "Quadratics & Polynomials", done: false },
];

export function Quizzes() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <div className="flex gap-10">
          <ResourceSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex gap-6">
              <div className="flex-1 min-w-0">
                <div className="bg-primary rounded-2xl p-8 mb-8">
                  <h1 className="text-2xl font-bold text-white mb-3">Knowledge Assessment</h1>
                  <p className="text-green-100 text-[14px] leading-relaxed max-w-md">
                    Test your understanding of recent topics with interactive quizzes and track your progress.
                    Push your boundaries and achieve mastery.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-[15px] font-bold text-gray-900">Daily Challenges</h2>
                    <span className="text-[13px] text-primary font-medium">Resets in 14h 22m</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {CHALLENGES.map((c) => (
                      <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`${c.color} w-10 h-10 rounded-xl flex items-center justify-center text-xl`}>
                            {c.icon}
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                            <Clock className="w-3 h-3" />
                            {c.duration}
                          </div>
                        </div>
                        <div className="text-[14px] font-semibold text-gray-900">{c.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-[15px] font-bold text-gray-900 mb-4">Recent Quiz History</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "Algebra Fundamentals Quiz", score: 92, date: "Today" },
                      { name: "Linear Functions Test", score: 85, date: "Yesterday" },
                      { name: "Quadratic Equations", score: 78, date: "2 days ago" },
                    ].map((q) => (
                      <div key={q.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                        <div>
                          <div className="text-[13px] font-semibold text-gray-900">{q.name}</div>
                          <div className="text-[11px] text-gray-400">{q.date}</div>
                        </div>
                        <div className={`text-[14px] font-bold ${q.score >= 90 ? "text-green-600" : q.score >= 80 ? "text-blue-600" : "text-orange-500"}`}>
                          {q.score}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-[240px] shrink-0">
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-4">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-4">Quiz Analytics</h3>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] text-gray-600">Weekly Progress</span>
                      <span className="text-[14px] font-bold text-gray-900">12</span>
                    </div>
                    <div className="text-[11px] text-gray-400 mb-2">Quizzes completed this week</div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-3/4" />
                    </div>
                  </div>
                  <div className="bg-primary rounded-xl p-4 mb-4">
                    <div className="text-[11px] text-green-200 font-medium mb-1">Average Score</div>
                    <div className="text-2xl font-bold text-white">88%</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">LEARNING PROFILE</div>
                    <div className="flex flex-col gap-2.5">
                      {LEARNING_PROFILE.map((item) => (
                        <div key={item.topic} className="flex items-center gap-2">
                          {item.done ? (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                              <X className="w-3 h-3 text-red-500" />
                            </div>
                          )}
                          <span className="text-[12px] text-gray-700">{item.topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 w-full h-1 bg-red-200 rounded-full">
                      <div className="h-full bg-red-500 rounded-full w-1/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
