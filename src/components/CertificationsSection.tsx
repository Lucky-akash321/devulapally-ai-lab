
import React from 'react';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Machine Learning Specialty',
      issuer: 'Amazon Web Services',
      badge: '🏆',
      description: 'Advanced ML on AWS, model deployment, and optimization',
      color: 'neon-blue',
      link: 'https://www.credly.com/badges/your-aws-ml-badge'
    },
    {
      title: 'AWS Data Engineer Associate',
      issuer: 'Amazon Web Services',
      badge: '📊',
      description: 'Data pipeline design, ETL processes, and data analytics',
      color: 'neon-purple',
      link: 'https://www.credly.com/badges/your-aws-data-engineer-badge'
    },
    {
      title: 'Azure Administrator Associate',
      issuer: 'Microsoft',
      badge: '☁️',
      description: 'Cloud infrastructure management and deployment',
      color: 'neon-pink',
      link: 'https://www.credly.com/badges/your-azure-admin-badge'
    },
    {
      title: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      badge: '🔧',
      description: 'Data engineering solutions on Azure platform',
      color: 'neon-green',
      link: 'https://www.credly.com/badges/your-azure-data-engineer-badge'
    },
    {
      title: 'IBM Certified Data Scientist',
      issuer: 'IBM',
      badge: '🧠',
      description: 'Data science methodologies and machine learning',
      color: 'neon-blue',
      link: 'https://www.credly.com/badges/your-ibm-data-scientist-badge'
    },
    {
      title: 'IBM AI Developer',
      issuer: 'IBM',
      badge: '🤖',
      description: 'AI application development and deployment',
      color: 'neon-purple',
      link: 'https://www.credly.com/badges/your-ibm-ai-developer-badge'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-recognized expertise in cloud platforms and AI technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-6 rounded-2xl card-hover group cursor-pointer block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className={`text-${cert.color} font-semibold mb-3`}>
                    {cert.issuer}
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="text-neon-blue text-sm font-medium">
                    Click to view certificate →
                  </div>
                  
                  <div className={`mt-4 w-full h-1 bg-gradient-to-r from-${cert.color} to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
