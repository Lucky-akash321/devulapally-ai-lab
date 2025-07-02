
import React from 'react';
import { Button } from '@/components/ui/button';

export const BlogsSection = () => {
  const blogs = [
    {
      title: 'Squid Game vs Data Science',
      description: 'Can you survive the data science challenges using game theory and statistical analysis?',
      image: '🦑',
      readTime: '8 min read',
      url: 'https://medium.com/@akashdvp99/data-science-vs-the-squid-game-can-you-survive-292ecfbacd72',
      color: 'neon-blue'
    },
    {
      title: 'Bermuda Triangle Mystery',
      description: 'Solving the Bermuda Triangle mystery using data science and advanced analytics',
      image: '🔺',
      readTime: '12 min read',
      url: 'https://medium.com/@akashdvp99/can-data-science-solve-the-bermuda-triangle-mystery-by-akash-devulapally-66831152eeaa',
      color: 'neon-purple'
    },
    {
      title: 'Elon Musk Pipeline',
      description: 'How would Elon Musk build a data pipeline? Exploring innovative approaches to data engineering',
      image: '🚀',
      readTime: '10 min read',
      url: 'https://medium.com/@akashdvp99/how-would-elon-musk-build-a-data-pipeline-5082a36c8bbf',
      color: 'neon-pink'
    },
    {
      title: 'Sherlock Holmes on Data Science',
      description: 'How would Sherlock Holmes solve data science problems using deductive reasoning?',
      image: '🕵️',
      readTime: '15 min read',
      url: 'https://medium.com/@akashdvp99/how-would-sherlock-holmes-solve-data-science-problems-744131b9a7c4',
      color: 'neon-green'
    }
  ];

  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Technical Blogs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the intersection of technology, creativity, and problem-solving through engaging stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="card-glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => window.open(blog.url, '_blank')}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {blog.image}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 text-xs bg-${blog.color}/20 text-${blog.color} rounded-full border border-${blog.color}/30`}>
                          {blog.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {blog.description}
                      </p>
                      
                      <div className="flex items-center text-neon-blue text-sm font-medium group-hover:text-neon-purple transition-colors">
                        Read on Medium
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="btn-neon animate-glow"
              onClick={() => window.open('https://medium.com/@akashdvp99', '_blank')}
            >
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
