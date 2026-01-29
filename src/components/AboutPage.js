import React from 'react';
import { Award, Users, Target, Clock, Briefcase, Star, TrendingUp, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { previousFormations } from '../constants/data';

export default function AboutPage({
  theme,
  language,
  t,
  isDark
}) {
  return (
    <div className={`pt-24 pb-16 min-h-screen ${theme.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-5xl md:text-6xl font-bold mb-8 text-center ${theme.text}`}>{t.aboutTitle}</h1>

        {/* Main About Content */}
        <div className={`${theme.card} rounded-3xl p-10 shadow-xl border ${theme.border} mb-16`}>
          <div className="prose prose-lg max-w-none">
            <p className={`${theme.text} mb-6 leading-relaxed text-lg`}>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">{t.brand}</span> {t.aboutIntro}
            </p>
            <p className={`${theme.text} mb-6 leading-relaxed text-lg`}>
              {t.aboutPara1} <strong>{t.aboutPara1Bold1}</strong> {t.aboutPara1Text} <strong>{t.aboutPara1Bold2}</strong> {t.aboutPara1Text2}
            </p>
            <p className={`${theme.text} mb-6 leading-relaxed text-lg`}>
              {t.aboutPara2}
            </p>
            <p className={`${theme.text} mb-6 leading-relaxed text-lg`}>
              {t.aboutPara3}
            </p>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: Award, title: t.certifiedPrograms, desc: t.certifiedProgramsDesc },
                { icon: Users, title: t.expertInstructors, desc: t.expertInstructorsDesc },
                { icon: Target, title: t.jobPlacement, desc: t.jobPlacementDesc },
                { icon: Clock, title: t.flexibleLearning, desc: t.flexibleLearningDesc },
                { icon: Briefcase, title: t.corporateTraining, desc: t.corporateTrainingDesc },
                { icon: Star, title: t.qualityEducation, desc: t.qualityEducationDesc }
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`${isDark ? 'bg-gray-700' : 'bg-gradient-to-br from-[#2970ae]/10 to-[#ec960b]/10'} p-6 rounded-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`
                  }}
                >
                  <feature.icon className="text-[#ec960b] mb-3 animate-float-gentle" size={32} />
                  <h4 className={`font-bold ${theme.text} mb-2`}>{feature.title}</h4>
                  <p className={`${theme.textSecondary} text-sm`}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Previous Formations Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
              {t.successStories}
            </h2>
            <p className={`text-xl ${theme.textSecondary}`}>
              {t.successStoriesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousFormations.map((formation, index) => (
              <div
                key={formation.id}
                className={`group relative ${theme.card} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${theme.border} transform hover:scale-105`}
                style={{
                  animation: `scaleInBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s both`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={formation.image}
                    alt={t[formation.titleKey]}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm leading-relaxed">
                        {t[formation.descKey]}
                      </p>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4 mt-3 text-white/90 text-sm`}>
                        <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                          <Users size={16} />
                          <span>{formation.participants} {t.graduates}</span>
                        </div>
                        <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                          <Award size={16} />
                          <span>{formation.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold ${theme.text} mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2970ae] group-hover:to-[#ec960b] transition-all`}>
                    {t[formation.titleKey]}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme.textSecondary}`}>
                      {formation.participants} {t.participants}
                    </span>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-[#c17b3f]/30 text-[#ec960b]' : 'bg-[#c17b3f]/20 text-[#ec960b]'}`}>
                      {formation.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`${theme.card} rounded-3xl p-10 shadow-xl border ${theme.border}`}>
          <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>{t.whyTrust}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t.provenTrackRecord,
                description: t.provenTrackRecordDesc,
                icon: TrendingUp
              },
              {
                title: t.industryPartnerships,
                description: t.industryPartnershipsDesc,
                icon: Building2
              },
              {
                title: t.expertFaculty,
                description: t.expertFacultyDesc,
                icon: GraduationCap
              },
              {
                title: t.lifetimeSupport,
                description: t.lifetimeSupportDesc,
                icon: CheckCircle2
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`flex ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4 transform hover:translate-x-2 transition-all duration-300`}
                style={{
                  animation: `slideInRotate 0.6s ease-out ${i * 0.15}s both`
                }}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2970ae] to-[#ec960b] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${theme.text} mb-2`}>{item.title}</h4>
                  <p className={`${theme.textSecondary} text-sm`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
