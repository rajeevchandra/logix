import React from "react";
import { motion } from "framer-motion";
import { Calendar, Star, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TUTORS = [
  {
    id: 1,
    name: "Dr. Arthur Penrose",
    title: "Ph.D. Mathematics, Cambridge",
    subjects: ["Advanced Calculus", "Topology"],
    rating: 4.9,
    reviews: 124,
    hourly: "$80/hr",
    avatar: "AP",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: 2,
    name: "Sarah Lin",
    title: "M.S. Applied Math, MIT",
    subjects: ["Linear Algebra", "Machine Learning"],
    rating: 4.8,
    reviews: 89,
    hourly: "$65/hr",
    avatar: "SL",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 3,
    name: "Prof. Marcus Vance",
    title: "Former IMO Gold Medalist",
    subjects: ["Number Theory", "Combinatorics"],
    rating: 5.0,
    reviews: 210,
    hourly: "$120/hr",
    avatar: "MV",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

export function Tutoring() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Expert Tutoring</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Book 1-on-1 sessions with world-class mathematicians. Master difficult concepts with personalized guidance.
            </p>
          </div>
          <Button size="lg" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-semibold shadow-[0_0_20px_-5px_hsl(var(--primary))]">
            <Calendar className="mr-2 w-5 h-5" /> Schedule a Session
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TUTORS.map((tutor, idx) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Avatar className="w-[72px] h-[72px] rounded-2xl border border-white/10 shadow-lg bg-background">
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold rounded-2xl">{tutor.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-white/5 shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-white">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{tutor.name}</h3>
                <p className="text-[15px] text-muted-foreground flex items-center gap-2 mb-6">
                  <GraduationCap className="w-4 h-4" /> {tutor.title}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {tutor.subjects.map(sub => (
                    <Badge key={sub} variant="outline" className={`rounded-md px-2.5 py-1 text-xs font-medium border-white/10 bg-white/5 text-white/90`}>
                      {sub}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-background/50 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold mb-0.5">Session Rate</span>
                  <span className="font-bold text-lg text-white">{tutor.hourly}</span>
                </div>
                <Button variant="outline" className="rounded-full px-6 bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white hover:border-primary transition-colors">
                  View Profile
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
