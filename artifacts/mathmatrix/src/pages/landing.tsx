import React from "react";
import { Link } from "wouter";
import { ArrowRight, Play, BookOpen, Brain, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Adaptive Quizzes",
    desc: "Dynamic assessments that adjust difficulty based on your performance to bridge knowledge gaps.",
    align: "right",
  },
  {
    icon: Play,
    title: "Video Lessons",
    desc: "High-definition explanations from expert mathematicians focused on conceptual clarity.",
    align: "left",
  },
  {
    icon: BookOpen,
    title: "Structured Notes",
    desc: "Curated, easy-to-digest summaries of complex topics for quick revision and deep review.",
    align: "right",
  },
  {
    icon: Brain,
    title: "AI Flashcards",
    desc: "Spaced-repetition systems designed to lock formulas and concepts into your permanent memory.",
    align: "left",
  },
];

const TESTIMONIALS = [
  {
    quote: "The way Logix breaks down Integral Calculus feels like reading a premium textbook. I finally understand the 'why' behind the formulas, not just the 'how'.",
    name: "Ethan Rivers",
    grade: "Senior Year",
    initials: "ER",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    quote: "I used to struggle with Linear Algebra visualizations. The interactive geometric tools here are game-changers for my homework.",
    name: "Maya Chen",
    grade: "10th Grade",
    initials: "MC",
    bg: "bg-green-100 text-green-700",
  },
  {
    quote: "The Lightbulb Moments sections helped me master Trigonometry identities in just one weekend. Logix is lightyears ahead of my classroom portal.",
    name: "Julian Vance",
    grade: "Junior Year",
    initials: "JV",
    bg: "bg-purple-100 text-purple-700",
  },
];

const ACCESSIBILITY = [
  {
    title: "Dyslexic-Friendly Fonts",
    desc: "Toggle specialized typefaces designed with heavy bases to eliminate visual confusion and improve reading speed.",
    icon: "📖",
  },
  {
    title: "Audio & Video Support",
    desc: "Full screen-reader optimization for complex formulas and high-fidelity video transcripts that sync with derivations.",
    icon: "🔊",
  },
  {
    title: "Customizable Interface",
    desc: "Personalize your workspace with adjustable font sizes and high-contrast color modes.",
    icon: "🎨",
  },
  {
    title: "Reading Enhancement",
    desc: "Clear fonts and well-spaced layouts facilitate deep understanding and reduce cognitive load.",
    icon: "✨",
  },
  {
    title: "Multi-sensory Sync",
    desc: "Synchronized audio, visual, and interactive elements to support multiple learning styles simultaneously.",
    icon: "🧠",
  },
];

export function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white to-white" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-50 text-primary border border-green-100 text-[13px] font-medium px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Personalized Math Learning
            </div>
            <h1 className="text-[56px] font-extrabold text-gray-900 leading-[1.1] mb-6">
              Master<br/>
              <span className="text-primary">Mathematics</span><br/>
              with Precision
            </h1>
            <p className="text-[17px] text-gray-500 leading-relaxed mb-10 max-w-lg">
              Elevate your understanding with interactive quizzes, cinematic video lessons, comprehensive notes, and intelligent flashcards designed for mastery.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-[15px] px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-[15px] px-6 py-3 rounded-xl hover:border-gray-300 transition-colors">
                View Features
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-[1200px] mx-auto px-6 mt-20">
          <div className="flex items-center gap-20">
            {[
              { value: "50k+", label: "Active Students" },
              { value: "10k+", label: "Math Resources" },
              { value: "98%", label: "Mastery Rate" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-[14px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-gray-900 mb-4">Powerful Tools for Every Learner</h2>
            <p className="text-[16px] text-gray-500 max-w-lg mx-auto">
              Tailored resources that adapt to your unique learning style, ensuring deep comprehension and long-term retention.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {FEATURES.map((feature, i) => (
              <div key={feature.title} className={`flex items-center gap-16 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className={`inline-flex w-14 h-14 rounded-2xl items-center justify-center mb-5 ${i % 2 === 0 ? "bg-primary/10 ml-auto" : "bg-primary/10"}`}>
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed max-w-xs ml-auto">{feature.desc}</p>
                </div>
                <div className="flex-1 h-56 bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {i === 0 ? "📊" : i === 1 ? "🎬" : i === 2 ? "📝" : "🃏"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[40px] font-extrabold text-gray-900 mb-3">Our Curriculum</h2>
          <p className="text-[16px] text-gray-500 mb-12 max-w-md">
            Comprehensive curriculum aligned with core standards, providing students with the tools to excel in the classroom and beyond.
          </p>

          <div className="grid grid-cols-4 gap-5">
            {[
              { tag: "CORE 101", title: "Algebra",      sub: "Linear systems &\nabstractions" },
              { tag: "ADV 201",  title: "Geometry",     sub: "Spatial logic & proof\nsystems" },
              { tag: "CORE 301", title: "Precalculus",  sub: "Function theory &\ntrigonometry" },
              { tag: "ADV 401",  title: "Calculus",     sub: "Differentiation & rate\nanalysis" },
            ].map(c => (
              <div key={c.title} className="rounded-3xl p-7 flex flex-col" style={{ background: "#163d2e", minHeight: 260 }}>
                <div className="mb-auto">
                  <span className="inline-block bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full mb-8 tracking-wide">{c.tag}</span>
                </div>
                <div>
                  <h3 className="text-[28px] font-extrabold text-white mb-2">{c.title}</h3>
                  <p className="text-[13px] text-green-200/80 leading-snug whitespace-pre-line">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section id="accessibility" className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-4">
            <div className="inline-block text-[11px] font-bold text-primary uppercase tracking-widest border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-6">
              ACCESSIBILITY FIRST
            </div>
            <h2 className="text-[36px] font-bold text-gray-900 mb-4">Education for Every Mind</h2>
            <p className="text-[16px] text-gray-500 max-w-lg mx-auto">
              Accessibility isn't an afterthought at Logix. We've built a learning environment that adapts to your unique cognitive needs.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-14">
            {ACCESSIBILITY.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="text-[12px] font-semibold text-gray-700 mb-3">Contrast Level</div>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-primary rounded-full w-3/4" />
              </div>
              <div className="text-right text-[12px] font-bold text-gray-900">75%</div>
              <div className="text-[12px] font-semibold text-gray-700 mt-4 mb-2">Font Size</div>
              <div className="flex gap-2">
                {["A", "A", "A"].map((a, i) => (
                  <div key={i} className={`border rounded-lg px-2 py-1 font-bold cursor-pointer transition-colors ${i === 1 ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-gray-400"}`} style={{ fontSize: 10 + i * 4 }}>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 mb-3">Voices of Logix</h2>
          <p className="text-[16px] text-gray-500 mb-14 max-w-lg mx-auto">
            Join thousands of students mastering complex concepts with the Logix Learning System
          </p>
          <div className="grid grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 text-left hover:shadow-md transition-shadow">
                <p className="text-[14px] text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-[12px] font-bold`}>{t.initials}</div>
                  <div>
                    <div className="text-[13px] font-bold text-gray-900">{t.name}</div>
                    <div className="text-[12px] text-gray-500">{t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1200px] mx-auto">
          <div
            className="rounded-3xl px-10 py-20 text-center"
            style={{ background: "linear-gradient(135deg, #0d2e20 0%, #0f3828 50%, #0a1e2e 100%)" }}
          >
            <h2 className="text-[40px] font-extrabold text-white mb-4">Ready to Elevate Your Math Skills?</h2>
            <p className="text-[16px] text-gray-300 mb-10 max-w-xl mx-auto">
              Join thousands of students achieving mastery through our structured learning platform. Sign up today and get your first week free.
            </p>
            <Link href="/signup" className="inline-block bg-primary text-white font-bold text-[16px] px-10 py-4 rounded-full hover:bg-primary/90 transition-colors">
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

