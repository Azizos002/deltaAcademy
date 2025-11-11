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
  const [language, setLanguage] = useState('en'); // en, fr, ar
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

  // Get translations for current language
  const t = translations[language];

  // Use theme hook
  const theme = useTheme(isDark);

  const handleEnroll = (category = '', domain = '') => {
    setFormData({ ...formData, category, domain });
    setShowEnrollModal(true);
    setSubmitSuccess(false);
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
    const mailtoLink = `mailto:azizdhifaoui06@gmail.com?subject=New Enrollment: ${formData.category}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACategory: ${formData.category}%0D%0ADomain: ${formData.domain}%0D%0AMessage: ${formData.message}`;
    
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
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send this to your backend
    const mailtoLink = `mailto:info@deltaacademy.tn?subject=Contact Form: ${contactFormData.name}&body=Name: ${contactFormData.name}%0D%0AEmail: ${contactFormData.email}%0D%0AMessage: ${contactFormData.message}`;
    
    console.log('Contact Form Data:', contactFormData);
    console.log('Mailto Link:', mailtoLink);
    
    setIsContactSubmitting(false);
    
    // Reset form
    setContactFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message (you can add a toast notification here)
    alert('Message sent successfully! We will contact you soon.');
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
