import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/30 p-8 text-center"
      >
        <h3 className="text-2xl font-bold">Let's build something great</h3>
        <p className="mt-3 text-neutral-300">
          Open to collaborations, freelance work, and full-time opportunities. Reach out and let's talk.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-neutral-200"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
