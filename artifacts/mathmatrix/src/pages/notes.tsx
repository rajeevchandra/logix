import React, { useState } from "react";
import { Link } from "wouter";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Download, BookOpen } from "lucide-react";

const SUBJECT_TABS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

interface NoteUnit {
  unit: string;
  title: string;
  desc: string;
  size: string;
  date: string;
}

const NOTES_BY_SUBJECT: Record<string, NoteUnit[]> = {
  Algebra: [
    {
      unit: "Unit 1 - Linear Foundations",
      title: "Linear Foundations",
      desc: "This comprehensive study guide covers the core pillars of algebra: Solving for X, Slope & Intercepts, and Linear Inequalities.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 2 - Systems & Matrices",
      title: "Systems & Matrices",
      desc: "This comprehensive study guide covers: Substitution vs. Elimination, Matrix Operations, and Real-world Systems.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 3 - Quadratics & Polynomials",
      title: "Quadratics & Polynomials",
      desc: "This comprehensive study guide covers: Factoring Basics, The Quadratic Formula, and Graphing Parabolas.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 4 - Functions & Graphs",
      title: "Functions & Graphs",
      desc: "This comprehensive study guide covers: Domain & Range, Function Transformations, and Composite Functions.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 5 - Exponents & Radicals",
      title: "Exponents & Radicals",
      desc: "This comprehensive study guide covers: Laws of Exponents, Simplifying Radicals, and Exponential Growth.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
  ],
  Geometry: [
    {
      unit: "Unit 1 - Points, Lines, & Angles",
      title: "Points, Lines, & Angles",
      desc: "This comprehensive study guide covers: Segment & Angle Addition, Parallel Lines & Transversals, and Intro to Logic & Proofs.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 2 - Congruence & Triangles",
      title: "Congruence & Triangles",
      desc: "This comprehensive study guide covers: SSS, SAS, & ASA Criteria, Isosceles & Equilateral Logic, and Coordinate Triangle Proofs.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 3 - Similarity & Right Triangles",
      title: "Similarity & Right Triangles",
      desc: "This comprehensive study guide covers: Dilation & Scale Factors, Pythagorean Theorem in 3D, and Special Right Triangles.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 4 - Circles & Polygons",
      title: "Circles & Polygons",
      desc: "This comprehensive study guide covers: Arcs, Chords, & Tangents, Interior & Exterior Angles, and Area of Sectors & Segments.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 5 - Volume & Measurement",
      title: "Volume & Measurement",
      desc: "This comprehensive study guide covers: Surface Area of Prisms, Volume of Spheres & Cones, and Density & Modeling Applications.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
  ],
  "Pre-Calculus": [
    {
      unit: "Unit 1 - Trigonometric Functions",
      title: "Trigonometric Functions",
      desc: "This comprehensive study guide covers: The Unit Circle & Radians, Sine/Cosine Graphs, and Inverse Trig Functions.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 2 - Analytic Trigonometry",
      title: "Analytic Trigonometry",
      desc: "This comprehensive study guide covers: Verifying Identities, Sum & Difference Formulas, and Solving Trig Equations.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 3 - Vectors & Polar Curves",
      title: "Vectors & Polar Curves",
      desc: "This comprehensive study guide covers: Vector Dot Products, Polar to Rectangular Conversion, and Graphing Rose & Limacon Curves.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 4 - Conic Sections",
      title: "Conic Sections",
      desc: "This comprehensive study guide covers: Parabolas & Ellipses, Hyperbolas in Standard Form, and Parametric Equations.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 5 - Intro to Limits",
      title: "Intro to Limits",
      desc: "This comprehensive study guide covers: Estimating Limits Graphically, Algebraic Limit Laws, and Continuity vs. Discontinuity.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
  ],
  Calculus: [
    {
      unit: "Unit 1 - Differentiation Rules",
      title: "Differentiation Rules",
      desc: "This comprehensive study guide covers: Power, Product, & Quotient Rules, The Chain Rule Masterclass, and Implicit Differentiation.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 2 - Applications of Derivatives",
      title: "Applications of Derivatives",
      desc: "This comprehensive study guide covers: Related Rates Problems, Optimization & Max/Min, and Mean Value Theorem.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 3 - Integration Foundations",
      title: "Integration Foundations",
      desc: "This comprehensive study guide covers: Riemann Sums & Area, Fundamental Theorem of Calc, and U-Substitution Technique.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 4 - Differential Equations",
      title: "Differential Equations",
      desc: "This comprehensive study guide covers: Slope Fields & Visualizing Flow, Separation of Variables, and Exponential Growth & Decay.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
    {
      unit: "Unit 5 - Applications of Integration",
      title: "Applications of Integration",
      desc: "This comprehensive study guide covers: Area Between Two Curves, Volume: Disk & Washer Methods, and Arc Length & Surface Area.",
      size: "PDF, 4.2 MB",
      date: "Mar 16, 2026",
    },
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
            {/* Hero banner */}
            <div className="bg-primary rounded-2xl px-10 py-10 mb-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 0%, transparent 60%)" }} />
              <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-3">Curriculum Resources</p>
              <h1 className="text-[36px] font-extrabold text-white leading-tight mb-4">Study Notes &amp; Cheat Sheets</h1>
              <p className="text-white/70 text-[15px] max-w-xl leading-relaxed">
                Master complex topics with our library of curated guides. From fundamental theories to advanced
                problem-solving techniques, everything you need is just a click away.
              </p>
            </div>

            {/* Recently Viewed + Quick Tips row */}
            <div className="mb-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Recently Viewed</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-10">
              {/* Recently viewed card */}
              <div className="col-span-2 border border-gray-100 rounded-2xl p-5 flex gap-5 items-start bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-[180px] h-[140px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=280&fit=crop"
                    alt="Multivariable Integrals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <span className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">Calculus</span>
                  <h3 className="text-[20px] font-extrabold text-gray-900 mb-2 leading-tight">
                    Multivariable Integrals &amp; Vector Fields
                  </h3>
                  <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
                    Comprehensive breakdown of Green's Theorem and Stokes' Theorem with visual 3D derivations.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="bg-primary text-white text-[13px] font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download PDF
                    </button>
                    <button className="flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline">
                      <BookOpen className="w-4 h-4" /> Preview
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Tip cards */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#f3f0fc] rounded-2xl p-5 flex-1">
                  <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-2">Quick Tip</p>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-1.5">Euler's Identity Mastery</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed">Short-form cheat sheet for complex analysis fundamentals.</p>
                </div>
                <div className="bg-[#e8f4fd] rounded-2xl p-5 flex-1">
                  <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2">Geometry</p>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-1.5">Non-Euclidean Postulates</h4>
                  <p className="text-[12px] text-gray-500 leading-relaxed">Visual guides for hyperbolic and elliptic spatial proofs.</p>
                </div>
              </div>
            </div>

            {/* Notes Library heading */}
            <h2 className="text-[17px] font-bold text-gray-900 mb-6">Notes Library</h2>

            {/* Subject tabs */}
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

            {/* 2-column note card grid */}
            <div className="grid grid-cols-2 gap-5">
              {notes.map((note) => (
                <div key={note.unit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                  {/* Top: math icon + unit name */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-16 bg-primary/5 border border-primary/15 rounded-xl flex flex-col items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-primary mb-0.5" />
                      <div className="text-[8px] font-bold text-primary tracking-wider">MATHEMATICS</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{note.unit}</div>
                      <h3 className="text-[15px] font-bold text-gray-900 leading-snug">{note.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed">{note.desc}</p>

                  {/* Bottom: download + notes buttons */}
                  <div className="flex items-end justify-between pt-1">
                    <div>
                      <div className="text-[12px] font-semibold text-gray-700 mb-0.5">Worksheet</div>
                      <div className="text-[11px] text-gray-400">{note.size}</div>
                      <div className="text-[11px] text-gray-400">Updated: {note.date}</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1.5 bg-primary text-white text-[12px] font-semibold px-3.5 py-2 rounded-xl hover:bg-primary/90 transition-colors">
                        <Download className="w-3.5 h-3.5" /> Download
                      </button>
                      <button className="text-[12px] font-semibold px-3.5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        Notes
                      </button>
                    </div>
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
