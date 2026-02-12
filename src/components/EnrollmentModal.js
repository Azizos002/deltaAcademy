import React, { useMemo } from 'react';
import { X, Sparkles, User, Mail, Phone, GraduationCap, BookOpen, ArrowRight, CheckCircle2, FolderTree } from 'lucide-react';
import { formCategories } from '../constants/formCatalog';
import { FormField, fieldClass } from './form/FormField';

export default function EnrollmentModal({
  showEnrollModal,
  setShowEnrollModal,
  theme,
  language,
  t,
  formData,
  setFormData,
  isSubmitting,
  submitSuccess,
  handleFormSubmit,
  handleBackdropClick
}) {
  const selectedCategory = useMemo(
    () => formCategories.find((item) => item.value === formData.category),
    [formData.category]
  );

  if (!showEnrollModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" style={{ animation: 'fadeIn 0.3s ease-out' }} onClick={handleBackdropClick}>
      <div className={`${theme.card} rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 custom-scrollbar`} style={{ animation: 'slideUp 0.5s ease-out' }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="enrollment-title" aria-describedby="enrollment-subtitle">
        <div className="sticky top-0 bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] p-6 rounded-t-3xl z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 id="enrollment-title" className={`text-3xl font-bold text-white flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}><Sparkles /><span>{t.enrollmentTitle}</span></h2>
              <p id="enrollment-subtitle" className="text-white/90 mt-1">{t.enrollmentSubtitle}</p>
            </div>
            <button type="button" onClick={() => setShowEnrollModal(false)} className="text-white hover:bg-white/20 p-2 rounded-full transition-all" aria-label={t.closeMenu}><X size={24} /></button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {!submitSuccess ? (
            <form onSubmit={handleFormSubmit} className="space-y-5 sm:space-y-6">
              <input type="text" tabIndex={-1} autoComplete="off" value={formData.honeypot || ''} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} className="hidden" aria-hidden="true" />

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <FormField id="enroll-name" label={t.fullName} icon={User} required theme={theme} language={language}>
                  <input id="enroll-name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} autoComplete="name" className={fieldClass(theme)} placeholder={t.fullName} />
                </FormField>
                <FormField id="enroll-email" label={t.email} icon={Mail} required theme={theme} language={language}>
                  <input id="enroll-email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} autoComplete="email" className={fieldClass(theme)} placeholder={t.yourEmail} />
                </FormField>
              </div>

              <FormField id="enroll-phone" label={t.phoneNumber} icon={Phone} required theme={theme} language={language}>
                <input id="enroll-phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} autoComplete="tel" className={fieldClass(theme)} placeholder="+216 12 345 678" />
              </FormField>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <FormField id="enroll-category" label={t.courseCategory} icon={FolderTree} required theme={theme} language={language}>
                  <select id="enroll-category" required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value, domain: '' })} className={fieldClass(theme)}>
                    <option value="">{t.selectCategory}</option>
                    {formCategories.map((category) => (
                      <option key={category.value} value={category.value}>{t[category.labelKey]}</option>
                    ))}
                  </select>
                </FormField>

                <FormField id="enroll-domain" label={t.domain} icon={GraduationCap} required theme={theme} language={language}>
                  <select id="enroll-domain" required value={formData.domain} onChange={(e) => setFormData({ ...formData, domain: e.target.value })} className={fieldClass(theme)} disabled={!selectedCategory}>
                    <option value="">{t.selectFormation}</option>
                    {(selectedCategory?.formations || []).map((formationKey) => (
                      <option key={formationKey} value={formationKey}>{t[formationKey]}</option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField id="enroll-message" label={t.additionalMessage} icon={BookOpen} theme={theme} language={language}>
                <textarea id="enroll-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={fieldClass(theme)} rows="4" placeholder={t.additionalMessagePlaceholder} />
              </FormField>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>{t.submitting}</span></>) : (<><span>{t.submitEnrollment}</span><ArrowRight /></>)}
              </button>
            </form>
          ) : (
            <div className="text-center py-12" role="status" aria-live="polite">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6" style={{ animation: 'bounce 1s infinite' }}><CheckCircle2 size={40} className="text-green-500" /></div>
              <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{t.enrollmentSuccess}</h3>
              <p className={theme.textSecondary}>{t.enrollmentSuccessDesc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
