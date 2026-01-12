'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="h-full flex flex-col justify-between p-8 relative group">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500" />

      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div className="space-y-1">
          <h2 className="text-sm font-mono text-zinc-400">AVAILABLE FOR HIRE</h2>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-zinc-500 font-mono">ONLINE NOW</span>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-md">
          <span className="text-xs font-medium text-zinc-300 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Worldwide
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4 z-10 mt-12 mb-12 flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-white"
        >
          <img
            src="/logo.jpg"
            alt="DoubleA Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Double<span className="text-zinc-500">A</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building <span className="text-white font-medium">products</span> that solve real problems.
          Full-stack engineer tailored for scalability.
        </motion.p>
      </div>

      {/* Footer / Tech Indicators */}
      <div className="flex justify-between items-end z-10">
        <div className="flex gap-4">
          {['Next.js', 'TypeScript', 'Node.js'].map((tech) => (
            <span key={tech} className="text-xs text-zinc-500 font-mono border-b border-transparent hover:border-zinc-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
