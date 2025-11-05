import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Streaming metrics with smooth transitions and interactive charts.',
    tech: ['React', 'FastAPI', 'WebSockets', 'Tailwind'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Immersive 3D experience powered by Spline and WebGL.',
    tech: ['Spline', 'Three.js', 'React'],
    link: '#',
  },
  {
    title: 'AI-Assisted Designer',
    description: 'Prompt-driven UI builder with smart layout suggestions.',
    tech: ['Vite', 'OpenAI', 'FastAPI'],
    link: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.a
      variants={item}
      href={link}
      className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-neutral-900/50 p-6 shadow-lg hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition"
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
            <Code2 className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-neutral-300">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
              {t}
            </span>
          ))}
        </div>
        <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 group-hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)]" />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-neutral-400">A curated selection highlighting motion, 3D, and clean code.</p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </motion.div>
    </div>
  );
}
