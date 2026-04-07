import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Maximize, Clock, Bookmark, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const VIDEOS = [
  { id: 1, title: "Fundamentals of Tensor Calculus", subject: "Calculus", duration: "45:20", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { id: 2, title: "Eigenvectors and Eigenvalues", subject: "Linear Algebra", duration: "32:15", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { id: 3, title: "Non-Euclidean Geometry Intro", subject: "Geometry", duration: "28:40", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { id: 4, title: "Bayesian Inference Models", subject: "Statistics", duration: "51:10", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
];

export function Videos() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Math Video Lessons</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Deep dive into complex mathematical concepts through cinematic educational modules and expert-led derivations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured Video */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden bg-card border border-border group"
          >
            {/* Mock Video Player Surface */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto backdrop-blur-md border border-primary/30 text-primary group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div className="text-2xl font-semibold opacity-80">Stokes' Theorem Demystified</div>
              </div>
            </div>

            {/* Video Controls (Glassmorphism) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/60 backdrop-blur-xl border-t border-white/10 flex flex-col gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                <div className="h-full bg-primary w-1/3 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-primary transition-colors"><Pause className="w-5 h-5" /></button>
                  <button className="text-white hover:text-primary transition-colors"><Volume2 className="w-5 h-5" /></button>
                  <span className="font-mono opacity-80">14:20 / 42:00</span>
                </div>
                <button className="text-white hover:text-primary transition-colors"><Maximize className="w-5 h-5" /></button>
              </div>
            </div>
          </motion.div>

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Stokes' Theorem Demystified</h2>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">Calculus</Badge>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 42:00</span>
                <span>•</span>
                <span>Dr. Elena Rostova</span>
              </div>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            An intuitive geometric approach to understanding Stokes' Theorem, connecting macroscopic circulation to microscopic curl across bounded surfaces in 3D space.
          </p>
        </div>

        {/* Vertical Stack (Up Next) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">Up Next</h3>
            <Button variant="link" className="text-sm text-primary p-0 h-auto">View All</Button>
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto pr-2 pb-8">
            {VIDEOS.map((video, idx) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-3 p-3 rounded-xl hover:bg-card border border-transparent hover:border-border transition-all cursor-pointer group"
              >
                <div className="relative w-32 aspect-video bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 text-[10px] font-mono text-white rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1.5 flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                  <Badge variant="outline" className={`w-fit text-[10px] px-1.5 py-0 h-4 ${video.color}`}>
                    {video.subject}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
