
import React from 'react';

export const SummarySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              AI Innovation at Scale
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                AI Engineer with expertise in building scalable GenAI, NLP & ML solutions using LLMs, MLOps, LangChain, Python, Spark, and AWS.
              </p>
              <p className="text-lg text-neon-blue font-semibold">
                Ex-Microsoft • UnitedHealth Group • Assurant
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable AI Solutions</h3>
              <p className="text-gray-400">Building enterprise-grade AI systems that transform businesses and drive innovation.</p>
            </div>

            <div className="card-glass p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v2.02c4.39.54 7.5 4.53 7.5 9.43 0 5.28-4.05 9.64-9.23 9.95v2.05c6.39-.27 11.23-5.73 11.23-12S19.39 2.32 13 2.05zM5.67 19.74C2.83 16.9 2 13.26 2 12s.83-4.9 3.67-7.74L7.1 5.69C4.93 7.86 4 9.87 4 12s.93 4.14 3.1 6.31l-1.43 1.43z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Intelligence</h3>
              <p className="text-gray-400">Extracting meaningful insights from complex datasets using advanced analytics and ML.</p>
            </div>

            <div className="card-glass p-8 rounded-2xl card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon-pink to-neon-green rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Leadership</h3>
              <p className="text-gray-400">Leading AI initiatives at Fortune 500 companies and driving technological advancement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
