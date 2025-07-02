
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'AI Engineer',
    'Data Scientist',
    'ML Enthusiast',
    'GenAI Expert'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akashdevulapally/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Lucky-akash321', label: 'GitHub' },
    { icon: Mail, href: 'https://medium.com/@akashdvp99', label: 'Medium' },
    { icon: Instagram, href: 'https://www.instagram.com/akashdevulapally/', label: 'Instagram' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Akash Devulapally</span>
            <span className="text-gradient block h-20 md:h-24">
              {titles[currentTitle]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building the future with AI • Crafting intelligent solutions • Transforming data into insights
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                className="btn-neon group"
                onClick={() => window.open(social.href, '_blank')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {social.label}
              </Button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="btn-neon px-8 py-4 text-lg font-semibold animate-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Something Amazing
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-32 right-8 w-4 h-4 bg-neon-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-32 left-8 w-6 h-6 bg-neon-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-neon-pink rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
