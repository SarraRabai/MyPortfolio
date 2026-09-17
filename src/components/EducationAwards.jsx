import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, Globe } from 'lucide-react';

export default function EducationAwards({ darkMode }) {
  const { t } = useTranslation();
  const degrees = t('education.degrees', { returnObjects: true }) || [];
  const awards = t('education.awards', { returnObjects: true }) || [];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Degrees */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold flex items-center mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              <GraduationCap className="w-7 h-7 mr-3 text-purple-600" />
              Education
            </h3>
            {degrees.map((deg, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {deg.degree}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                    {deg.period}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {deg.school}
                </p>
              </div>
            ))}
          </div>

          {/* Awards & Languages */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold flex items-center mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <Award className="w-7 h-7 mr-3 text-purple-600" />
                {t('education.awardTitle')}
              </h3>
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                    darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <p className={`text-base font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    ✨ {award}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h3 className={`text-2xl font-bold flex items-center mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                <Globe className="w-7 h-7 mr-3 text-purple-600" />
                {t('education.languagesTitle')}
              </h3>
              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/80 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'}`}>
                <p className="font-semibold">{t('education.languages')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
