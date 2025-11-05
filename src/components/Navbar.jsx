import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2 font-semibold text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="tracking-tight">Techfolio</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-white/5 text-neutral-300 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-white/5 text-neutral-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
