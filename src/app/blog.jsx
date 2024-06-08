'use client';
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

export default function blog() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (position / docHeight) * 100;
      setScrollPosition(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      {/* Scrolling Indicator below NavBar */}
      <div
        className="scroll-indicator"
        style={{ width: `${scrollPosition}%` }}
      ></div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
