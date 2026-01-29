import React from 'react';
import { X, Sparkles, User, Mail, Phone, GraduationCap, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

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
  if (!showEnrollModal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
      onClick={handleBackdropClick}
    >
      <div 
        className={`${theme.card} rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500`}
        style={{ animation: 'slideUp 0.5s ease-out' }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && document.activeElement.tagName === 'INPUT') {
            e.stopPropagation();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-title"
        aria-describedby="enrollment-subtitle"
      >
        <div className="sticky top-0 bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] p-6 rounded-t-3xl z-10">
          <div className="flex justify-between items-center">
            <div>
              <h2 id="enrollment-title" className={`text-3xl font-bold text-white flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                <Sparkles />
                <span>{t.enrollmentTitle}</span>
              </h2>
              <p id="enrollment-subtitle" className="text-white/90 mt-1">{t.enrollmentSubtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowEnrollModal(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
              aria-label="Close enrollment form"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-8">
          {!submitSuccess ? (
            <form 
              onSubmit={handleFormSubmit} 
              className="space-y-6" 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'TEXTAREA') {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="enroll-name" className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                    <User size={18} />
                    <span>{t.fullName} *</span>
                  </label>
                  <input
                    id="enroll-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                      }
                    }}
                    autoComplete="name"
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    placeholder={t.fullName}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="enroll-email" className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                    <Mail size={18} />
                    <span>{t.email} *</span>
                  </label>
                  <input
                    id="enroll-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                      }
                    }}
                    autoComplete="email"
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    placeholder={t.yourEmail}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="enroll-phone" className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                  <Phone size={18} />
                  <span>{t.phoneNumber} *</span>
                </label>
                <input
                  id="enroll-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    e.stopPropagation();
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                  autoComplete="tel"
                  className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                  placeholder="+216 12 345 678"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="enroll-category" className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                    <GraduationCap size={18} />
                    <span>{t.courseCategory} *</span>
                  </label>
                  <select
                    id="enroll-category"
                    required
                    value={formData.category}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, category: e.target.value });
                    }}
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                  >
                    <option value="">{t.selectCategory}</option>
                    <option value="Certified Courses">{t.certifiedCourses}</option>
                    <option value="Corporate Training">{t.corporateTraining}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="enroll-domain" className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                    <BookOpen size={18} />
                    <span>{t.domain}</span>
                  </label>
                  <input
                    id="enroll-domain"
                    type="text"
                    value={formData.domain}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, domain: e.target.value });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                      }
                    }}
                    autoComplete="off"
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    placeholder={t.domain}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="enroll-message" className={`${theme.text} font-semibold`}>{t.additionalMessage}</label>
                <textarea
                  id="enroll-message"
                  value={formData.message}
                  onChange={(e) => {
                    e.stopPropagation();
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  autoComplete="off"
                  className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                  rows="4"
                  placeholder={t.additionalMessagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{t.submitEnrollment}</span>
                    <ArrowRight />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-12" role="status" aria-live="polite">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6" style={{ animation: 'bounce 1s infinite' }}>
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{t.enrollmentSuccess}</h3>
              <p className={theme.textSecondary}>{t.enrollmentSuccessDesc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
