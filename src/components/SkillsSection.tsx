
import React from 'react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'AI/ML & NLP',
      icon: '🤖',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LangChain', 'OpenAI', 'Transformers', 'BERT', 'GPT'],
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Data Engineering',
      icon: '📊',
      skills: ['Apache Spark', 'Kafka', 'Airflow', 'Databricks', 'Snowflake', 'BigQuery', 'ETL/ELT', 'Data Pipelines'],
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'MLOps', 'SageMaker'],
      color: 'from-neon-pink to-neon-green'
    },
    {
      title: 'Programming',
      icon: '💻',
      skills: ['Python', 'SQL', 'R', 'Scala', 'Java', 'JavaScript', 'Git', 'Linux', 'REST APIs'],
      color: 'from-neon-green to-neon-blue'
    },
    {
      title: 'Visualization',
      icon: '📈',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js', 'Excel', 'Looker'],
      color: 'from-neon-blue to-neon-pink'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building cutting-edge AI solutions and data-driven applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="flip-card h-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front card-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back card-glass rounded-2xl p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className="bg-white/5 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors text-center"
                          style={{ animationDelay: `${skillIndex * 0.05}s` }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-glass p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">Specializations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-semibold text-white mb-2">Generative AI</h4>
                  <p className="text-gray-400 text-sm">LLMs, ChatGPT integration, Custom AI assistants</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔍</div>
                  <h4 className="font-semibold text-white mb-2">Deep Learning</h4>
                  <p className="text-gray-400 text-sm">Neural networks, Computer vision, NLP models</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-semibold text-white mb-2">MLOps</h4>
                  <p className="text-gray-400 text-sm">Model deployment, Monitoring, Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
