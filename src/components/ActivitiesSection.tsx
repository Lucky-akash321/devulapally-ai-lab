
import React from 'react';

export const ActivitiesSection = () => {
  const activities = [
    {
      title: 'AI Open Source Contributor',
      description: 'Contributing to popular ML libraries and creating educational content for the community',
      icon: '🔧',
      color: 'neon-blue'
    },
    {
      title: 'GenAI Hackathon Winner',
      description: 'First place in multiple hackathons focused on generative AI and innovative solutions',
      icon: '🏆',
      color: 'neon-purple'
    },
    {
      title: 'Blogger & Speaker',
      description: 'Regular technical blogger on Medium and speaker at AI/ML conferences and meetups',
      icon: '📝',
      color: 'neon-pink'
    },
    {
      title: 'Mentor & Educator',
      description: 'Mentoring aspiring data scientists and conducting workshops on AI/ML technologies',
      icon: '👨‍🏫',
      color: 'neon-green'
    },
    {
      title: 'Lifelong Learner',
      description: 'Continuously exploring cutting-edge AI research and implementing novel approaches',
      icon: '📚',
      color: 'neon-blue'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Beyond the Code
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contributing to the AI community through various initiatives and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="card-glass p-8 rounded-2xl card-hover text-center group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                
                <h3 className={`text-xl font-bold mb-4 group-hover:text-${activity.color} transition-colors text-white`}>
                  {activity.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
                
                <div className={`mt-6 w-full h-1 bg-gradient-to-r from-${activity.color} to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-6">Community Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-blue mb-2">10K+</div>
                  <div className="text-gray-400">GitHub Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-purple mb-2">50+</div>
                  <div className="text-gray-400">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-pink mb-2">25+</div>
                  <div className="text-gray-400">Technical Articles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
