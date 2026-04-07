import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, Infinity } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4">
        {/* Radial gradient overlay from center */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-2">
            <SparklesIcon className="w-4 h-4" />
            <span>New Advanced Calculus Modules Available</span>
          </div>
          
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-white leading-tight">
            Master the Language of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              The Universe
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premium cinematic learning platform for advanced mathematics. Deep-dive video lessons, interactive problem solving, and world-class tutoring.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/videos">
              <Button size="lg" className="h-[52px] px-8 rounded-full text-[15px] font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-all">
                Start Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tutoring">
              <Button size="lg" variant="outline" className="h-[52px] px-8 rounded-full text-[15px] font-semibold bg-card/50 text-white border-white/10 hover:bg-white/5 backdrop-blur-md">
                Find a Tutor
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-card border-t border-white/5 -z-10" />
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<PlayCircle className="w-8 h-8 text-primary" />}
              title="Cinematic Lessons"
              description="High-fidelity video modules breaking down complex theorems with stunning visual derivations."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Expert Tutoring"
              description="1-on-1 sessions with mathematicians and top-tier educators tailored to your learning pace."
            />
            <FeatureCard 
              icon={<Infinity className="w-8 h-8 text-primary" />}
              title="Infinite Practice"
              description="Algorithmic problem sets that adapt to your skill level, ensuring absolute mastery."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-[15px] text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
