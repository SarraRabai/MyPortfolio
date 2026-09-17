import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-12 border-t ${darkMode ? 'bg-gray-950 border-gray-800 text-gray-400' : 'bg-gray-900 border-gray-800 text-gray-400'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold text-white">Sarra Rabai</span>
          <p className="text-sm mt-1">Full Stack Developer & AI Engineer</p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/SarraRabai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sarra-rabai-bb750a22b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sarrarabai87@gmail.com"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <Mail className="w-4 h-4 mr-1" />
            <span>Email</span>
          </a>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Sarra Rabai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
