import React, { useState } from 'react';
import { Menu, X, ChevronRight, Moon, Sun, CheckCircle2, Globe } from 'lucide-react';
import logo from '../logo_delta.png';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇹🇳' }
];

export default function Navbar({ 
  theme, 
  language, 
  isDark, 
  t, 
  isMenuOpen, 
  setIsMenuOpen,
  navigateTo, 
  handleEnroll, 
  setLanguage, 
  setIsDark 
}) {
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full ${theme.navBg} backdrop-blur-lg shadow-lg z-50 transition-all duration-500`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 cursor-pointer group`}
            onClick={() => navigateTo('home')}
            aria-label={`${t.brand} ${t.home}`}
          >
            <img
              src={logo}
              alt="Delta Academy Logo"
              className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              width="48"
              height="48"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">
              {t.brand}
            </span>
          </button>

          <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-6`}>
            {[
              { key: 'home', label: t.home },
              { key: 'courses', label: t.courses },
              { key: 'about', label: t.about },
              { key: 'contact', label: t.contact }
            ].map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`${theme.text} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] transition-all font-medium relative group`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2970ae] to-[#ec960b] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleEnroll()}
              className="bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-6 py-2.5 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all font-semibold"
            >
              {t.enrollNow}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full ${theme.card} ${theme.border} border-2 transition-all hover:scale-105 hover:shadow-lg flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 font-semibold group hover:border-[#ec960b]`}
                aria-haspopup="menu"
                aria-expanded={showLangMenu}
              >
                <Globe size={18} className="text-[#ec960b]" />
                <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
                <span className={`text-sm ${theme.text} group-hover:text-[#ec960b] transition-colors`}>
                  {language.toUpperCase()}
                </span>
                <ChevronRight className={`${theme.textSecondary} transform ${showLangMenu ? 'rotate-90' : 'rotate-0'} transition-transform`} size={16} />
              </button>

              {showLangMenu && (
                <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} mt-2 ${theme.card} rounded-xl shadow-2xl border ${theme.border} overflow-hidden min-w-[180px] z-50`}
                  style={{ animation: 'fadeIn 0.2s ease-out' }}
                >
                  {languages.map((lang) => (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-between ${language === lang.code ? 'bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white' : `${theme.text} hover:bg-gray-100 dark:hover:bg-gray-700`} transition-all`}
                    >
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      {language === lang.code && (
                        <CheckCircle2 size={18} className="text-white" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-full ${theme.card} ${theme.border} border transition-all hover:scale-110`}
              aria-label={isDark ? t.lightMode : t.darkMode}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-[#ec960b]" />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} className={theme.text} /> : <Menu size={24} className={theme.text} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className={`md:hidden ${theme.card} border-t ${theme.border} backdrop-blur-lg`}>
          <div className="px-4 py-4 space-y-3">
            {[
              { key: 'home', label: t.home },
              { key: 'courses', label: t.courses },
              { key: 'about', label: t.about },
              { key: 'contact', label: t.contact }
            ].map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`block w-full text-left px-4 py-2 ${theme.text} hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] hover:text-white rounded-lg transition-all`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleEnroll()}
              className="w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-6 py-2.5 rounded-full font-semibold"
            >
              {t.enrollNow}
            </button>

            {/* Mobile Language Switcher */}
            <div className="space-y-2">
              <div className={`text-sm font-semibold ${theme.text} px-4 py-2 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                <Globe size={16} className="text-[#ec960b]" />
                <span>{t.home === 'Home' ? 'Language' : t.home === 'Accueil' ? 'Langue' : 'اللغة'}</span>
              </div>
              {languages.map((lang) => (
                <button
                  type="button"
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 px-4 py-2 ${language === lang.code ? 'bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white' : `${theme.text} hover:bg-gray-100 dark:hover:bg-gray-700`} rounded-lg transition-all`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`w-full flex items-center justify-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 px-4 py-2 ${theme.card} ${theme.border} border rounded-lg`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-[#ec960b]" />}
              <span className={theme.text}>{isDark ? t.lightMode : t.darkMode}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
