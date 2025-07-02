
import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">The Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As an AI Engineer and Data Scientist, I'm passionate about pushing the boundaries of what's possible with artificial intelligence. My journey has taken me through Fortune 500 companies like Microsoft, UnitedHealth Group, and Assurant, where I've led transformative AI initiatives.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I specialize in building scalable GenAI solutions, implementing cutting-edge NLP systems, and developing ML pipelines that drive real business value. My expertise spans from traditional machine learning to the latest in large language models and generative AI.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me contributing to open source projects, mentoring aspiring data scientists, or sharing insights through technical blogs on Medium.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-glass p-8 rounded-2xl card-hover">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-white">Innovation First</h4>
                      <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies to solve complex problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-purple rounded-full mt-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div>
                      <h4 className="font-semibold text-white">Data-Driven Decisions</h4>
                      <p className="text-gray-400 text-sm">Every solution is backed by solid data analysis and rigorous testing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-pink rounded-full mt-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div>
                      <h4 className="font-semibold text-white">Continuous Learning</h4>
                      <p className="text-gray-400 text-sm">Staying at the forefront of AI/ML advancements and sharing knowledge with the community.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-green rounded-full mt-2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div>
                      <h4 className="font-semibold text-white">Impact Focus</h4>
                      <p className="text-gray-400 text-sm">Building AI solutions that create meaningful, measurable impact for businesses and society.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-glass p-6 rounded-xl text-center card-hover">
                  <div className="text-3xl font-bold text-neon-blue mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="card-glass p-6 rounded-xl text-center card-hover">
                  <div className="text-3xl font-bold text-neon-purple mb-2">50+</div>
                  <div className="text-gray-400 text-sm">AI Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
