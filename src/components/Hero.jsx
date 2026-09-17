import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            {t('hero.greeting')}{' '}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Sarra Rabai
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl font-medium mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t('hero.title')}
          </p>

          <p className={`text-base sm:text-lg mb-10 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
            >
              {t('hero.contactBtn')}
              <ArrowRight className="w-5 h-5 ml-2 rtl:rotate-180" />
            </a>
            <a
              href="mailto:sarrarabai87@gmail.com"
              className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold border transition-all ${
                darkMode 
                  ? 'border-gray-700 text-gray-200 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Download className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('hero.downloadResume')}
            </a>
          </div>

          {/* Social Links & Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <a
              href="https://github.com/SarraRabai"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-purple-600 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sarra-rabai-bb750a22b"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-purple-600 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sarrarabai87@gmail.com"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-purple-600 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <Mail className="w-5 h-5" />
              <span>sarrarabai87@gmail.com</span>
            </a>
            <div className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Tunis, Tunisia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
