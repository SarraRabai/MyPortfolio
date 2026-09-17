import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#education', label: t('nav.education') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Sarra Rabai
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language & Theme */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                <Globe className="w-4 h-4" />
                <span className="uppercase">{i18n.language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1 hidden group-hover:block">
                <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-gray-700 dark:text-gray-200">English</button>
                <button onClick={() => changeLanguage('fr')} className="w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-gray-700 dark:text-gray-200">Français</button>
                <button onClick={() => changeLanguage('ar')} className="w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-gray-700 dark:text-gray-200">العربية</button>
                <button onClick={() => changeLanguage('de')} className="w-full text-left px-4 py-2 text-sm hover:bg-purple-50 dark:hover:bg-gray-700 dark:text-gray-200">Deutsch</button>
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden px-4 pt-2 pb-6 space-y-3 ${darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white border-b border-gray-100 shadow-lg'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Language:</span>
            <div className="flex space-x-2">
              {['en', 'fr', 'ar', 'de'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => { changeLanguage(lng); setIsOpen(false); }}
                  className={`px-2.5 py-1 text-xs rounded uppercase font-bold ${i18n.language === lng ? 'bg-purple-600 text-white' : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
