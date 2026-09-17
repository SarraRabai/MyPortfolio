import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Brain, Cpu, Globe2 } from 'lucide-react';

export default function About({ darkMode }) {
  const { t } = useTranslation();

  const highlights = [
    { icon: Code2, title: "Full Stack Mastery", desc: "React, Next.js, Node.js, NestJS & Fastify" },
    { icon: Brain, title: "AI & Computer Vision", desc: "YOLOv8, Detectron2, PyTorch & Python" },
    { icon: Cpu, title: "Scalable Architecture", desc: "REST APIs, GraphQL, Docker & AWS" },
    { icon: Globe2, title: "Global Collaboration", desc: "Remote experience with international teams" },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('about.description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className={`px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'} shadow-sm`}>
                <span className="block text-xs text-purple-600 font-bold uppercase">Location</span>
                <span className="font-semibold">{t('about.location')}</span>
              </div>
              <div className={`px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'} shadow-sm`}>
                <span className="block text-xs text-purple-600 font-bold uppercase">Phone</span>
                <span className="font-semibold">{t('about.phone')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-gray-800/80 border-gray-700 hover:border-purple-500/50' 
                      : 'bg-white border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
