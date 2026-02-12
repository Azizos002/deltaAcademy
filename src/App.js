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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
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

  const buildMailtoLink = (to, subject, body) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleFormSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!e || !e.preventDefault) return false;
    setIsSubmitting(true);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send this to your backend
    const mailtoLink = buildMailtoLink(
      'azizdhifaoui06@gmail.com',
      `New Enrollment: ${formData.category}`,
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nDomain: ${formData.domain}\nMessage: ${formData.message}`
    );
    
    console.log('Form Data:', formData);
    console.log('Mailto Link:', mailtoLink);
    
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
        message: ''
      });
    }, 2000);
  };

  const handleContactSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!e || !e.preventDefault) return false;
    setIsContactSubmitting(true);
    setContactSubmitSuccess(false);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send this to your backend
    const mailtoLink = buildMailtoLink(
      'info@deltaacademy.tn',
      `Contact Form: ${contactFormData.name}`,
      `Name: ${contactFormData.name}\nEmail: ${contactFormData.email}\nMessage: ${contactFormData.message}`
    );
    
    console.log('Contact Form Data:', contactFormData);
    console.log('Mailto Link:', mailtoLink);
    
    setIsContactSubmitting(false);
    
    // Reset form
    setContactFormData({
      name: '',
      email: '',
      message: ''
    });
    
    setContactSubmitSuccess(true);
    setTimeout(() => setContactSubmitSuccess(false), 5000);
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
