import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0"> 
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(6,182,212,0.25),rgba(0,0,0,0))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building interactive, modern experiences with code and 3D.
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Developer portfolio with a tech-forward aesthetic, playful interactions, and smooth motion.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 font-medium text-black shadow-lg shadow-cyan-500/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-6 text-sm text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Next.js • React • Three/Spline • FastAPI • Tailwind</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
