import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CaseStudy />
      <Certifications />
      <Education />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;