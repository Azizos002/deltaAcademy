import React from 'react';
import { User, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage({
  theme,
  language,
  t,
  contactFormData,
  setContactFormData,
  isContactSubmitting,
  handleContactSubmit
}) {
  return (
    <div className={`pt-24 pb-16 min-h-screen ${theme.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${theme.text} text-center`}>{t.getInTouch}</h1>
        <p className={`text-xl ${theme.textSecondary} text-center mb-16`}>
          {t.getInTouchSubtitle}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className={`${theme.card} rounded-3xl p-10 shadow-xl border ${theme.border}`}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-6`}>{t.sendMessage}</h2>
            <form 
              onSubmit={handleContactSubmit} 
              className="space-y-6" 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'TEXTAREA') {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              <div>
                <label className={`block ${theme.text} font-semibold mb-3 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                  <User size={20} />
                  <span>{t.name}</span>
                </label>
                <input 
                  type="text" 
                  value={contactFormData.name}
                  onChange={(e) => {
                    e.stopPropagation();
                    setContactFormData({ ...contactFormData, name: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full px-4 py-3 ${theme.card} border-2 ${theme.border} rounded-xl focus:ring-2 focus:ring-[#ec960b] outline-none transition-all ${theme.text}`} 
                  placeholder={t.yourName}
                  required
                />
              </div>
              <div>
                <label className={`block ${theme.text} font-semibold mb-3 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                  <Mail size={20} />
                  <span>{t.email}</span>
                </label>
                <input 
                  type="email" 
                  value={contactFormData.email}
                  onChange={(e) => {
                    e.stopPropagation();
                    setContactFormData({ ...contactFormData, email: e.target.value });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full px-4 py-3 ${theme.card} border-2 ${theme.border} rounded-xl focus:ring-2 focus:ring-[#ec960b] outline-none transition-all ${theme.text}`} 
                  placeholder={t.yourEmail}
                  required
                />
              </div>
              <div>
                <label className={`block ${theme.text} font-semibold mb-3`}>{t.message}</label>
                <textarea 
                  value={contactFormData.message}
                  onChange={(e) => {
                    e.stopPropagation();
                    setContactFormData({ ...contactFormData, message: e.target.value });
                  }}
                  className={`w-full px-4 py-3 ${theme.card} border-2 ${theme.border} rounded-xl focus:ring-2 focus:ring-[#ec960b] outline-none transition-all ${theme.text}`} 
                  rows="6" 
                  placeholder={t.yourMessage}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isContactSubmitting}
                className={`w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isContactSubmitting ? 'Sending...' : t.sendMessage}
              </button>
            </form>
          </div>

          {/* Contact Information & Social Media */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className={`${theme.card} rounded-3xl p-10 shadow-xl border ${theme.border}`}>
              <h2 className={`text-3xl font-bold ${theme.text} mb-6`}>{t.contactInfo}</h2>
              <div className="space-y-6">
                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.address}</h4>
                    <p className={`${theme.textSecondary} text-sm whitespace-pre-line`}>
                      {t.addressText}
                    </p>
                  </div>
                </div>

                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ec960b] to-[#c17b3f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.phone}</h4>
                    <p className={`${theme.textSecondary} text-sm`}>
                      +216 XX XXX XXX<br />
                      +216 XX XXX XXX
                    </p>
                  </div>
                </div>

                <div className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c17b3f] to-[#2970ae] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${theme.text} mb-1`}>{t.email}</h4>
                    <p className={`${theme.textSecondary} text-sm`}>
                      info@deltaacademy.tn<br />
                      contact@deltaacademy.tn
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={`${theme.card} rounded-3xl p-10 shadow-xl border ${theme.border}`}>
              <h2 className={`text-3xl font-bold ${theme.text} mb-6`}>{t.followUs}</h2>
              <p className={`${theme.textSecondary} mb-6`}>
                {t.followUsDesc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: 'Facebook',
                    icon: '📘',
                    color: 'from-[#2970ae] to-[#2970ae]/90',
                    hoverColor: 'hover:from-[#c17b3f] hover:to-[#c17b3f]/90',
                    link: 'https://facebook.com/deltaacademy'
                  },
                  {
                    name: 'Instagram',
                    icon: '📷',
                    color: 'from-[#ec960b] via-[#ec960b] to-[#c17b3f]',
                    hoverColor: 'hover:from-[#c17b3f] hover:via-[#c17b3f] hover:to-[#ec960b]',
                    link: 'https://instagram.com/deltaacademy'
                  },
                  {
                    name: 'TikTok',
                    icon: '🎵',
                    color: 'from-gray-900 to-gray-950',
                    hoverColor: 'hover:from-[#c17b3f] hover:to-[#c17b3f]/90',
                    link: 'https://tiktok.com/@deltaacademy'
                  },
                  {
                    name: 'WhatsApp',
                    icon: '💬',
                    color: 'from-green-600 to-green-700',
                    hoverColor: 'hover:from-[#c17b3f] hover:to-[#c17b3f]/90',
                    link: 'https://wa.me/216XXXXXXXX'
                  }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white p-6 rounded-2xl text-center transform hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                    style={{
                      animation: `scaleInBounce 0.5s ease-out ${i * 0.1}s both`
                    }}
                  >
                    <div className="text-4xl mb-2 transform group-hover:scale-125 group-hover:rotate-12 transition-transform">
                      {social.icon}
                    </div>
                    <div className="font-bold text-lg">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`${theme.card} rounded-3xl overflow-hidden shadow-2xl border ${theme.border}`}>
          <div className="p-8">
            <h2 className={`text-3xl font-bold ${theme.text} mb-4`}>{t.visitLocation}</h2>
            <p className={`${theme.textSecondary} mb-6`}>
              {t.visitLocationDesc}
            </p>
          </div>
          <div className="w-full h-96 relative">
            <iframe
              title="Delta Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102499.12944864944!2d10.165919!3d36.806389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

