
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Python A-Z',
      description: 'Comprehensive Python programming guide covering fundamentals to advanced concepts',
      image: '🐍',
      technologies: ['Python', 'Jupyter', 'NumPy', 'Pandas'],
      github: 'https://github.com/Lucky-akash321/Python-atoz',
      color: 'neon-blue'
    },
    {
      title: 'Hands-on Data Engineering',
      description: 'Complete data engineering pipeline implementations and best practices',
      image: '🏗️',
      technologies: ['Apache Spark', 'Kafka', 'Airflow', 'AWS'],
      github: 'https://github.com/Lucky-akash321/Hands-on-Data-Engineering',
      color: 'neon-purple'
    },
    {
      title: 'ML Hero',
      description: 'Machine learning algorithms from scratch with practical implementations',
      image: '🦸',
      technologies: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'MLOps'],
      github: 'https://github.com/Lucky-akash321/Machine-Learning-atoz',
      color: 'neon-pink'
    },
    {
      title: 'Deep Learning Mastery',
      description: 'Advanced neural network architectures and deep learning techniques',
      image: '🧠',
      technologies: ['TensorFlow', 'Keras', 'Computer Vision', 'NLP'],
      github: 'https://github.com/Lucky-akash321/Deep-Learning-atoz',
      color: 'neon-green'
    },
    {
      title: 'LLM Advanced',
      description: 'Large Language Model fine-tuning and deployment strategies',
      image: '🚀',
      technologies: ['Transformers', 'Hugging Face', 'OpenAI', 'LangChain'],
      github: 'https://github.com/Lucky-akash321/LLM-atoz',
      color: 'neon-blue'
    },
    {
      title: 'NLP Projects',
      description: 'Natural Language Processing applications and research implementations',
      image: '💬',
      technologies: ['NLTK', 'spaCy', 'BERT', 'Sentiment Analysis'],
      github: 'https://github.com/Lucky-akash321/NLP-atoz',
      color: 'neon-purple'
    },
    {
      title: 'GenAI Hugging Face',
      description: 'Generative AI models and applications using Hugging Face ecosystem',
      image: '🤗',
      technologies: ['Diffusers', 'Transformers', 'Gradio', 'Streamlit'],
      github: 'https://github.com/Lucky-akash321/GenAI-HuggingFace',
      color: 'neon-pink'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Open-source contributions and comprehensive learning resources for the AI/ML community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glass rounded-2xl overflow-hidden card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 text-center">
                  <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs bg-${project.color}/20 text-${project.color} rounded-full border border-${project.color}/30`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="btn-neon w-full group-hover:bg-neon-blue/20"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="btn-neon animate-glow"
              onClick={() => window.open('https://github.com/Lucky-akash321', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
