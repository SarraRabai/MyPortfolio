import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ darkMode }) {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('contact.subtitle')}
          </p>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'} shadow-xl space-y-6`}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</h4>
                  <a href="mailto:sarrarabai87@gmail.com" className={`text-lg font-bold hover:text-purple-600 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    sarrarabai87@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</h4>
                  <a href="tel:+21629197606" className={`text-lg font-bold hover:text-purple-600 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    +216 29 197 606
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</h4>
                  <span className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Tunis, Tunisia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'} shadow-xl space-y-6`}
            >
              {submitted && (
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{t('contact.success')}</span>
                </div>
              )}

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
                    darkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
                    darkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('contact.message')}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
                    darkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  placeholder="Hi Sarra, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30"
              >
                <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
