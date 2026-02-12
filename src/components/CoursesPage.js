import React from 'react';
import { ArrowRight, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { courseCategories, languageTargetProfiles } from '../constants/data';

export default function CoursesPage({
  theme,
  language,
  t,
  selectedCategory,
  setSelectedCategory,
  selectedDomain,
  setSelectedDomain,
  handleEnroll,
  isDark
}) {
  return (
    <div className={`pt-24 pb-16 min-h-screen ${theme.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        {!selectedCategory && (
          <>
            <h1 className={`text-5xl font-bold text-center mb-4 ${theme.text}`}>{t.allCoursesTitle}</h1>
            <p className={`text-center ${theme.textSecondary} mb-16 text-xl`}>{t.allCoursesSubtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {Object.entries(courseCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`${theme.card} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border-2 ${theme.border} group`}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={40} />
                    </div>
                    <h3 className={`text-3xl font-bold mb-3 ${theme.text}`}>{t[category.titleKey]}</h3>
                    <p className={`${theme.textSecondary} mb-6 text-lg`}>{t[category.subtitleKey]}</p>
                    <div className={`text-sm ${theme.textSecondary} mb-6`}>
                      {category.domains.length} specialized domains • {t.expertInstructorsText}
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-[#ec960b] font-bold text-lg group-hover:translate-x-2 transition-transform`}>
                      <span>{t.viewAllDomains}</span>
                      <ArrowRight size={24} />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedCategory && !selectedDomain && (
          <>
            <button 
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`mb-8 ${theme.text} hover:text-[#ec960b] font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-lg transform hover:-translate-x-2 transition-all`}
            >
              <ArrowRight className="rotate-180" />
              <span>{t.backToCategories}</span>
            </button>
            
            <div className="mb-12">
              <h2 className={`text-4xl font-bold mb-3 ${theme.text}`}>{t[courseCategories[selectedCategory].titleKey]}</h2>
              <p className={`${theme.textSecondary} text-xl`}>{t[courseCategories[selectedCategory].subtitleKey]}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courseCategories[selectedCategory].domains.map((domain, i) => {
                const DomainIcon = domain.icon;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedDomain(domain)}
                    className={`${theme.card} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${theme.border} hover:border-[#ec960b] group`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <DomainIcon className="text-[#ec960b] group-hover:scale-110 transition-transform" size={48} />
                      <span className={`px-3 py-1 bg-[#c17b3f]/20 dark:bg-[#c17b3f]/30 text-[#ec960b] dark:text-[#ec960b] rounded-full text-sm font-semibold`}>
                        {t[domain.levelKey] || domain.levelKey}
                      </span>
                    </div>
                    <h4 className={`text-2xl font-bold mb-3 ${theme.text}`}>{t[domain.nameKey] || domain.nameKey}</h4>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4 text-sm ${theme.textSecondary} mb-4`}>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                        <Clock size={16} />
                        <span>{t[domain.durationKey] || domain.durationKey}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                        <BookOpen size={16} />
                        <span>{domain.modules.length} {t.modules}</span>
                      </div>
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-[#ec960b] font-semibold group-hover:translate-x-2 transition-transform`}>
                      <span>{t.courseModules}</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedDomain && (
          <>
            <button 
              type="button"
              onClick={() => setSelectedDomain(null)}
              className={`mb-8 ${theme.text} hover:text-[#ec960b] font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-lg transform hover:-translate-x-2 transition-all`}
            >
              <ArrowRight className="rotate-180" />
              <span>{t.backToDomains}</span>
            </button>
            
            <div className={`${theme.card} rounded-3xl p-10 shadow-2xl border ${theme.border}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h2 className={`text-4xl font-bold mb-3 ${theme.text}`}>{t[selectedDomain.nameKey] || selectedDomain.nameKey}</h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className={`px-4 py-2 bg-[#c17b3f]/20 dark:bg-[#c17b3f]/30 text-[#ec960b] dark:text-[#ec960b] rounded-full text-sm font-semibold`}>
                      {t[selectedDomain.levelKey] || selectedDomain.levelKey}
                    </span>
                    <span className={`px-4 py-2 ${theme.card} ${theme.border} border rounded-full text-sm font-semibold ${theme.text}`}>
                      {t[selectedDomain.durationKey] || selectedDomain.durationKey}
                    </span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleEnroll(t[courseCategories[selectedCategory].titleKey], t[selectedDomain.nameKey] || selectedDomain.nameKey)}
                  className="bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  {t.enrollInCourse}
                </button>
              </div>
              
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>{t.courseModules}</h3>
              <div className="space-y-4">
                {selectedDomain.modules.map((module, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl hover:bg-gradient-to-r hover:from-[#2970ae]/10 hover:to-[#ec960b]/10 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all group`}>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className={`font-semibold ${theme.text} text-lg`}>{module}</span>
                    </div>
                    <ChevronRight className={`${theme.textSecondary} group-hover:translate-x-2 transition-transform`} size={24} />
                  </div>
                ))}
              </div>

              {selectedDomain.nameKey === 'languageTraining' && (
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border ${theme.border}`}>
                    <h4 className={`text-xl font-bold mb-3 ${theme.text}`}>{t.languageOptionsTitle}</h4>
                    <p className={theme.textSecondary}>{t.languageList}</p>
                  </div>
                  <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border ${theme.border}`}>
                    <h4 className={`text-xl font-bold mb-3 ${theme.text}`}>{t.targetProfilesTitle}</h4>
                    <ul className={`space-y-2 ${theme.textSecondary}`}>
                      {languageTargetProfiles.map((profile) => (
                        <li key={profile.key} className="flex items-center gap-2">
                          <profile.icon size={16} className="text-[#ec960b]" />
                          <span>{t[profile.key]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </>
        )}
      </div>
    </div>
  );
}

