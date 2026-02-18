import React from 'react';
import { ChevronRight, MapPin, Phone, Mail, Clock, Facebook, Instagram, Music2, MessageCircle, Wrench } from 'lucide-react';
import logo from '../logo_delta.png';

export default function Footer({ theme, language, t, navigateTo }) {
  const mixedPrograms = [
    t.plumbingAndHvac,
    t.mechanicalDesign,
    t.cuisineFastFood,
    t.pastryBakery,
    t.languageTraining,
    t.webDevelopment
  ];

  const socials = [
    {
      icon: Facebook,
      link: "https://facebook.com/deltaacademy",
      label: "Facebook",
    },
    {
      icon: Instagram,
      link: "https://instagram.com/deltaacademy",
      label: "Instagram",
    },
    { icon: Music2, link: "https://tiktok.com/@deltaacademy", label: "TikTok" },
    {
      icon: MessageCircle,
      link: "https://wa.me/21653363600",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 mb-6`}>
              <img src={logo} alt="Delta Academy Logo" className="w-12 h-12 object-contain" width="48" height="48" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">{t.brand}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{t.footerDesc}</p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
              {socials.map((social) => (
                <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec960b]">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {[{ nameKey: 'home', page: 'home' }, { nameKey: 'allCourses', page: 'courses' }, { nameKey: 'aboutUs', page: 'about' }, { nameKey: 'contact', page: 'contact' }].map((link) => (
                <li key={link.nameKey}>
                  <button type="button" onClick={() => navigateTo(link.page)} className={`text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 group`}>
                    <ChevronRight size={16} className="group-hover:text-[#ec960b]" />
                    <span>{t[link.nameKey]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.ourPrograms}</h3>
            <ul className="space-y-3">
              {mixedPrograms.map((course) => (
                <li key={course}>
                  <button type="button" onClick={() => navigateTo('courses')} className={`text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 group`}>
                    <Wrench size={14} className="group-hover:text-[#ec960b]" />
                    <span>{course}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.getInTouch}</h3>
            <ul className="space-y-4">
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}><MapPin size={20} className="text-[#ec960b] flex-shrink-0 mt-1" /><span className="text-gray-400 text-sm whitespace-pre-line">{t.addressText}</span></li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}><Phone size={20} className="text-[#ec960b] flex-shrink-0 mt-1" /><span className="text-gray-400 text-sm">+216 53 363 600</span></li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}><Mail size={20} className="text-[#ec960b] flex-shrink-0 mt-1" /><span className="text-gray-400 text-sm">deltacademy2026@gmail.com</span></li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}><Clock size={20} className="text-[#ec960b] flex-shrink-0 mt-1" /><span className="text-gray-400 text-sm whitespace-pre-line">{t.officeHours}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">© {new Date().getFullYear()} {t.allRightsReserved}</div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button type="button" className="text-gray-400 hover:text-white transition-colors">{t.privacyPolicy}</button>
            <button type="button" className="text-gray-400 hover:text-white transition-colors">{t.termsOfService}</button>
            <button type="button" className="text-gray-400 hover:text-white transition-colors">{t.cookiePolicy}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
