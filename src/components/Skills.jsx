import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

export default function Skills({ darkMode }) {
  const { t } = useTranslation();

  const skillCategories = [
    {
      categoryKey: 'frontend',
      title: t('skills.categories.frontend'),
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "React Native", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      categoryKey: 'backend',
      title: t('skills.categories.backend'),
      skills: ["Node.js", "Express.js", "Fastify", "NestJS", "GraphQL", "REST APIs", "Socket.io", "JWT Authentication"]
    },
    {
      categoryKey: 'database',
      title: t('skills.categories.database'),
      skills: ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB)"]
    },
    {
      categoryKey: 'ai',
      title: t('skills.categories.ai'),
      skills: ["Python", "YOLOv8", "Detectron2", "PyTorch", "Pandas", "NumPy"]
    },
    {
      categoryKey: 'devops',
      title: t('skills.categories.devops'),
      skills: ["AWS (EC2, S3)", "Serverless", "Docker", "Git", "GitHub Actions", "Postman"]
    },
    {
      categoryKey: 'methods',
      title: t('skills.categories.methods'),
      skills: ["Agile Scrum", "REST Architecture", "Cross-platform Development"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 pb-3 border-b ${darkMode ? 'text-gray-100 border-gray-700' : 'text-gray-900 border-gray-100'}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${
                      darkMode ? 'bg-gray-700/80 text-purple-300' : 'bg-purple-50 text-purple-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-purple-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
