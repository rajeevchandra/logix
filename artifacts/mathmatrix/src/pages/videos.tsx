import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Maximize, Clock, Bookmark, FileText, Compass, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const VIDEOS = [
  { id: 1, title: "Fundamentals of Tensor Calculus", subject: "Calculus", duration: "45:20", color: "bg-primary/20 text-primary border-primary/30" },
  { id: 2, title: "Eigenvectors and Eigenvalues", subject: "Linear Algebra", duration: "32:15", color: "bg-primary/20 text-primary border-primary/30" },
  { id: 3, title: "Non-Euclidean Geometry Intro", subject: "Geometry", duration: "28:40", color: "bg-primary/20 text-primary border-primary/30" },
  { id: 4, title: "Bayesian Inference Models", subject: "Statistics", duration: "51:10", color: "bg-primary/20 text-primary border-primary/30" },
];

export function Videos() {
  return (
    <div className="min-h-screen bg-background pt-[183px] pb-24 text-foreground selection:bg-primary/30">
      <div className="max-w-[1440px] mx-auto pl-[341px] pr-[87px]">
        <div className="mb-[62px]">
          <h1 className="text-[36px] font-bold tracking-tight mb-4 text-white">Math Video Lessons</h1>
          <p className="text-[16px] text-muted-foreground w-[490px] leading-[24px]">
            Deep dive into complex mathematical concepts through cinematic educational modules and expert-led derivations.
          </p>
        </div>

        <div className="w-[1012px] flex gap-[12px]">
          {/* Main Featured Video Area (629px) */}
          <div className="w-[629px] flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-[354px] rounded-2xl overflow-hidden bg-card border border-white/5 shadow-2xl group"
            >
              {/* Mock Video Player Surface */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white cursor-pointer hover:bg-white/20 hover:scale-105 transition-all">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>

              {/* OVERLAY CONTROLS BAR (Always visible as per Figma) */}
              <div className="absolute bottom-0 left-0 right-0 h-[191px] bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-md rounded-md px-2 py-0.5 text-xs font-medium">Calculus</Badge>
                  <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md rounded-md px-2 py-0.5 text-xs font-medium">Session 04</Badge>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Visualizing Integration: The Fundamental Theorem</h2>
                <div className="text-sm text-white/70 mb-4">Session 04 • 24:15 • By Dr. Helena Vance</div>
                
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer mb-2">
                  <div className="h-full bg-primary w-[45%] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-4">
                    <Pause className="w-4 h-4 text-white hover:text-primary cursor-pointer" />
                    <Volume2 className="w-4 h-4 text-white hover:text-primary cursor-pointer" />
                    <span className="font-medium">10:52 / 24:15</span>
                  </div>
                  <Maximize className="w-4 h-4 text-white hover:text-primary cursor-pointer" />
                </div>
              </div>
            </motion.div>

            {/* Video Details Cards */}
            <div className="flex gap-4">
              <div className="w-[306px] h-[220px] bg-card border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <Compass className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Key Concepts</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Geometric interpretation of definite integrals
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Area accumulation functions
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    The relationship between differentiation and integration
                  </li>
                </ul>
              </div>

              <div className="w-[306px] h-[220px] bg-card border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Related Topics</h3>
                </div>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Riemann Sums Demystified
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Properties of Definite Integrals
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Applications: Physics & Geometry
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar (382px) */}
          <div className="w-[382px] bg-card border border-white/5 rounded-2xl p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-white">Up Next</h3>
              <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">View All</a>
            </div>

            <div className="flex flex-col gap-4">
              {VIDEOS.map((video, idx) => (
                <motion.div 
                  key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className="relative w-[128px] h-[72px] bg-background border border-white/10 rounded-lg overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <Play className="w-6 h-6 fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-medium text-white rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0 py-1">
                    <h4 className="font-semibold text-[14px] leading-snug text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors">{video.title}</h4>
                    <Badge variant="outline" className={`w-fit text-[10px] px-2 py-0 h-5 font-medium rounded-md ${video.color}`}>
                      {video.subject}
                    </Badge>
                  </div>
                  <div className="pt-2">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground hover:text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
