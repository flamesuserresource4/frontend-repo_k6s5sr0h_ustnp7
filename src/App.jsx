import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white antialiased">
      <Navbar />
      <main>
        <section id="home" className="relative min-h-[90vh]">
          <Hero />
        </section>
        <section id="projects" className="relative py-24">
          <Projects />
        </section>
        <section id="contact" className="relative py-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
