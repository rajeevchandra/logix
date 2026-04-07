import React, { useState } from "react";
import { Link } from "wouter";
import { ResourceSidebar } from "@/components/layout/resource-sidebar";
import { Check, X, Clock, ChevronRight, ArrowLeft, Trophy } from "lucide-react";

// ─── Quiz data matching the Figma PDF ────────────────────────────────────────

const ALGEBRA_QUIZZES: Record<string, {
  unit: string;
  quizzes: { title: string; level: string; qs: number; mins: number; best: number }[];
}[]> = {
  Algebra: [
    {
      unit: "Unit 1: Linear Foundations",
      quizzes: [
        { title: "Solving for X", level: "ALGEBRA I · INTERMEDIATE", qs: 3, mins: 10, best: 95 },
        { title: "Slope & Intercepts", level: "ALGEBRA I · INTERMEDIATE", qs: 20, mins: 25, best: 100 },
        { title: "Linear Inequalities", level: "ALGEBRA I · INTERMEDIATE", qs: 20, mins: 25, best: 90 },
      ],
    },
    {
      unit: "Unit 2: Systems & Matrices",
      quizzes: [
        { title: "Substitution vs. Elimination", level: "ALGEBRA I · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Matrix Operations", level: "ALGEBRA I · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Real-world Systems", level: "ALGEBRA I · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
    {
      unit: "Unit 3: Quadratics & Polynomials",
      quizzes: [
        { title: "Factoring Basics", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "The Quadratic Formula", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Graphing Parabolas", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
    {
      unit: "Unit 4: Functions & Graphs",
      quizzes: [
        { title: "Domain & Range", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Function Transformations", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Composite Functions", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
    {
      unit: "Unit 5: Exponents & Radicals",
      quizzes: [
        { title: "Laws of Exponents", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Simplifying Radicals", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Exponential Growth", level: "ALGEBRA II · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
  ],
  Geometry: [
    {
      unit: "Unit 1: Points, Lines, & Angles",
      quizzes: [
        { title: "Segment & Angle Addition", level: "GEOMETRY · INTERMEDIATE", qs: 5, mins: 10, best: 95 },
        { title: "Parallel Lines & Transversals", level: "GEOMETRY · INTERMEDIATE", qs: 20, mins: 25, best: 100 },
        { title: "Intro to Logic & Proofs", level: "GEOMETRY · INTERMEDIATE", qs: 20, mins: 25, best: 90 },
      ],
    },
    {
      unit: "Unit 2: Congruence & Triangles",
      quizzes: [
        { title: "SSS, SAS, & ASA Criteria", level: "GEOMETRY · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Isosceles & Equilateral Logic", level: "GEOMETRY · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Coordinate Triangle Proofs", level: "GEOMETRY · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
  ],
  "Pre-Calculus": [
    {
      unit: "Unit 1: Trigonometric Functions",
      quizzes: [
        { title: "The Unit Circle & Radians", level: "PRE-CALC · INTERMEDIATE", qs: 5, mins: 10, best: 95 },
        { title: "Sine/Cosine Graphs", level: "PRE-CALC · INTERMEDIATE", qs: 20, mins: 25, best: 100 },
        { title: "Inverse Trig Functions", level: "PRE-CALC · INTERMEDIATE", qs: 20, mins: 25, best: 90 },
      ],
    },
    {
      unit: "Unit 2: Analytic Trigonometry",
      quizzes: [
        { title: "Verifying Identities", level: "PRE-CALC · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Sum & Difference Formulas", level: "PRE-CALC · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Solving Trig Equations", level: "PRE-CALC · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
  ],
  Calculus: [
    {
      unit: "Unit 1: Differentiation Rules",
      quizzes: [
        { title: "Power, Product, & Quotient Rules", level: "CALC · INTERMEDIATE", qs: 5, mins: 10, best: 95 },
        { title: "The Chain Rule Masterclass", level: "CALC · INTERMEDIATE", qs: 20, mins: 25, best: 100 },
        { title: "Implicit Differentiation", level: "CALC · INTERMEDIATE", qs: 20, mins: 25, best: 90 },
      ],
    },
    {
      unit: "Unit 2: Applications of Derivatives",
      quizzes: [
        { title: "Related Rates Problems", level: "CALC · INTERMEDIATE", qs: 20, mins: 25, best: 85 },
        { title: "Optimization & Max/Min", level: "CALC · INTERMEDIATE", qs: 20, mins: 25, best: 97 },
        { title: "Mean Value Theorem", level: "CALC · INTERMEDIATE", qs: 20, mins: 25, best: 92 },
      ],
    },
  ],
};

// ─── The quiz wizard questions (from the PDF) ─────────────────────────────────

interface Question {
  subject: string;
  difficulty: string;
  text: string;
  options: string[];
  correct: number;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    subject: "Algebra",
    difficulty: "Beginner",
    text: "Solve: X + 8 = 15",
    options: ["A)  5", "B)  7", "C)  23", "D)  8"],
    correct: 1,
  },
  {
    subject: "Algebra",
    difficulty: "Intermediate",
    text: "Solve: 5x + 2 = 3x + 12",
    options: ["A)  5", "B)  2", "C)  7", "D)  10"],
    correct: 0,
  },
  {
    subject: "Algebra",
    difficulty: "Advanced",
    text: "Solve: 6(x + 4) = 18",
    options: ["A)  9", "B)  −1", "C)  1", "D)  4"],
    correct: 1,
  },
];

const CHALLENGES = [
  { title: "Mental Math Sprint", duration: "5 MIN", color: "bg-purple-100 text-purple-600", icon: "⚡" },
  { title: "Angle Hunter", duration: "4 MIN", color: "bg-blue-100 text-blue-600", icon: "△" },
  { title: "Function Matcher", duration: "8 MIN", color: "bg-violet-100 text-violet-600", icon: "📊" },
];

const LEARNING_PROFILE = [
  { topic: "Linear Foundations", done: true },
  { topic: "Systems & Matrices", done: true },
  { topic: "Quadratics & Polynomials", done: false },
];

const SUBJECT_TABS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

// ─── Quiz Wizard ──────────────────────────────────────────────────────────────

function QuizWizard({ quizTitle, onExit }: { quizTitle: string; onExit: () => void }) {
  const [step, setStep] = useState<"question" | "result">("question");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUIZ_QUESTIONS.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);

  const question = QUIZ_QUESTIONS[current];
  const isLast = current === QUIZ_QUESTIONS.length - 1;
  const score = answers.filter((a, i) => a === QUIZ_QUESTIONS[i].correct).length;
  const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  function handleOptionClick(idx: number) {
    if (showFeedback) return;
    setSelected(idx);
  }

  function handleNext() {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setSelected(null);
      if (isLast) {
        setStep("result");
      } else {
        setCurrent(c => c + 1);
      }
    }, 900);
  }

  if (step === "result") {
    const finalScore = answers.filter((a, i) => a === QUIZ_QUESTIONS[i].correct).length;
    const finalPct = Math.round((finalScore / QUIZ_QUESTIONS.length) * 100);

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wide">Algebra</span>
            <span className="text-[14px] font-semibold text-gray-700">Results</span>
          </div>
          <button onClick={onExit} className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-700 transition-colors">
            Exit <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results body */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Quiz Statistics</h2>
                <p className="text-[14px] text-gray-500">Current Score</p>
              </div>
            </div>

            {/* Score display */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center mb-6">
              <div className="text-[56px] font-extrabold text-gray-900 leading-none mb-2">
                {finalScore}<span className="text-[28px] text-gray-400">/{QUIZ_QUESTIONS.length}</span>
              </div>
              <div className="text-[16px] text-gray-500 mb-5">Questions Correct</div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${finalPct}%` }}
                />
              </div>
              <div className="text-[14px] font-bold text-gray-700">{finalPct}% Score</div>
            </div>

            {/* Per-question review */}
            <div className="space-y-3 mb-8">
              {QUIZ_QUESTIONS.map((q, i) => {
                const userAnswer = answers[i];
                const correct = userAnswer === q.correct;
                return (
                  <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${correct ? "border-green-200 bg-green-50" : "border-red-100 bg-red-50"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${correct ? "bg-primary" : "bg-red-400"}`}>
                      {correct ? <Check className="w-3.5 h-3.5 text-white" /> : <X className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-gray-900 mb-1">{q.text}</div>
                      <div className="text-[12px] text-gray-500">
                        Your answer: <span className={correct ? "text-primary font-medium" : "text-red-500 font-medium"}>
                          {userAnswer !== null ? q.options[userAnswer] : "—"}
                        </span>
                        {!correct && (
                          <span className="ml-2 text-primary font-medium">✓ {q.options[q.correct]}</span>
                        )}
                      </div>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${correct ? "bg-primary/10 text-primary" : "bg-red-100 text-red-600"}`}>
                      {correct ? "Correct" : "Wrong"}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setCurrent(0); setAnswers(Array(QUIZ_QUESTIONS.length).fill(null)); setSelected(null); setStep("question"); }}
                className="flex-1 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Retry Quiz
              </button>
              <button
                onClick={onExit}
                className="flex-1 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Back to Quizzes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const optionLetters = ["A", "B", "C", "D"];
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wide">{question.subject}</span>
          <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{question.difficulty}</span>
        </div>
        <button onClick={onExit} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-100">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${((current + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Question body */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-lg">
          {/* Question counter */}
          <div className="text-[12px] font-medium text-gray-400 text-center mb-4 uppercase tracking-wider">
            Question {current + 1} of {QUIZ_QUESTIONS.length}
          </div>

          {/* Question text */}
          <h2 className="text-[28px] font-bold text-gray-900 text-center mb-10 leading-snug">
            {question.text}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-10">
            {question.options.map((opt, idx) => {
              let stateClass = "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50";
              if (selected === idx) {
                if (showFeedback) {
                  stateClass = idx === question.correct
                    ? "border-green-400 bg-green-50"
                    : "border-red-300 bg-red-50";
                } else {
                  stateClass = "border-primary bg-primary/5";
                }
              } else if (showFeedback && idx === question.correct) {
                stateClass = "border-green-400 bg-green-50";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-2 text-left transition-all duration-150 ${stateClass}`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-[13px] transition-colors ${
                    selected === idx && !showFeedback ? "border-primary bg-primary text-white" :
                    selected === idx && showFeedback && idx === question.correct ? "border-green-500 bg-green-500 text-white" :
                    selected === idx && showFeedback ? "border-red-400 bg-red-400 text-white" :
                    showFeedback && idx === question.correct ? "border-green-500 bg-green-500 text-white" :
                    "border-gray-300 text-gray-500"
                  }`}>
                    {optionLetters[idx]}
                  </div>
                  <span className={`text-[15px] font-medium ${selected === idx ? "text-gray-900" : "text-gray-700"}`}>
                    {opt.replace(/^[A-D]\)\s+/, "")}
                  </span>
                  {showFeedback && idx === question.correct && (
                    <Check className="w-4 h-4 text-green-500 ml-auto shrink-0" />
                  )}
                  {showFeedback && selected === idx && idx !== question.correct && (
                    <X className="w-4 h-4 text-red-500 ml-auto shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={handleNext}
            disabled={selected === null}
            className={`w-full py-4 rounded-2xl font-semibold text-[15px] transition-all ${
              selected !== null
                ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "Done!" : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Quizzes Page ────────────────────────────────────────────────────────

export function Quizzes() {
  const [activeTab, setActiveTab] = useState("Algebra");
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  const units = ALGEBRA_QUIZZES[activeTab] || [];

  return (
    <>
      {activeQuiz && (
        <QuizWizard quizTitle={activeQuiz} onExit={() => setActiveQuiz(null)} />
      )}

      <div className="bg-white min-h-screen pb-20">
        <div className="max-w-[1440px] mx-auto px-8 pt-10">
          <div className="flex gap-10">
            <ResourceSidebar />

            <div className="flex-1 min-w-0">
              <div className="flex gap-6">
                <div className="flex-1 min-w-0">
                  {/* Hero card */}
                  <div className="bg-primary rounded-2xl p-8 mb-8">
                    <h1 className="text-2xl font-bold text-white mb-3">Knowledge Assessment</h1>
                    <p className="text-green-100 text-[14px] leading-relaxed max-w-md">
                      Test your understanding of recent topics with interactive quizzes and track your progress.
                      Push your boundaries and achieve mastery.
                    </p>
                  </div>

                  {/* Daily Challenges */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-[15px] font-bold text-gray-900">Daily Challenges</h2>
                      <span className="text-[13px] text-primary font-medium">Resets in 14h 22m</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {CHALLENGES.map((c) => (
                        <button
                          key={c.title}
                          onClick={() => setActiveQuiz(c.title)}
                          className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left"
                        >
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
                          <div className="text-[12px] text-primary font-medium mt-1">Start Quiz →</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject tabs */}
                  <div className="border-b border-gray-200 mb-6">
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

                  {/* Quiz units */}
                  <div className="flex flex-col gap-8">
                    {units.map(section => (
                      <div key={section.unit}>
                        <h3 className="text-[13px] font-bold text-gray-900 mb-3 uppercase tracking-wide">{section.unit}</h3>
                        <div className="flex flex-col gap-2">
                          {section.quizzes.map(quiz => (
                            <div key={quiz.title} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                              <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-0.5">{quiz.level}</div>
                                <div className="text-[14px] font-semibold text-gray-900">{quiz.title}</div>
                                <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400">
                                  <span>{quiz.qs} Qs</span>
                                  <span>•</span>
                                  <span>{quiz.mins} mins</span>
                                  <span>•</span>
                                  <span className="text-primary font-medium">Best: {quiz.best}%</span>
                                </div>
                              </div>
                              <button
                                onClick={() => setActiveQuiz(quiz.title)}
                                className="ml-6 bg-primary/10 text-primary text-[13px] font-semibold px-4 py-2 rounded-xl hover:bg-primary/20 transition-colors flex items-center gap-1.5 shrink-0"
                              >
                                Start Quiz <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytics sidebar */}
                <div className="w-[240px] shrink-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-24">
                    <h3 className="text-[14px] font-bold text-gray-900 mb-4">Quiz Analytics</h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] text-gray-600">Weekly Progress</span>
                        <span className="text-[14px] font-bold text-gray-900">12<span className="text-[11px] text-gray-400 font-normal">/15</span></span>
                      </div>
                      <div className="text-[11px] text-gray-400 mb-2">Quizzes completed this week</div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
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
                      <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full w-1/3" />
                      </div>
                    </div>

                    <Link href="/progress" className="mt-5 w-full border border-gray-200 text-gray-600 text-[12px] font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center">
                      View Detailed Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
