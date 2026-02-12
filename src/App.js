import React, { useState, useCallback } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { translations } from './constants/translations';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import './styles/animations.css';

export default function ModernTrainingCenter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('delta-language') || 'fr'); // fr, en, ar
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    domain: '',
    honeypot: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    category: '',
    domain: '',
    honeypot: '',
    message: ''
  });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSubmitSuccess, setContactSubmitSuccess] = useState(false);

  // Get translations for current language
  const t = translations[language] || translations.fr;

  React.useEffect(() => {
    localStorage.setItem('delta-language', language);
    document.documentElement.lang = language;
  }, [language]);
  
  // Use theme hook
  const theme = useTheme(isDark);

  const handleEnroll = (category = '', domain = '') => {
    setFormData((prev) => ({ ...prev, category, domain }));
    setShowEnrollModal(true);
    setSubmitSuccess(false);
  };

  const submitFormToApi = async (payload) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error || 'Submission failed');
    }
    return data;
  };

  const handleFormSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!e || !e.preventDefault) return false;
    setIsSubmitting(true);
    
    try {
      await submitFormToApi({
        formType: 'enrollment',
        language,
        ...formData
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setShowEnrollModal(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          domain: '',
          honeypot: '',
          message: ''
        });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      alert(error.message || t.submitError);
    }
  };

  const handleContactSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!e || !e.preventDefault) return false;
    setIsContactSubmitting(true);
    setContactSubmitSuccess(false);
    
    try {
      await submitFormToApi({
        formType: 'contact',
        language,
        ...contactFormData
      });

      setIsContactSubmitting(false);

      setContactFormData({
        name: '',
        email: '',
        category: '',
        domain: '',
        honeypot: '',
        message: ''
      });

      setContactSubmitSuccess(true);
      setTimeout(() => setContactSubmitSuccess(false), 5000);
    } catch (error) {
      setIsContactSubmitting(false);
      alert(error.message || t.submitError);
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page !== 'courses') {
      setSelectedCategory(null);
      setSelectedDomain(null);
    }
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enrollment Modal - Memoized handlers to prevent recreation
  const handleBackdropClick = useCallback((e) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget) {
      setShowEnrollModal(false);
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-500`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar
        theme={theme}
        language={language}
        isDark={isDark}
        t={t}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateTo={navigateTo}
        handleEnroll={handleEnroll}
        setLanguage={setLanguage}
        setIsDark={setIsDark}
      />
      
      <EnrollmentModal
        showEnrollModal={showEnrollModal}
        setShowEnrollModal={setShowEnrollModal}
        theme={theme}
        language={language}
        t={t}
        formData={formData}
        setFormData={setFormData}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        handleFormSubmit={handleFormSubmit}
        handleBackdropClick={handleBackdropClick}
      />
      
      {currentPage === 'home' && (
        <LandingPage
          theme={theme}
          language={language}
          isDark={isDark}
          t={t}
          navigateTo={navigateTo}
          handleEnroll={handleEnroll}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      
      {currentPage === 'courses' && (
        <CoursesPage
          theme={theme}
          language={language}
          t={t}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDomain={selectedDomain}
          setSelectedDomain={setSelectedDomain}
          handleEnroll={handleEnroll}
          isDark={isDark}
        />
      )}
      
      {currentPage === 'about' && (
        <AboutPage
          theme={theme}
          language={language}
          t={t}
          isDark={isDark}
        />
      )}
      
      {currentPage === 'contact' && (
        <ContactPage
          theme={theme}
          language={language}
          t={t}
          contactFormData={contactFormData}
          setContactFormData={setContactFormData}
          isContactSubmitting={isContactSubmitting}
          contactSubmitSuccess={contactSubmitSuccess}
          handleContactSubmit={handleContactSubmit}
        />
      )}
      
      <Footer
        theme={theme}
        language={language}
        t={t}
        navigateTo={navigateTo}
        isDark={isDark}
      />
      
      <SpeedInsights />
    </div>
  );
}
