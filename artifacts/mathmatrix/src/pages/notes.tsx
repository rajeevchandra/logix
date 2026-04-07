import React, { useState } from "react";
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
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Study Notes</h1>
            <p className="text-gray-500 text-[14px] mb-8">
              Curated, easy-to-digest summaries of complex topics for quick revision and deep review.
            </p>

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
