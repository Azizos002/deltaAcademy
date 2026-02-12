import React, { useMemo } from 'react';
import { User, Mail, MapPin, Phone, Facebook, Instagram, Music2, MessageCircle, FolderTree, GraduationCap } from 'lucide-react';
import { formCategories } from '../constants/formCatalog';
import { FormField, fieldClass } from './form/FormField';

export default function ContactPage({
  theme,
  language,
  t,
  contactFormData,
  setContactFormData,
  isContactSubmitting,
  contactSubmitSuccess,
  handleContactSubmit
}) {
  const selectedCategory = useMemo(
    () => formCategories.find((item) => item.value === contactFormData.category),
    [contactFormData.category]
  );

  return (
    <div className={`pt-20 md:pt-24 pb-12 md:pb-16 min-h-screen ${theme.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 ${theme.text} text-center`}>{t.getInTouch}</h1>
        <p className={`text-base sm:text-lg md:text-xl ${theme.textSecondary} text-center mb-10 md:mb-16`}>
          {t.getInTouchSubtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className={`${theme.card} rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border ${theme.border}`}>
            <h2 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-6`}>{t.sendMessage}</h2>
            <form onSubmit={handleContactSubmit} className="space-y-5 md:space-y-6 max-h-[65vh] overflow-y-auto custom-scrollbar pr-1">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={contactFormData.honeypot || ''}
                onChange={(e) => setContactFormData({ ...contactFormData, honeypot: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />

              <FormField id="contact-name" label={t.name} icon={User} required theme={theme} language={language}>
                <input
                  id="contact-name"
                  type="text"
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                  autoComplete="name"
                  className={fieldClass(theme)}
                  placeholder={t.yourName}
                  required
                />
              </FormField>

              <FormField id="contact-email" label={t.email} icon={Mail} required theme={theme} language={language}>
                <input
                  id="contact-email"
                  type="email"
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                  autoComplete="email"
                  className={fieldClass(theme)}
                  placeholder={t.yourEmail}
                  required
                />
              </FormField>

              <FormField id="contact-category" label={t.courseCategory} icon={FolderTree} required theme={theme} language={language}>
                <select
                  id="contact-category"
                  value={contactFormData.category}
                  onChange={(e) => setContactFormData({ ...contactFormData, category: e.target.value, domain: '' })}
                  className={fieldClass(theme)}
                  required
                >
                  <option value="">{t.selectCategory}</option>
                  {formCategories.map((category) => (
                    <option key={category.value} value={category.value}>{t[category.labelKey]}</option>
                  ))}
                </select>
              </FormField>

              <FormField id="contact-domain" label={t.domain} icon={GraduationCap} required theme={theme} language={language}>
                <select
                  id="contact-domain"
                  value={contactFormData.domain}
                  onChange={(e) => setContactFormData({ ...contactFormData, domain: e.target.value })}
                  className={fieldClass(theme)}
                  disabled={!selectedCategory}
                  required
                >
                  <option value="">{t.selectFormation}</option>
                  {(selectedCategory?.formations || []).map((formationKey) => (
                    <option key={formationKey} value={formationKey}>{t[formationKey]}</option>
                  ))}
                </select>
              </FormField>

              <FormField id="contact-message" label={t.message} theme={theme} language={language}>
                <textarea
                  id="contact-message"
                  value={contactFormData.message}
                  onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                  className={fieldClass(theme)}
                  rows="5"
                  placeholder={t.yourMessage}
                  required
                />
              </FormField>

              {contactSubmitSuccess && (
                <div role="status" aria-live="polite" className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  {t.contactSuccessMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isContactSubmitting}
                className="w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isContactSubmitting ? t.sending : t.sendMessage}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className={`${theme.card} rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border ${theme.border}`}>
              <h2 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-6`}>{t.contactInfo}</h2>
              <div className="space-y-5">
                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"><MapPin className="text-white" size={22} /></div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.address}</h4>
                    <p className={`${theme.textSecondary} text-sm whitespace-pre-line`}>{t.addressText}</p>
                  </div>
                </div>
                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ec960b] to-[#c17b3f] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"><Phone className="text-white" size={22} /></div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.phone}</h4>
                    <p className={`${theme.textSecondary} text-sm`}>+216 XX XXX XXX<br />+216 XX XXX XXX</p>
                  </div>
                </div>
                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c17b3f] to-[#2970ae] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"><Mail className="text-white" size={22} /></div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.email}</h4>
                    <p className={`${theme.textSecondary} text-sm`}>deltacademy2026@gmail.com<br />info@deltaacademy.tn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${theme.card} rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border ${theme.border}`}>
              <h2 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-4`}>{t.followUs}</h2>
              <p className={`${theme.textSecondary} mb-6 text-sm md:text-base`}>{t.followUsDesc}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Facebook', icon: Facebook, color: 'from-[#1d4ed8] to-[#2563eb]', link: 'https://facebook.com/deltaacademy' },
                  { name: 'Instagram', icon: Instagram, color: 'from-[#ec960b] via-[#ec960b] to-[#c17b3f]', link: 'https://instagram.com/deltaacademy' },
                  { name: 'TikTok', icon: Music2, color: 'from-gray-900 to-gray-950', link: 'https://tiktok.com/@deltaacademy' },
                  { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-600 to-green-700', link: 'https://wa.me/216XXXXXXXX' }
                ].map((social) => (
                  <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={`bg-gradient-to-r ${social.color} text-white p-4 sm:p-5 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                    <div className="flex items-center justify-center mb-2"><social.icon size={28} className="text-white" /></div>
                    <div className="font-bold text-sm sm:text-base">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`${theme.card} rounded-3xl overflow-hidden shadow-2xl border ${theme.border}`}>
          <div className="p-6 sm:p-8">
            <h2 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-3`}>{t.visitLocation}</h2>
            <p className={`${theme.textSecondary} mb-4 text-sm md:text-base`}>{t.visitLocationDesc}</p>
          </div>
          <div className="w-full h-72 sm:h-80 md:h-96 relative">
            <iframe title="Delta Academy Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102499.12944864944!2d10.165919!3d36.806389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
