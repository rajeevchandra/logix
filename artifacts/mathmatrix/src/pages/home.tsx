import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, PlayCircle, Users, Zap, Sigma, Infinity } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-32 px-4">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4" />
            <span>New Advanced Calculus Modules Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Master the Language of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              The Universe
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premium cinematic learning platform for advanced mathematics. Deep-dive video lessons, interactive problem solving, and world-class tutoring.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/videos">
              <Button size="lg" className="h-12 px-8 text-base font-semibold shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:shadow-[0_0_25px_-5px_hsl(var(--primary))] transition-all">
                Start Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tutoring">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-border hover:bg-accent">
                Find a Tutor
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<PlayCircle className="w-8 h-8 text-blue-400" />}
              title="Cinematic Lessons"
              description="High-fidelity video modules breaking down complex theorems with stunning visual derivations."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-purple-400" />}
              title="Expert Tutoring"
              description="1-on-1 sessions with mathematicians and top-tier educators tailored to your learning pace."
            />
            <FeatureCard 
              icon={<Infinity className="w-8 h-8 text-emerald-400" />}
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
      className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-colors shadow-sm hover:shadow-md"
    >
      <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 border border-border/50">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
