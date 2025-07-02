
import React, { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SummarySection } from '../components/SummarySection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { BlogsSection } from '../components/BlogsSection';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { ContactSection } from '../components/ContactSection';
import { Navigation } from '../components/Navigation';
import { ParticleBackground } from '../components/ParticleBackground';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black neural-bg overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <SummarySection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <BlogsSection />
        <ActivitiesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
