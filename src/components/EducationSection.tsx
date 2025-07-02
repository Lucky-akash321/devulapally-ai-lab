
import React from 'react';

export const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Campbellsville University',
      duration: '2023 – 2024',
      location: 'Kentucky, USA',
      description: 'Advanced coursework in AI, Machine Learning, and Data Science',
      color: 'neon-blue'
    },
    {
      degree: 'Bachelor of Electronics & Communication',
      school: 'GITAM University',
      duration: '2016 – 2020',
      location: 'Hyderabad, India',
      description: 'Foundation in Engineering with focus on Signal Processing',
      color: 'neon-pink'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a strong foundation in computer science and engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-glass p-8 rounded-2xl card-hover text-center max-w-md mx-auto"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-${edu.color} to-white/20 rounded-2xl flex items-center justify-center`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM5 13.18v4L12 19.18 19 17.18v-4L12 15.18 5 13.18z"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className={`text-lg font-semibold text-${edu.color} mb-3`}>{edu.school}</h4>
                <div className="text-gray-300 font-medium mb-2">{edu.duration}</div>
                <div className="text-gray-400 text-sm mb-4">{edu.location}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
