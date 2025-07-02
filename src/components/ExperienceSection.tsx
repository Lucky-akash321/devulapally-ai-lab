
import React from 'react';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: 'UnitedHealth Group',
      role: 'Senior Data Scientist',
      duration: 'Nov 2024 – Present',
      location: 'Remote',
      description: 'Leading AI initiatives in healthcare analytics, developing predictive models for patient outcomes, and implementing GenAI solutions for clinical decision support.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Spark', 'MLOps'],
      color: 'neon-blue'
    },
    {
      company: 'Assurant',
      role: 'Data Scientist',
      duration: 'Aug 2022 – Jul 2024',
      location: 'Atlanta, GA',
      description: 'Built ML models for risk assessment and fraud detection, implemented real-time analytics pipelines, and deployed AI solutions serving millions of customers.',
      technologies: ['PyTorch', 'Azure', 'Databricks', 'Kafka', 'Docker'],
      color: 'neon-purple'
    },
    {
      company: 'Microsoft India',
      role: 'Software Engineer',
      duration: 'Jul 2019 – Jul 2021',
      location: 'Hyderabad, India',
      description: 'Developed cloud-native applications, worked on Azure ML services, and contributed to large-scale distributed systems serving global customers.',
      technologies: ['C#', '.NET', 'Azure', 'SQL Server', 'Kubernetes'],
      color: 'neon-pink'
    },
    {
      company: 'IIT Guwahati',
      role: 'Research Intern',
      duration: 'May 2018 – Jun 2019',
      location: 'Guwahati, India',
      description: 'Conducted research in machine learning algorithms, published papers on deep learning applications, and developed novel approaches to computer vision problems.',
      technologies: ['Python', 'OpenCV', 'MATLAB', 'Research', 'Publications'],
      color: 'neon-green'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building AI solutions across Fortune 500 companies and research institutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-purple via-neon-pink to-neon-green rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-${exp.color} rounded-full shadow-lg animate-glow z-10`}></div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                    <div className="card-glass p-8 rounded-2xl card-hover">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                          <h4 className={`text-xl font-semibold text-${exp.color} mb-2`}>{exp.company}</h4>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-300 font-medium">{exp.duration}</div>
                          <div className="text-gray-400 text-sm">{exp.location}</div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm bg-${exp.color}/20 text-${exp.color} rounded-full border border-${exp.color}/30`}
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
