
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Handshake } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to build the future of AI together? Let's discuss your next breakthrough project.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="text-6xl animate-float">
                🤝
              </div>
            </div>
            
            <div className="card-glass p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-neon-blue mb-4">
                "Let's build AI that matters. Reach out now — I'm just a message away!"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="card-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open('tel:+19727501525')}>
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors">
                      <Phone className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-neon-blue transition-colors">Phone</h4>
                      <p className="text-gray-400">+1 (972) 750-1525</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open('mailto:akashdvp99@gmail.com')}>
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-xl flex items-center justify-center group-hover:bg-neon-purple/30 transition-colors">
                      <Mail className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-neon-purple transition-colors">Email</h4>
                      <p className="text-gray-400">akashdvp99@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center group-hover:bg-neon-pink/30 transition-colors">
                      <Handshake className="w-6 h-6 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-neon-pink transition-colors">Let's Collaborate</h4>
                      <p className="text-gray-400">Open to exciting AI projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-neon flex-1 animate-glow"
                  onClick={() => window.open('mailto:akashdvp99@gmail.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-neon flex-1"
                  onClick={() => window.open('https://www.linkedin.com/in/akashdevulapally/', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-6">What I Can Help With</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-3 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-white">AI/ML Strategy</h4>
                    <p className="text-gray-400 text-sm">Strategic planning for AI implementations and digital transformation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mt-3 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div>
                    <h4 className="font-semibold text-white">Technical Architecture</h4>
                    <p className="text-gray-400 text-sm">Designing scalable ML systems and data pipelines</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-pink rounded-full mt-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div>
                    <h4 className="font-semibold text-white">Team Building</h4>
                    <p className="text-gray-400 text-sm">Building and leading high-performing AI/ML teams</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full mt-3 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div>
                    <h4 className="font-semibold text-white">Consulting</h4>
                    <p className="text-gray-400 text-sm">Expert guidance on AI/ML projects and technology decisions</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-xl border border-white/10">
                <p className="text-center text-gray-300 text-sm">
                  <span className="text-neon-blue font-semibold">Available for:</span> Full-time opportunities, Consulting projects, Speaking engagements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
