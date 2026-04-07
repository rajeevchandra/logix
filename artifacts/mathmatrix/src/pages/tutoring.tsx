import React from "react";
import { motion } from "framer-motion";
import { Calendar, Star, GraduationCap, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Expert Tutoring</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Book 1-on-1 sessions with world-class mathematicians. Master difficult concepts with personalized guidance.
          </p>
        </div>
        <Button size="lg" className="shadow-[0_0_15px_-5px_hsl(var(--primary))]">
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
            className="flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Avatar className="w-16 h-16 border-2 border-background shadow-md">
                  <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">{tutor.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1 bg-background/50 px-2 py-1 rounded-md text-sm border border-border">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{tutor.rating}</span>
                  <span className="text-muted-foreground">({tutor.reviews})</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{tutor.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-4">
                <GraduationCap className="w-4 h-4" /> {tutor.title}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tutor.subjects.map(sub => (
                  <Badge key={sub} variant="outline" className={tutor.color}>
                    {sub}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-background/50 border-t border-border flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Rate</span>
                <span className="font-bold">{tutor.hourly}</span>
              </div>
              <Button variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                View Profile
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
