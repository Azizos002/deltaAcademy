import React from 'react';
import { Sparkles, ArrowRight, ChevronRight, Users, Award, Star, GraduationCap, Clock } from 'lucide-react';
import { courseCategories, previousFormations } from '../constants/data';

export default function LandingPage({ 
  theme, 
  language, 
  isDark, 
  t, 
  navigateTo, 
  handleEnroll, 
  setSelectedCategory 
}) {
  const galleryImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
  ];

  return (
    <div className={`pt-16 ${theme.bg} transition-colors duration-500`}>
      {/* Hero Section */}
      <div className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${theme.gradient}`}>
        {/* Horizontal Scrolling Gallery Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className={`absolute inset-0 z-[5] bg-gradient-to-br ${isDark ? 'from-gray-900/70 via-gray-900/50 to-gray-900/70' : 'from-white/70 via-white/50 to-white/70'}`}></div>
          
          <div className="absolute inset-0 gallery-scroll-container">
            <div className="gallery-track">
              {[...galleryImages, ...galleryImages].map((imageUrl, i) => (
                <div key={`img-${i}`} className="gallery-image-wrapper">
                  <img
                    src={imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="gallery-image"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-[20] flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-5xl mx-auto animate-fadeInUp">
            <div className="mb-6 animate-float-gentle">
              <Sparkles size={48} className="mx-auto text-[#ec960b] animate-swing" />
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 ${theme.text} leading-tight`}>
              <span className="bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">
                {t.heroTitle1}
              </span>
              <br />
              <span className={theme.text}>{t.heroTitle2}</span>
            </h1>
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-10 max-w-3xl mx-auto leading-relaxed`}>
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => handleEnroll()}
                className={`bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}
              >
                <span>{t.startLearning}</span>
                <ArrowRight />
              </button>
              <button
                type="button"
                onClick={() => navigateTo('courses')}
                className={`${theme.card} ${theme.text} px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all border-2 ${theme.border}`}
              >
                {t.browseCourses}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 transition-transform">
          <ChevronRight className={`${theme.textSecondary} rotate-90`} size={32} />
        </div>
      </div>

      {/* Quick Overview - Course Categories */}
      <div className={`py-20 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
              {t.chooseYourPath}
            </h2>
            <p className={`text-xl ${theme.textSecondary}`}>{t.twoSpecializedTracks}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(courseCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <div
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    navigateTo('courses');
                  }}
                  className={`${theme.card} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 hover:-rotate-1 border-2 ${theme.border} group`}
                  style={{
                    animation: `scaleInBounce 0.6s ease-out ${key === 'certified' ? '0.1s' : '0.3s'} both`
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{t[category.titleKey]}</h3>
                  <p className={`${theme.textSecondary} mb-4`}>{t[category.subtitleKey]}</p>
                  <p className={`${theme.textSecondary} text-sm mb-6`}>
                    {category.domains.length} {t.specializedDomains}
                  </p>
                  <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-[#ec960b] font-semibold group-hover:translate-x-2 transition-transform`}>
                    <span>{t.exploreDomains}</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={`py-20 bg-gradient-to-r ${isDark ? 'from-gray-800 to-gray-900' : 'from-[#2970ae] to-[#ec960b]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "5,000+", label: "Active Students" },
              { icon: Award, number: "50+", label: "Courses" },
              { icon: Star, number: "4.9/5", label: "Rating" },
              { icon: GraduationCap, number: "95%", label: "Success Rate" }
            ].map((stat, i) => {
              const labels = [t.activeStudents, t.coursesCount, t.rating, t.successRate];
              return (
                <div
                  key={i}
                  className="text-center transform hover:scale-110 transition-all"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both`
                  }}
                >
                  <stat.icon className="mx-auto mb-4 text-white animate-float-gentle" size={48} />
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{labels[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Previous Formations Showcase */}
      <div className={`py-20 ${theme.bg} overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
              {t.previousFormations}
            </h2>
            <p className={`text-xl ${theme.textSecondary}`}>
              {t.previousFormationsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {previousFormations.slice(0, 3).map((formation, index) => (
              <div
                key={formation.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                style={{
                  animation: `slideInRotate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s both`
                }}
              >
                <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-[#ec960b]/50 transition-shadow duration-500">
                  <img
                    src={formation.image}
                    alt={t[formation.titleKey]}
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {t[formation.titleKey]}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      {t[formation.descKey]}
                    </p>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300`}>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-white/90`}>
                        <Users size={18} />
                        <span className="text-sm font-semibold">{formation.participants} {t.graduates}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-white/90`}>
                        <Award size={18} />
                        <span className="text-sm font-semibold">{formation.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                    <Sparkles className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigateTo('about')}
              className={`bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 mx-auto animate-pulse-slow`}
            >
              <span>{t.viewAllStories}</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Domains Preview */}
      <div className={`py-20 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
              {t.popularDomains}
            </h2>
            <p className={`text-xl ${theme.textSecondary}`}>{t.popularDomainsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...courseCategories.certified.domains.slice(0, 2), ...courseCategories.corporate.domains.slice(0, 2)].map((domain, i) => {
              const DomainIcon = domain.icon;
              return (
                <div
                  key={i}
                  onClick={() => handleEnroll('', domain.name)}
                  className={`${theme.card} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-2 border ${theme.border} group`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${i * 0.1}s both`
                  }}
                >
                  <DomainIcon className="text-[#ec960b] mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className={`text-xl font-bold ${theme.text} mb-2`}>{t[domain.nameKey] || domain.nameKey}</h4>
                  <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-sm ${theme.textSecondary} mb-3`}>
                    <Clock size={16} />
                    <span>{t[domain.durationKey] || domain.durationKey}</span>
                  </div>
                  <div className={`text-xs ${theme.textSecondary} mb-4`}>{domain.modules.length} {t.modules}</div>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnroll(t[courseCategories.certified.titleKey], t[domain.nameKey] || domain.nameKey);
                    }}
                    className="w-full bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    {t.enrollNow}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-20 bg-gradient-to-br ${isDark ? 'from-[#2970ae]/80 via-[#ec960b]/80 to-[#c17b3f]/80' : 'from-[#2970ae] via-[#ec960b] to-[#c17b3f]'}`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <Sparkles size={64} className="mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.readyToTransform}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {t.joinThousands}
          </p>
          <button
            type="button"
            onClick={() => handleEnroll()}
            className={`bg-white text-[#ec960b] px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 mx-auto`}
          >
            <span>{t.getStartedToday}</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
