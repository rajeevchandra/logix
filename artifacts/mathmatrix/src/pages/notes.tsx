import React, { useState } from "react";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Download, FileText, BookOpen } from "lucide-react";

const SUBJECT_TABS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

const NOTES_BY_SUBJECT: Record<string, { unit: string; title: string; desc: string; pages: string; size: string; date: string; type: string }[]> = {
  Algebra: [
    { unit: "Unit 1", title: "Linear Foundations", desc: "Comprehensive guide covering slope-intercept form, linear equations, and graphing fundamentals.", pages: "24 pages", size: "PDF, 2.1 MB", date: "Mar 10, 2026", type: "CORE 101" },
    { unit: "Unit 2", title: "Systems & Matrices", desc: "Deep dive into substitution, elimination methods, and matrix operations.", pages: "31 pages", size: "PDF, 3.4 MB", date: "Mar 12, 2026", type: "CORE 101" },
    { unit: "Unit 3", title: "Quadratics & Polynomials", desc: "Factoring, quadratic formula, and graphing parabolas with full worked examples.", pages: "28 pages", size: "PDF, 2.8 MB", date: "Mar 14, 2026", type: "ALGEBRA II" },
    { unit: "Unit 4", title: "Functions & Graphs", desc: "Domain, range, function transformations, and composite functions.", pages: "22 pages", size: "PDF, 2.3 MB", date: "Mar 16, 2026", type: "ALGEBRA II" },
    { unit: "Unit 5", title: "Exponents & Radicals", desc: "This comprehensive study guide covers: Laws of Exponents, Simplifying Radicals, and Exponential Growth.", pages: "26 pages", size: "PDF, 4.2 MB", date: "Mar 16, 2026", type: "ALGEBRA II" },
  ],
  Geometry: [
    { unit: "Unit 1", title: "Euclidean Geometry", desc: "Points, lines, planes, angles, and fundamental geometric proofs.", pages: "30 pages", size: "PDF, 3.1 MB", date: "Mar 10, 2026", type: "CORE 201" },
    { unit: "Unit 2", title: "Triangles & Congruence", desc: "Triangle congruence theorems, similarity, and right triangle trigonometry.", pages: "35 pages", size: "PDF, 3.8 MB", date: "Mar 12, 2026", type: "CORE 201" },
    { unit: "Unit 3", title: "Circles & Area", desc: "Circle theorems, arc length, sector area, and inscribed angles.", pages: "27 pages", size: "PDF, 2.9 MB", date: "Mar 14, 2026", type: "ADV 201" },
  ],
  "Pre-Calculus": [
    { unit: "Unit 1", title: "Trigonometric Functions", desc: "Sine, cosine, tangent — unit circle, identities, and transformations.", pages: "34 pages", size: "PDF, 3.6 MB", date: "Mar 10, 2026", type: "CORE 301" },
    { unit: "Unit 2", title: "Analytic Trigonometry", desc: "Sum/difference formulas, double angle, and solving trig equations.", pages: "28 pages", size: "PDF, 3.0 MB", date: "Mar 12, 2026", type: "CORE 301" },
  ],
  Calculus: [
    { unit: "Unit 1", title: "Limits & Continuity", desc: "Definition of a limit, limit laws, and the formal epsilon-delta approach.", pages: "32 pages", size: "PDF, 3.5 MB", date: "Mar 10, 2026", type: "ADV 401" },
    { unit: "Unit 2", title: "Derivatives", desc: "Definition of the derivative, differentiation rules, and applications.", pages: "40 pages", size: "PDF, 4.8 MB", date: "Mar 12, 2026", type: "ADV 401" },
    { unit: "Unit 3", title: "Integration", desc: "Antiderivatives, Fundamental Theorem of Calculus, and integration techniques.", pages: "44 pages", size: "PDF, 5.2 MB", date: "Mar 14, 2026", type: "ADV 401" },
  ],
};

export function Notes() {
  const [activeTab, setActiveTab] = useState("Algebra");
  const notes = NOTES_BY_SUBJECT[activeTab] || [];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <div className="flex gap-10">
          <ResourceSidebar />
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Study Notes</h1>
            <p className="text-gray-500 text-[14px] mb-8">
              Curated, easy-to-digest summaries of complex topics for quick revision and deep review.
            </p>

            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-6">
                {SUBJECT_TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[14px] font-medium pb-3 border-b-2 transition-colors ${
                      activeTab === tab ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {notes.map((note) => (
                <div key={note.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-14 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <div className="text-center">
                      <BookOpen className="w-6 h-6 text-primary mx-auto mb-0.5" />
                      <div className="text-[9px] font-bold text-primary">MATH</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{note.type}</span>
                      <span className="text-[11px] text-gray-400">{note.unit}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">{note.title}</h3>
                    <p className="text-[13px] text-gray-500 mb-3 leading-relaxed">{note.desc}</p>
                    <div className="flex items-center gap-4 text-[12px] text-gray-400">
                      <div className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {note.pages}</div>
                      <span>•</span>
                      <span>Updated: {note.date}</span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-[12px] font-medium text-gray-500 mb-2">Worksheet</div>
                    <div className="text-[11px] text-gray-400 mb-3">{note.size}</div>
                    <button className="flex items-center gap-1.5 bg-primary/10 text-primary text-[12px] font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                      <Download className="w-3.5 h-3.5" /> Download
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
