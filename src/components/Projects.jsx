import React from 'react';
import { useTranslation } from 'react-i18next';
import { FolderGit2, Calendar, ExternalLink } from 'lucide-react';

export default function Projects({ darkMode }) {
  const { t } = useTranslation();
  const list = t('projects.list', { returnObjects: true }) || [];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.period}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {project.name}
                </h3>

                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech && project.tech.map((tItem, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                        darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {tItem}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/SarraRabai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors`}
                >
                  <span>View Source</span>
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
