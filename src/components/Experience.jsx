import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience({ darkMode }) {
  const { t } = useTranslation();
  const roles = t('experience.roles', { returnObjects: true }) || [];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-purple-600/30 space-y-12">
          {roles.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-purple-600 bg-white dark:bg-gray-900 group-hover:scale-125 transition-transform"></div>

              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {item.period}
                  </span>
                </div>

                <div className="text-purple-600 font-semibold mb-4 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {item.company}
                </div>

                <ul className="space-y-2">
                  {item.points && item.points.map((point, idx) => (
                    <li key={idx} className={`text-sm sm:text-base flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-purple-600 mr-2 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
