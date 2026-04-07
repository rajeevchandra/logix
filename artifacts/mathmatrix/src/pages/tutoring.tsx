import React, { useState } from "react";
import { Star, Video, Users, Clock } from "lucide-react";

const DAYS = [
  { day: "Thu", date: "2", active: true },
  { day: "Fri", date: "3", active: false },
  { day: "Sat", date: "4", active: false },
  { day: "Sun", date: "5", active: false },
  { day: "Mon", date: "6", active: false },
  { day: "Tue", date: "7", active: false },
  { day: "Wed", date: "8", active: false },
];

const TIME_SLOTS = [
  { time: "09:00 AM", tutor: "Dr. Sarah Chen", available: true },
  { time: "10:00 AM", tutor: "Unavailable", available: false },
  { time: "11:00 AM", tutor: "Prof. Michael Brown", available: true },
  { time: "12:00 PM", tutor: "Dr. Emily Wang", available: true },
];

const TUTORS = [
  {
    initials: "SC",
    name: "Dr. Sarah Chen",
    subject: "Calculus & Advanced Math",
    rating: 4.9,
    reviews: 223,
    available: true,
    bg: "bg-red-200 text-red-800",
  },
  {
    initials: "MB",
    name: "Prof. Michael Brown",
    subject: "Algebra & Geometry",
    rating: 3.8,
    reviews: 103,
    available: true,
    bg: "bg-amber-200 text-amber-800",
  },
  {
    initials: "EW",
    name: "Dr. Emily Wang",
    subject: "Statistics & Probability",
    rating: 3.5,
    reviews: 312,
    available: true,
    bg: "bg-indigo-200 text-indigo-800",
  },
];

const SUBJECT_TABS = ["Algebra", "Geometry", "Pre-Calculus", "Calculus"];

export function Tutoring() {
  const [activeTab, setActiveTab] = useState("Algebra");
  const [activeDay, setActiveDay] = useState("2");

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto px-8 pt-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-1.5">Live Tutoring</h1>
        <p className="text-gray-500 text-[14px] mb-8">Connect with expert tutors for personalized learning sessions</p>

        <div className="grid grid-cols-3 gap-5 mb-8">
          {[
            { icon: Video, label: "Sessions This Week", value: "5", key: "sessions" },
            { icon: Users, label: "Available Tutors", value: "48", key: "tutors" },
            { icon: Clock, label: "Avg Session Duration", value: "48m", key: "duration" },
          ].map(({ icon: Icon, label, value, key }) => (
            <div key={key} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-[12px] text-gray-500">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[15px] font-bold text-gray-900">Schedule Session</h2>
            <div className="flex gap-2">
              {SUBJECT_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-colors ${
                    activeTab === tab ? "bg-primary text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            {DAYS.map((d) => (
              <button
                key={d.date}
                onClick={() => setActiveDay(d.date)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl transition-colors ${
                  activeDay === d.date ? "bg-primary text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="text-[11px] font-medium opacity-80">{d.day}</span>
                <span className="text-[16px] font-bold">{d.date}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {TIME_SLOTS.map((slot) => (
              <div
                key={slot.time}
                className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                  slot.available
                    ? "border-gray-200 bg-white hover:border-primary/30"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <div>
                  <div className="text-[14px] font-semibold text-gray-900">{slot.time}</div>
                  <div className={`text-[12px] mt-0.5 ${slot.available ? "text-gray-500" : "text-gray-400"}`}>
                    {slot.tutor}
                  </div>
                </div>
                {slot.available && (
                  <button className="border border-primary text-primary text-[13px] font-medium px-4 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Join Session
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-[15px] font-bold text-gray-900 mb-5">Featured Tutors</h2>
          <div className="grid grid-cols-2 gap-4">
            {TUTORS.map((tutor) => (
              <div key={tutor.name} className="border border-gray-200 rounded-xl p-4 flex items-start gap-3 hover:border-gray-300 transition-colors">
                <div className={`${tutor.bg} w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0`}>
                  {tutor.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    {tutor.available && (
                      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                    )}
                    <div className="text-[13px] font-semibold text-gray-900">{tutor.name}</div>
                  </div>
                  <div className="text-[12px] text-gray-500 mb-2">{tutor.subject}</div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[12px]">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-medium text-gray-700">{tutor.rating}</span>
                      <span className="text-gray-400">R. {tutor.reviews}</span>
                    </div>
                    <div className="flex gap-2">
                      {tutor.available && (
                        <span className="text-[11px] text-primary border border-primary/30 bg-green-50 px-2 py-0.5 rounded-full">
                          Available Now
                        </span>
                      )}
                      <button className="text-[11px] text-gray-600 border border-gray-200 px-2 py-0.5 rounded-full hover:border-gray-400 transition-colors">
                        📅 Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Study With The Community</h2>
            <p className="text-green-100 text-[14px] max-w-sm">
              Join over 15,000 students in live derivation sessions. Ask questions in real-time and solve problems together.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {["SC", "MJ", "JD", "+12k"].map((u, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${
                  i === 0 ? "bg-red-400 text-white" :
                  i === 1 ? "bg-blue-400 text-white" :
                  i === 2 ? "bg-amber-400 text-white" :
                  "bg-white/20 text-white"
                }`}>{u}</div>
              ))}
            </div>
            <button className="mt-5 bg-white text-primary font-semibold text-[13px] px-6 py-2 rounded-xl hover:bg-green-50 transition-colors">
              EXPLORE
            </button>
          </div>
          <div className="w-64 bg-white/20 backdrop-blur-sm rounded-2xl p-4 hidden md:block">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-white text-[12px] font-medium">Live Chat</span>
            </div>
            {[
              { user: "Alex_M", msg: "Wait, why does the derivative of ln(x) work that way?" },
              { user: "MathWiz", msg: "Think about the chain rule application on e^y = x..." },
            ].map((m) => (
              <div key={m.user} className="bg-white/10 rounded-lg p-2.5 mb-2">
                <div className="text-white/60 text-[10px] mb-1">{m.user}</div>
                <div className="text-white text-[11px] leading-snug">{m.msg}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
