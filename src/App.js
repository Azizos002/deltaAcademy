import React, { useState } from 'react';
import { Menu, X, BookOpen, Award, Briefcase, ChevronRight, Users, Star, TrendingUp, Moon, Sun, Sparkles, Zap, Target, Clock, Mail, Phone, User, GraduationCap, Building2, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import logo from './logo_delta.png';
import { SpeedInsights } from "@vercel/speed-insights/react"

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

  // Translations Object
  const translations = {
    en: {
      // Navbar
      brand: "Delta Academy",
      home: "Home",
      courses: "Courses",
      about: "About",
      contact: "Contact",
      enrollNow: "Enroll Now",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",

      // Hero Section
      heroTitle1: "Transform Your",
      heroTitle2: "Future Today",
      heroSubtitle: "Professional training & certification programs designed for students and working professionals",
      startLearning: "Start Learning",
      browseCourses: "Browse Courses",

      // Course Categories
      chooseYourPath: "Choose Your Path",
      twoSpecializedTracks: "Two specialized tracks for your success",
      certifiedCourses: "Certified Courses",
      certifiedCoursesSubtitle: "For Students & Certification Seekers",
      corporateTraining: "Corporate Training",
      corporateTrainingSubtitle: "For Working Professionals",
      exploreDomains: "Explore Domains",
      specializedDomains: "specialized domains available",

      // Stats
      activeStudents: "Active Students",
      coursesCount: "Courses",
      rating: "Rating",
      successRate: "Success Rate",

      // Previous Formations
      previousFormations: "Our Previous Formations",
      previousFormationsSubtitle: "Witness the success stories that built careers and transformed lives",
      viewAllStories: "View All Success Stories",
      graduates: "Graduates",

      // Popular Domains
      popularDomains: "Popular Domains",
      popularDomainsSubtitle: "Start with our most in-demand courses",
      modules: "modules",

      // Final CTA
      readyToTransform: "Ready to Transform Your Career?",
      joinThousands: "Join thousands of successful learners who have achieved their goals with us",
      getStartedToday: "Get Started Today",

      // Course Domains
      digitalMarketing: "Digital Marketing",
      webDevelopment: "Web Development",
      graphicDesign: "Graphic Design",
      dataAnalysis: "Data Analysis",
      accountingFinance: "Accounting & Finance",
      projectManagement: "Project Management",
      leadershipManagement: "Leadership & Management",
      technicalSkills: "Technical Skills",

      // Levels
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      professional: "Professional",
      executive: "Executive",

      // About Page
      aboutTitle: "About Delta Academy",
      aboutIntro: "is a premier training center dedicated to empowering individuals and professionals through cutting-edge education and practical skills development. Since our establishment, we have been at the forefront of professional training in Tunisia, transforming careers and shaping futures.",
      aboutPara1: "We specialize in two distinct training tracks:",
      aboutPara1Bold1: "Certified Courses",
      aboutPara1Text: "for students and certification seekers looking to break into their desired fields, and",
      aboutPara1Bold2: "Corporate Training",
      aboutPara1Text2: "for working professionals aiming to advance their careers and stay competitive in today's rapidly evolving job market.",
      aboutPara2: "Our expert instructors bring real-world experience to the classroom, ensuring that every course is packed with practical insights and industry-relevant knowledge. With state-of-the-art facilities, hands-on projects, and a strong focus on job placement, we've helped over 5,000 students and professionals achieve their career goals.",
      aboutPara3: "At Delta Academy, we believe that education should be accessible, engaging, and results-driven. Our mission is to bridge the gap between academic learning and industry requirements, providing our students with the tools, knowledge, and confidence they need to succeed in their chosen fields.",

      // About Features
      certifiedPrograms: "Certified Programs",
      certifiedProgramsDesc: "Industry-recognized certifications",
      expertInstructors: "Expert Instructors",
      expertInstructorsDesc: "Learn from industry professionals",
      jobPlacement: "Job Placement",
      jobPlacementDesc: "95% placement success rate",
      flexibleLearning: "Flexible Learning",
      flexibleLearningDesc: "Weekend & evening batches",
      corporateTrainingDesc: "Customized enterprise solutions",
      qualityEducation: "Quality Education",
      qualityEducationDesc: "4.9/5 average rating",

      // Success Stories
      successStories: "Our Success Stories",
      successStoriesSubtitle: "Discover the transformative programs that have shaped thousands of careers",
      participants: "participants",

      // Trust Indicators
      whyTrust: "Why Trust Delta Academy?",
      provenTrackRecord: "Proven Track Record",
      provenTrackRecordDesc: "Over 5,000+ successful graduates working in leading companies across various industries",
      industryPartnerships: "Industry Partnerships",
      industryPartnershipsDesc: "Collaborations with 50+ companies ensuring our curriculum meets real market demands",
      expertFaculty: "Expert Faculty",
      expertFacultyDesc: "Our instructors are seasoned professionals with 10+ years of industry experience",
      lifetimeSupport: "Lifetime Support",
      lifetimeSupportDesc: "Access to our alumni network, job placement assistance, and continuous learning resources",

      // Contact Page
      getInTouch: "Get in Touch",
      getInTouchSubtitle: "We'd love to hear from you. Reach out to us through any of these channels.",
      sendMessage: "Send us a Message",
      name: "Name",
      email: "Email",
      message: "Message",
      yourName: "Your name",
      yourEmail: "your@email.com",
      yourMessage: "Your message...",
      contactInfo: "Contact Information",
      address: "Address",
      addressText: "Tunis, Tunisia\nAvenue Habib Bourguiba",
      phone: "Phone",
      followUs: "Follow Us",
      followUsDesc: "Stay connected with us on social media for updates, tips, and success stories",
      visitLocation: "Visit Our Location",
      visitLocationDesc: "Find us in the heart of Tunis. We're easily accessible by public transport.",

      // Footer
      footerDesc: "Empowering individuals and professionals through cutting-edge education and practical skills development.",
      quickLinks: "Quick Links",
      allCourses: "All Courses",
      aboutUs: "About Us",
      ourPrograms: "Our Programs",
      corporateFinance: "Corporate Finance",
      leadershipTraining: "Leadership Training",
      officeHours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
      allRightsReserved: "Delta Academy. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      madeWithLove: "Made with",
      forLearners: "for learners worldwide",

      // Enrollment Modal
      enrollmentTitle: "Enroll Now",
      enrollmentSubtitle: "Start your learning journey today",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      courseCategory: "Course Category",
      selectCategory: "Select category",
      domain: "Domain",
      additionalMessage: "Additional Message",
      additionalMessagePlaceholder: "Tell us about your goals and expectations...",
      submitEnrollment: "Submit Enrollment",
      submitting: "Submitting...",
      enrollmentSuccess: "Enrollment Submitted!",
      enrollmentSuccessDesc: "We'll contact you shortly via email",

      // Course Page
      allCoursesTitle: "All Courses",
      allCoursesSubtitle: "Discover your perfect learning path",
      viewAllDomains: "View All Domains",
      expertInstructorsText: "Expert instructors",
      backToCategories: "Back to Categories",
      backToDomains: "Back to Domains",
      courseModules: "Course Modules",
      enrollInCourse: "Enroll in Course",
      duration: "Duration",
      level: "Level",

      // Formation Titles & Descriptions
      formation1Title: "Digital Marketing Bootcamp 2024",
      formation1Desc: "Intensive 3-month program with 45 graduates now working in leading agencies",
      formation2Title: "Web Development Masterclass",
      formation2Desc: "Full-stack development training with 98% job placement rate",
      formation3Title: "Graphic Design Professional",
      formation3Desc: "Creative design course producing award-winning designers",
      formation4Title: "Data Analytics Excellence",
      formation4Desc: "Advanced analytics training with real-world business projects",
      formation5Title: "Corporate Finance Training",
      formation5Desc: "Executive-level finance program for 50+ professionals",
      formation6Title: "Leadership Development",
      formation6Desc: "Transformative leadership program for managers and executives"
    },
    fr: {
      // Navbar
      brand: "Delta Academy",
      home: "Accueil",
      courses: "Cours",
      about: "À Propos",
      contact: "Contact",
      enrollNow: "S'inscrire",
      lightMode: "Mode Clair",
      darkMode: "Mode Sombre",

      // Hero Section
      heroTitle1: "Transformez Votre",
      heroTitle2: "Avenir Aujourd'hui",
      heroSubtitle: "Programmes de formation professionnelle et de certification conçus pour les étudiants et les professionnels",
      startLearning: "Commencer",
      browseCourses: "Parcourir les Cours",

      // Course Categories
      chooseYourPath: "Choisissez Votre Parcours",
      twoSpecializedTracks: "Deux parcours spécialisés pour votre succès",
      certifiedCourses: "Cours Certifiés",
      certifiedCoursesSubtitle: "Pour Étudiants et Chercheurs de Certification",
      corporateTraining: "Formation en Entreprise",
      corporateTrainingSubtitle: "Pour Professionnels en Activité",
      exploreDomains: "Explorer les Domaines",
      specializedDomains: "domaines spécialisés disponibles",

      // Stats
      activeStudents: "Étudiants Actifs",
      coursesCount: "Cours",
      rating: "Note",
      successRate: "Taux de Réussite",

      // Previous Formations
      previousFormations: "Nos Formations Précédentes",
      previousFormationsSubtitle: "Découvrez les réussites qui ont construit des carrières et transformé des vies",
      viewAllStories: "Voir Toutes les Réussites",
      graduates: "Diplômés",

      // Popular Domains
      popularDomains: "Domaines Populaires",
      popularDomainsSubtitle: "Commencez avec nos cours les plus demandés",
      modules: "modules",

      // Final CTA
      readyToTransform: "Prêt à Transformer Votre Carrière?",
      joinThousands: "Rejoignez des milliers d'apprenants qui ont atteint leurs objectifs avec nous",
      getStartedToday: "Commencez Aujourd'hui",

      // Course Domains
      digitalMarketing: "Marketing Digital",
      webDevelopment: "Développement Web",
      graphicDesign: "Design Graphique",
      dataAnalysis: "Analyse de Données",
      accountingFinance: "Comptabilité et Finance",
      projectManagement: "Gestion de Projet",
      leadershipManagement: "Leadership et Management",
      technicalSkills: "Compétences Techniques",

      // Levels
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
      professional: "Professionnel",
      executive: "Exécutif",

      // About Page
      aboutTitle: "À Propos de Delta Academy",
      aboutIntro: "est un centre de formation de premier plan dédié à l'autonomisation des individus et des professionnels grâce à une éducation de pointe et au développement de compétences pratiques. Depuis notre création, nous sommes à l'avant-garde de la formation professionnelle en Tunisie, transformant les carrières et façonnant l'avenir.",
      aboutPara1: "Nous nous spécialisons dans deux parcours de formation distincts :",
      aboutPara1Bold1: "Cours Certifiés",
      aboutPara1Text: "pour les étudiants et les demandeurs de certification qui cherchent à entrer dans les domaines souhaités, et",
      aboutPara1Bold2: "Formation en Entreprise",
      aboutPara1Text2: "pour les professionnels en activité qui visent à faire progresser leur carrière et à rester compétitifs sur le marché du travail en évolution rapide d'aujourd'hui.",
      aboutPara2: "Nos instructeurs experts apportent une expérience du monde réel en classe, garantissant que chaque cours regorge d'informations pratiques et de connaissances pertinentes pour l'industrie. Avec des installations de pointe, des projets pratiques et une forte concentration sur le placement professionnel, nous avons aidé plus de 5 000 étudiants et professionnels à atteindre leurs objectifs de carrière.",
      aboutPara3: "Chez Delta Academy, nous croyons que l'éducation doit être accessible, engageante et axée sur les résultats. Notre mission est de combler le fossé entre l'apprentissage académique et les exigences de l'industrie, en fournissant à nos étudiants les outils, les connaissances et la confiance dont ils ont besoin pour réussir dans les domaines qu'ils ont choisis.",

      // About Features
      certifiedPrograms: "Programmes Certifiés",
      certifiedProgramsDesc: "Certifications reconnues par l'industrie",
      expertInstructors: "Instructeurs Experts",
      expertInstructorsDesc: "Apprenez auprès de professionnels de l'industrie",
      jobPlacement: "Placement Professionnel",
      jobPlacementDesc: "Taux de réussite de placement de 95%",
      flexibleLearning: "Apprentissage Flexible",
      flexibleLearningDesc: "Sessions week-end et soirée",
      corporateTrainingDesc: "Solutions d'entreprise personnalisées",
      qualityEducation: "Éducation de Qualité",
      qualityEducationDesc: "Note moyenne de 4,9/5",

      // Success Stories
      successStories: "Nos Réussites",
      successStoriesSubtitle: "Découvrez les programmes transformateurs qui ont façonné des milliers de carrières",
      participants: "participants",

      // Trust Indicators
      whyTrust: "Pourquoi Faire Confiance à Delta Academy?",
      provenTrackRecord: "Bilan Éprouvé",
      provenTrackRecordDesc: "Plus de 5 000 diplômés travaillant dans des entreprises leaders dans divers secteurs",
      industryPartnerships: "Partenariats Industriels",
      industryPartnershipsDesc: "Collaborations avec plus de 50 entreprises garantissant que notre programme répond aux demandes réelles du marché",
      expertFaculty: "Faculté Experte",
      expertFacultyDesc: "Nos instructeurs sont des professionnels chevronnés avec plus de 10 ans d'expérience dans l'industrie",
      lifetimeSupport: "Support à Vie",
      lifetimeSupportDesc: "Accès à notre réseau d'anciens élèves, assistance au placement professionnel et ressources d'apprentissage continues",

      // Contact Page
      getInTouch: "Contactez-Nous",
      getInTouchSubtitle: "Nous aimerions avoir de vos nouvelles. Contactez-nous via l'un de ces canaux.",
      sendMessage: "Envoyez-nous un Message",
      name: "Nom",
      email: "Email",
      message: "Message",
      yourName: "Votre nom",
      yourEmail: "votre@email.com",
      yourMessage: "Votre message...",
      contactInfo: "Informations de Contact",
      address: "Adresse",
      addressText: "Tunis, Tunisie\nAvenue Habib Bourguiba",
      phone: "Téléphone",
      followUs: "Suivez-Nous",
      followUsDesc: "Restez connecté avec nous sur les réseaux sociaux pour des mises à jour, des conseils et des histoires de réussite",
      visitLocation: "Visitez Notre Emplacement",
      visitLocationDesc: "Trouvez-nous au cœur de Tunis. Nous sommes facilement accessibles par les transports en commun.",

      // Footer
      footerDesc: "Autonomiser les individus et les professionnels grâce à une éducation de pointe et au développement de compétences pratiques.",
      quickLinks: "Liens Rapides",
      allCourses: "Tous les Cours",
      aboutUs: "À Propos",
      ourPrograms: "Nos Programmes",
      corporateFinance: "Finance d'Entreprise",
      leadershipTraining: "Formation en Leadership",
      officeHours: "Lun - Ven: 9h00 - 18h00\nSam: 10h00 - 16h00",
      allRightsReserved: "Delta Academy. Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation",
      cookiePolicy: "Politique des Cookies",
      madeWithLove: "Fait avec",
      forLearners: "pour les apprenants du monde entier",

      // Enrollment Modal
      enrollmentTitle: "S'inscrire",
      enrollmentSubtitle: "Commencez votre parcours d'apprentissage aujourd'hui",
      fullName: "Nom Complet",
      phoneNumber: "Numéro de Téléphone",
      courseCategory: "Catégorie de Cours",
      selectCategory: "Sélectionnez une catégorie",
      domain: "Domaine",
      additionalMessage: "Message Supplémentaire",
      additionalMessagePlaceholder: "Parlez-nous de vos objectifs et attentes...",
      submitEnrollment: "Soumettre l'Inscription",
      submitting: "Envoi en cours...",
      enrollmentSuccess: "Inscription Soumise!",
      enrollmentSuccessDesc: "Nous vous contacterons sous peu par email",

      // Course Page
      allCoursesTitle: "Tous les Cours",
      allCoursesSubtitle: "Découvrez votre parcours d'apprentissage parfait",
      viewAllDomains: "Voir Tous les Domaines",
      expertInstructorsText: "Instructeurs experts",
      backToCategories: "Retour aux Catégories",
      backToDomains: "Retour aux Domaines",
      courseModules: "Modules du Cours",
      enrollInCourse: "S'inscrire au Cours",
      duration: "Durée",
      level: "Niveau",

      // Formation Titles & Descriptions
      formation1Title: "Bootcamp Marketing Digital 2024",
      formation1Desc: "Programme intensif de 3 mois avec 45 diplômés travaillant maintenant dans des agences leaders",
      formation2Title: "Masterclass Développement Web",
      formation2Desc: "Formation full-stack avec un taux de placement de 98%",
      formation3Title: "Design Graphique Professionnel",
      formation3Desc: "Cours de design créatif produisant des designers primés",
      formation4Title: "Excellence en Analyse de Données",
      formation4Desc: "Formation avancée en analytique avec des projets commerciaux réels",
      formation5Title: "Formation Finance d'Entreprise",
      formation5Desc: "Programme de finance de niveau exécutif pour plus de 50 professionnels",
      formation6Title: "Développement du Leadership",
      formation6Desc: "Programme de leadership transformateur pour managers et cadres"
    },
    ar: {
      // Navbar
      brand: "أكاديمية دلتا",
      home: "الرئيسية",
      courses: "الدورات",
      about: "من نحن",
      contact: "اتصل بنا",
      enrollNow: "سجل الآن",
      lightMode: "الوضع الفاتح",
      darkMode: "الوضع الداكن",

      // Hero Section
      heroTitle1: "حوّل",
      heroTitle2: "مستقبلك اليوم",
      heroSubtitle: "برامج تدريب وشهادات مهنية مصممة للطلاب والمهنيين العاملين",
      startLearning: "ابدأ التعلم",
      browseCourses: "تصفح الدورات",

      // Course Categories
      chooseYourPath: "اختر مسارك",
      twoSpecializedTracks: "مساران متخصصان لنجاحك",
      certifiedCourses: "دورات معتمدة",
      certifiedCoursesSubtitle: "للطلاب والباحثين عن الشهادات",
      corporateTraining: "التدريب المؤسسي",
      corporateTrainingSubtitle: "للمهنيين العاملين",
      exploreDomains: "استكشف المجالات",
      specializedDomains: "مجالات متخصصة متاحة",

      // Stats
      activeStudents: "طلاب نشطون",
      coursesCount: "دورات",
      rating: "التقييم",
      successRate: "معدل النجاح",

      // Previous Formations
      previousFormations: "تدريباتنا السابقة",
      previousFormationsSubtitle: "اكتشف قصص النجاح التي بنت مهن وحولت حياة",
      viewAllStories: "عرض جميع قصص النجاح",
      graduates: "خريجون",

      // Popular Domains
      popularDomains: "المجالات الشائعة",
      popularDomainsSubtitle: "ابدأ بدوراتنا الأكثر طلباً",
      modules: "وحدات",

      // Final CTA
      readyToTransform: "مستعد لتحويل مسيرتك المهنية؟",
      joinThousands: "انضم إلى آلاف المتعلمين الناجحين الذين حققوا أهدافهم معنا",
      getStartedToday: "ابدأ اليوم",

      // Course Domains
      digitalMarketing: "التسويق الرقمي",
      webDevelopment: "تطوير الويب",
      graphicDesign: "التصميم الجرافيكي",
      dataAnalysis: "تحليل البيانات",
      accountingFinance: "المحاسبة والمالية",
      projectManagement: "إدارة المشاريع",
      leadershipManagement: "القيادة والإدارة",
      technicalSkills: "المهارات التقنية",

      // Levels
      beginner: "مبتدئ",
      intermediate: "متوسط",
      advanced: "متقدم",
      professional: "محترف",
      executive: "تنفيذي",

      // About Page
      aboutTitle: "عن أكاديمية دلتا",
      aboutIntro: "هي مركز تدريب رائد مكرس لتمكين الأفراد والمهنيين من خلال التعليم المتطور وتطوير المهارات العملية. منذ تأسيسنا، كنا في طليعة التدريب المهني في تونس، نحول المهن ونشكل المستقبل.",
      aboutPara1: "نتخصص في مسارين تدريبيين متميزين:",
      aboutPara1Bold1: "الدورات المعتمدة",
      aboutPara1Text: "للطلاب والباحثين عن الشهادات الذين يتطلعون إلى دخول المجالات المرغوبة، و",
      aboutPara1Bold2: "التدريب المؤسسي",
      aboutPara1Text2: "للمهنيين العاملين الذين يهدفون إلى تطوير حياتهم المهنية والبقاء تنافسيين في سوق العمل المتطور بسرعة اليوم.",
      aboutPara2: "يجلب مدربونا الخبراء خبرة العالم الحقيقي إلى الفصل الدراسي، مما يضمن أن كل دورة مليئة بالرؤى العملية والمعرفة ذات الصلة بالصناعة. مع مرافق حديثة ومشاريع عملية وتركيز قوي على التوظيف، ساعدنا أكثر من 5000 طالب ومحترف على تحقيق أهدافهم المهنية.",
      aboutPara3: "في أكاديمية دلتا، نؤمن بأن التعليم يجب أن يكون متاحاً وجذاباً وموجهاً نحو النتائج. مهمتنا هي سد الفجوة بين التعلم الأكاديمي ومتطلبات الصناعة، وتزويد طلابنا بالأدوات والمعرفة والثقة التي يحتاجونها للنجاح في المجالات التي اختاروها.",

      // About Features
      certifiedPrograms: "برامج معتمدة",
      certifiedProgramsDesc: "شهادات معترف بها في الصناعة",
      expertInstructors: "مدربون خبراء",
      expertInstructorsDesc: "تعلم من محترفي الصناعة",
      jobPlacement: "التوظيف",
      jobPlacementDesc: "معدل نجاح توظيف 95٪",
      flexibleLearning: "تعلم مرن",
      flexibleLearningDesc: "دفعات نهاية الأسبوع والمساء",
      corporateTrainingDesc: "حلول مؤسسية مخصصة",
      qualityEducation: "تعليم جودة",
      qualityEducationDesc: "تقييم متوسط 4.9/5",

      // Success Stories
      successStories: "قصص نجاحنا",
      successStoriesSubtitle: "اكتشف البرامج التحويلية التي شكلت آلاف المهن",
      participants: "مشاركون",

      // Trust Indicators
      whyTrust: "لماذا تثق في أكاديمية دلتا؟",
      provenTrackRecord: "سجل حافل مثبت",
      provenTrackRecordDesc: "أكثر من 5000 خريج ناجح يعملون في شركات رائدة عبر مختلف الصناعات",
      industryPartnerships: "شراكات صناعية",
      industryPartnershipsDesc: "تعاون مع أكثر من 50 شركة لضمان تلبية مناهجنا لمتطلبات السوق الحقيقية",
      expertFaculty: "هيئة تدريس خبيرة",
      expertFacultyDesc: "مدربونا هم محترفون متمرسون يتمتعون بخبرة تزيد عن 10 سنوات في الصناعة",
      lifetimeSupport: "دعم مدى الحياة",
      lifetimeSupportDesc: "الوصول إلى شبكة خريجينا، والمساعدة في التوظيف، وموارد التعلم المستمر",

      // Contact Page
      getInTouch: "تواصل معنا",
      getInTouchSubtitle: "نحب أن نسمع منك. تواصل معنا عبر أي من هذه القنوات.",
      sendMessage: "أرسل لنا رسالة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      yourName: "اسمك",
      yourEmail: "بريدك@الإلكتروني.com",
      yourMessage: "رسالتك...",
      contactInfo: "معلومات الاتصال",
      address: "العنوان",
      addressText: "تونس، تونس\nشارع الحبيب بورقيبة",
      phone: "الهاتف",
      followUs: "تابعنا",
      followUsDesc: "ابق على اتصال معنا على وسائل التواصل الاجتماعي للحصول على التحديثات والنصائح وقصص النجاح",
      visitLocation: "زر موقعنا",
      visitLocationDesc: "اعثر علينا في قلب تونس. يسهل الوصول إلينا بواسطة وسائل النقل العامة.",

      // Footer
      footerDesc: "تمكين الأفراد والمهنيين من خلال التعليم المتطور وتطوير المهارات العملية.",
      quickLinks: "روابط سريعة",
      allCourses: "جميع الدورات",
      aboutUs: "من نحن",
      ourPrograms: "برامجنا",
      corporateFinance: "المالية المؤسسية",
      leadershipTraining: "تدريب القيادة",
      officeHours: "الاثنين - الجمعة: 9:00 ص - 6:00 م\nالسبت: 10:00 ص - 4:00 م",
      allRightsReserved: "أكاديمية دلتا. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      cookiePolicy: "سياسة ملفات تعريف الارتباط",
      madeWithLove: "صنع بـ",
      forLearners: "للمتعلمين في جميع أنحاء العالم",

      // Enrollment Modal
      enrollmentTitle: "سجل الآن",
      enrollmentSubtitle: "ابدأ رحلة التعلم الخاصة بك اليوم",
      fullName: "الاسم الكامل",
      phoneNumber: "رقم الهاتف",
      courseCategory: "فئة الدورة",
      selectCategory: "اختر فئة",
      domain: "المجال",
      additionalMessage: "رسالة إضافية",
      additionalMessagePlaceholder: "أخبرنا عن أهدافك وتوقعاتك...",
      submitEnrollment: "إرسال التسجيل",
      submitting: "جارٍ الإرسال...",
      enrollmentSuccess: "تم تقديم التسجيل!",
      enrollmentSuccessDesc: "سنتواصل معك قريباً عبر البريد الإلكتروني",

      // Course Page
      allCoursesTitle: "جميع الدورات",
      allCoursesSubtitle: "اكتشف مسار التعلم المثالي الخاص بك",
      viewAllDomains: "عرض جميع المجالات",
      expertInstructorsText: "مدربون خبراء",
      backToCategories: "العودة إلى الفئات",
      backToDomains: "العودة إلى المجالات",
      courseModules: "وحدات الدورة",
      enrollInCourse: "التسجيل في الدورة",
      duration: "المدة",
      level: "المستوى",

      // Formation Titles & Descriptions
      formation1Title: "معسكر التسويق الرقمي 2024",
      formation1Desc: "برنامج مكثف مدته 3 أشهر مع 45 خريجاً يعملون الآن في وكالات رائدة",
      formation2Title: "ماستر كلاس تطوير الويب",
      formation2Desc: "تدريب تطوير كامل المكدس مع معدل توظيف 98٪",
      formation3Title: "التصميم الجرافيكي المحترف",
      formation3Desc: "دورة تصميم إبداعية تنتج مصممين حائزين على جوائز",
      formation4Title: "التميز في تحليل البيانات",
      formation4Desc: "تدريب تحليلي متقدم مع مشاريع أعمال حقيقية",
      formation5Title: "تدريب المالية المؤسسية",
      formation5Desc: "برنامج مالية على مستوى تنفيذي لأكثر من 50 محترفاً",
      formation6Title: "تطوير القيادة",
      formation6Desc: "برنامج قيادة تحويلي للمديرين والمسؤولين التنفيذيين"
    }
  };

  const t = translations[language];

  const courseCategories = {
    certified: {
      title: "Certified Courses",
      subtitle: "For Students & Certification Seekers",
      icon: Award,
      color: "from-[#2970ae] to-[#ec960b]",
      domains: [
        { 
          name: "Digital Marketing", 
          icon: Target,
          modules: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
          duration: "3 months",
          level: "Beginner to Advanced"
        },
        { 
          name: "Web Development", 
          icon: Zap,
          modules: ["HTML/CSS Fundamentals", "JavaScript & React", "Backend Development", "Full-Stack Projects"],
          duration: "6 months",
          level: "Intermediate"
        },
        { 
          name: "Graphic Design", 
          icon: Sparkles,
          modules: ["Adobe Photoshop", "Illustrator Mastery", "UI/UX Principles", "Brand Identity"],
          duration: "4 months",
          level: "Beginner"
        },
        { 
          name: "Data Analysis", 
          icon: TrendingUp,
          modules: ["Excel Advanced", "Power BI", "Data Visualization", "Statistical Analysis"],
          duration: "3 months",
          level: "Intermediate"
        }
      ]
    },
    corporate: {
      title: "Corporate Training",
      subtitle: "For Working Professionals",
      icon: Briefcase,
      color: "from-[#ec960b] to-[#c17b3f]",
      domains: [
        { 
          name: "Accounting & Finance", 
          icon: Building2,
          modules: ["Advanced Accounting", "Financial Analysis", "Tax Management", "Audit & Compliance"],
          duration: "2 months",
          level: "Professional"
        },
        { 
          name: "Project Management", 
          icon: Target,
          modules: ["Agile Methodologies", "Risk Management", "Stakeholder Communication", "PMP Preparation"],
          duration: "3 months",
          level: "Professional"
        },
        { 
          name: "Leadership & Management", 
          icon: Users,
          modules: ["Team Leadership", "Strategic Planning", "Change Management", "Executive Coaching"],
          duration: "2 months",
          level: "Executive"
        },
        { 
          name: "Technical Skills", 
          icon: Zap,
          modules: ["Cloud Computing", "Cybersecurity", "DevOps Practices", "AI & Automation"],
          duration: "4 months",
          level: "Advanced"
        }
      ]
    }
  };

  const handleEnroll = (category = '', domain = '') => {
    setFormData({ ...formData, category, domain });
    setShowEnrollModal(true);
    setSubmitSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
    e.preventDefault();
    e.stopPropagation();
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

  const theme = {
    bg: isDark ? 'bg-gray-900' : 'bg-white',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-400' : 'text-gray-600',
    card: isDark ? 'bg-gray-800' : 'bg-white',
    cardHover: isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50',
    border: isDark ? 'border-gray-700' : 'border-gray-200',
    gradient: isDark ? 'from-gray-800 via-gray-900 to-black' : 'from-[#2970ae]/10 via-[#ec960b]/10 to-[#c17b3f]/10',
    navBg: isDark ? 'bg-gray-900/95' : 'bg-white/95'
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

  // Navbar Component
  const Navbar = () => {
    const [showLangMenu, setShowLangMenu] = useState(false);

    const languages = [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'ar', name: 'العربية', flag: '🇹🇳' }
    ];

    return (
      <nav className={`fixed top-0 w-full ${theme.navBg} backdrop-blur-lg shadow-lg z-50 transition-all duration-500`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 cursor-pointer group`} onClick={() => navigateTo('home')}>
              <img
                src={logo}
                alt="Delta Academy Logo"
                className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">
                {t.brand}
              </span>
            </div>

            <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-6`}>
              {[
                { key: 'home', label: t.home },
                { key: 'courses', label: t.courses },
                { key: 'about', label: t.about },
                { key: 'contact', label: t.contact }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigateTo(item.key)}
                  className={`${theme.text} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] transition-all font-medium relative group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2970ae] to-[#ec960b] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => handleEnroll()}
                className="bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-6 py-2.5 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all font-semibold"
              >
                {t.enrollNow}
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`px-4 py-2.5 rounded-full ${theme.card} ${theme.border} border transition-all hover:scale-105 hover:shadow-lg flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 font-semibold group`}
                >
                  <span className="text-2xl">{languages.find(l => l.code === language)?.flag}</span>
                  <span className={`text-sm ${theme.text} group-hover:text-[#ec960b] transition-colors`}>
                    {language.toUpperCase()}
                  </span>
                  <ChevronRight className={`${theme.textSecondary} transform ${showLangMenu ? 'rotate-90' : 'rotate-0'} transition-transform`} size={16} />
                </button>

                {showLangMenu && (
                  <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} mt-2 ${theme.card} rounded-xl shadow-2xl border ${theme.border} overflow-hidden min-w-[180px] z-50`}
                    style={{ animation: 'fadeIn 0.2s ease-out' }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full px-4 py-3 flex items-center justify-between ${language === lang.code ? 'bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white' : `${theme.text} hover:bg-gray-100 dark:hover:bg-gray-700`} transition-all`}
                      >
                        <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        {language === lang.code && (
                          <CheckCircle2 size={18} className="text-white" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-full ${theme.card} ${theme.border} border transition-all hover:scale-110`}
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-[#ec960b]" />}
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} className={theme.text} /> : <Menu size={24} className={theme.text} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${theme.card} border-t ${theme.border} backdrop-blur-lg`}>
            <div className="px-4 py-4 space-y-3">
              {[
                { key: 'home', label: t.home },
                { key: 'courses', label: t.courses },
                { key: 'about', label: t.about },
                { key: 'contact', label: t.contact }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigateTo(item.key)}
                  className={`block w-full text-left px-4 py-2 ${theme.text} hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] hover:text-white rounded-lg transition-all`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleEnroll()}
                className="w-full bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-6 py-2.5 rounded-full font-semibold"
              >
                {t.enrollNow}
              </button>

              {/* Mobile Language Switcher */}
              <div className="space-y-2">
                <div className={`text-sm font-semibold ${theme.text} px-4 py-2`}>{t.home === 'Home' ? 'Language' : t.home === 'Accueil' ? 'Langue' : 'اللغة'}</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 px-4 py-2 ${language === lang.code ? 'bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white' : `${theme.text} hover:bg-gray-100 dark:hover:bg-gray-700`} rounded-lg transition-all`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsDark(!isDark)}
                className={`w-full flex items-center justify-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 px-4 py-2 ${theme.card} ${theme.border} border rounded-lg`}
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-[#ec960b]" />}
                <span className={theme.text}>{isDark ? t.lightMode : t.darkMode}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  };

  // Enrollment Modal
  const EnrollmentModal = () => {
    if (!showEnrollModal) return null;

    const handleBackdropClick = (e) => {
      // Only close if clicking the backdrop itself, not the modal content
      if (e.target === e.currentTarget) {
        setShowEnrollModal(false);
      }
    };

    return (
      <div 
        key="enrollment-modal"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" 
        style={{ animation: 'fadeIn 0.3s ease-out' }}
        onClick={handleBackdropClick}
      >
        <div 
          className={`${theme.card} rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500`}
          style={{ animation: 'slideUp 0.5s ease-out' }}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            // Prevent ESC key from closing if user is typing
            if (e.key === 'Escape' && document.activeElement.tagName === 'INPUT') {
              e.stopPropagation();
            }
          }}
        >
          <div className="sticky top-0 bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] p-6 rounded-t-3xl z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className={`text-3xl font-bold text-white flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                  <Sparkles />
                  <span>Enroll Now</span>
                </h2>
                <p className="text-white/90 mt-1">Start your learning journey today</p>
              </div>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="p-8">
            {!submitSuccess ? (
              <form onSubmit={handleFormSubmit} className="space-y-6" onKeyDown={(e) => {
                // Prevent form submission on Enter key unless it's the submit button
                if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'TEXTAREA') {
                  e.preventDefault();
                }
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                      <User size={18} />
                      <span>Full Name *</span>
                    </label>
                    <input
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
                      className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                      <Mail size={18} />
                      <span>Email *</span>
                    </label>
                    <input
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
                      className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                    <Phone size={18} />
                    <span>Phone Number *</span>
                  </label>
                  <input
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
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    placeholder="+216 12 345 678"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                      <GraduationCap size={18} />
                      <span>Course Category *</span>
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => {
                        e.stopPropagation();
                        setFormData({ ...formData, category: e.target.value });
                      }}
                      className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    >
                      <option value="">Select category</option>
                      <option value="Certified Courses">Certified Courses</option>
                      <option value="Corporate Training">Corporate Training</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={`${theme.text} font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                      <BookOpen size={18} />
                      <span>Domain</span>
                    </label>
                    <input
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
                      className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                      placeholder="e.g., Web Development"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`${theme.text} font-semibold`}>Additional Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    className={`w-full px-4 py-3 ${theme.card} ${theme.border} border-2 rounded-xl focus:ring-2 focus:ring-[#ec960b] focus:border-transparent outline-none transition-all ${theme.text}`}
                    rows="4"
                    placeholder="Tell us about your goals and expectations..."
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
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enrollment</span>
                      <ArrowRight />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6" style={{ animation: 'bounce 1s infinite' }}>
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>Enrollment Submitted!</h3>
                <p className={theme.textSecondary}>We'll contact you shortly via email</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Landing Page
  const LandingPage = () => (
    <div className={`pt-16 ${theme.bg} transition-colors duration-500`}>
      {/* Hero Section */}
      <div className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${theme.gradient}`}>
        {/* Horizontal Scrolling Gallery Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Overlay for better text readability */}
          <div className={`absolute inset-0 z-[5] bg-gradient-to-br ${isDark ? 'from-gray-900/70 via-gray-900/50 to-gray-900/70' : 'from-white/70 via-white/50 to-white/70'}`}></div>
          
          {/* Scrolling Gallery Container */}
          <div className="absolute inset-0 gallery-scroll-container">
            {/* First set of images */}
            <div className="gallery-track">
              {[
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
              ].map((imageUrl, i) => (
                <div key={`img-${i}`} className="gallery-image-wrapper">
                  <img
                    src={imageUrl}
                    alt={`Gallery ${i + 1}`}
                    className="gallery-image"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {[
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
              ].map((imageUrl, i) => (
                <div key={`img-dup-${i}`} className="gallery-image-wrapper">
                  <img
                    src={imageUrl}
                    alt={`Gallery ${i + 1}`}
                    className="gallery-image"
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
                onClick={() => handleEnroll()}
                className={`bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}
              >
                <span>{t.startLearning}</span>
                <ArrowRight />
              </button>
              <button
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
                  <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{key === 'certified' ? t.certifiedCourses : t.corporateTraining}</h3>
                  <p className={`${theme.textSecondary} mb-4`}>{key === 'certified' ? t.certifiedCoursesSubtitle : t.corporateTrainingSubtitle}</p>
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

      {/* Previous Formations Showcase - Animated */}
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
                      alt={formation.title}
                      className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Content Overlay */}
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

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                      <Sparkles className="text-white" size={24} />
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center">
            <button
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
                  <h4 className={`text-xl font-bold ${theme.text} mb-2`}>{domain.name}</h4>
                  <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-sm ${theme.textSecondary} mb-3`}>
                    <Clock size={16} />
                    <span>{domain.duration}</span>
                  </div>
                  <div className={`text-xs ${theme.textSecondary} mb-4`}>{domain.modules.length} {t.modules}</div>
                  <button className="w-full bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
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

  // Courses Page
  const CoursesPage = () => (
    <div className={`pt-24 pb-16 min-h-screen ${theme.bg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        {!selectedCategory && (
          <>
            <h1 className={`text-5xl font-bold text-center mb-4 ${theme.text}`}>All Courses</h1>
            <p className={`text-center ${theme.textSecondary} mb-16 text-xl`}>Discover your perfect learning path</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {Object.entries(courseCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`${theme.card} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border-2 ${theme.border} group`}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="text-white" size={40} />
                    </div>
                    <h3 className={`text-3xl font-bold mb-3 ${theme.text}`}>{category.title}</h3>
                    <p className={`${theme.textSecondary} mb-6 text-lg`}>{category.subtitle}</p>
                    <div className={`text-sm ${theme.textSecondary} mb-6`}>
                      {category.domains.length} specialized domains • Expert instructors
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-[#ec960b] font-bold text-lg group-hover:translate-x-2 transition-transform`}>
                      <span>View All Domains</span>
                      <ArrowRight size={24} />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedCategory && !selectedDomain && (
          <>
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`mb-8 ${theme.text} hover:text-[#ec960b] font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-lg transform hover:-translate-x-2 transition-all`}
            >
              <ArrowRight className="rotate-180" />
              <span>Back to Categories</span>
            </button>
            
            <div className="mb-12">
              <h2 className={`text-4xl font-bold mb-3 ${theme.text}`}>{courseCategories[selectedCategory].title}</h2>
              <p className={`${theme.textSecondary} text-xl`}>{courseCategories[selectedCategory].subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courseCategories[selectedCategory].domains.map((domain, i) => {
                const DomainIcon = domain.icon;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedDomain(domain)}
                    className={`${theme.card} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${theme.border} hover:border-[#ec960b] group`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <DomainIcon className="text-[#ec960b] group-hover:scale-110 transition-transform" size={48} />
                      <span className={`px-3 py-1 bg-[#c17b3f]/20 dark:bg-[#c17b3f]/30 text-[#ec960b] dark:text-[#ec960b] rounded-full text-sm font-semibold`}>
                        {domain.level}
                      </span>
                    </div>
                    <h4 className={`text-2xl font-bold mb-3 ${theme.text}`}>{domain.name}</h4>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4 text-sm ${theme.textSecondary} mb-4`}>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                        <Clock size={16} />
                        <span>{domain.duration}</span>
                      </div>
                      <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-1`}>
                        <BookOpen size={16} />
                        <span>{domain.modules.length} modules</span>
                      </div>
                    </div>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-[#ec960b] font-semibold group-hover:translate-x-2 transition-transform`}>
                      <span>View Modules</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedDomain && (
          <>
            <button 
              onClick={() => setSelectedDomain(null)}
              className={`mb-8 ${theme.text} hover:text-[#ec960b] font-semibold flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 text-lg transform hover:-translate-x-2 transition-all`}
            >
              <ArrowRight className="rotate-180" />
              <span>Back to Domains</span>
            </button>
            
            <div className={`${theme.card} rounded-3xl p-10 shadow-2xl border ${theme.border}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div>
                  <h2 className={`text-4xl font-bold mb-3 ${theme.text}`}>{selectedDomain.name}</h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className={`px-4 py-2 bg-[#c17b3f]/20 dark:bg-[#c17b3f]/30 text-[#ec960b] dark:text-[#ec960b] rounded-full text-sm font-semibold`}>
                      {selectedDomain.level}
                    </span>
                    <span className={`px-4 py-2 ${theme.card} ${theme.border} border rounded-full text-sm font-semibold ${theme.text}`}>
                      {selectedDomain.duration}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleEnroll(courseCategories[selectedCategory].title, selectedDomain.name)}
                  className="bg-gradient-to-r from-[#2970ae] to-[#ec960b] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Enroll in Course
                </button>
              </div>
              
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Course Modules</h3>
              <div className="space-y-4">
                {selectedDomain.modules.map((module, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl hover:bg-gradient-to-r hover:from-[#2970ae]/10 hover:to-[#ec960b]/10 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all group`}>
                    <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2970ae] to-[#ec960b] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <span className={`font-semibold ${theme.text} text-lg`}>{module}</span>
                    </div>
                    <ChevronRight className={`${theme.textSecondary} group-hover:translate-x-2 transition-transform`} size={24} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Sample formations data with descriptions - now using translations
  const previousFormations = [
    {
      id: 1,
      titleKey: "formation1Title",
      descKey: "formation1Desc",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      participants: 45,
      year: 2024
    },
    {
      id: 2,
      titleKey: "formation2Title",
      descKey: "formation2Desc",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      participants: 38,
      year: 2024
    },
    {
      id: 3,
      titleKey: "formation3Title",
      descKey: "formation3Desc",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      participants: 32,
      year: 2023
    },
    {
      id: 4,
      titleKey: "formation4Title",
      descKey: "formation4Desc",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      participants: 28,
      year: 2023
    },
    {
      id: 5,
      titleKey: "formation5Title",
      descKey: "formation5Desc",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      participants: 52,
      year: 2024
    },
    {
      id: 6,
      titleKey: "formation6Title",
      descKey: "formation6Desc",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      participants: 40,
      year: 2023
    }
  ];

  // About Page
  const AboutPage = () => (
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
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={formation.image}
                      alt={t[formation.titleKey]}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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

                  {/* Content */}
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

  // Contact Page
  const ContactPage = () => (
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
            <form onSubmit={handleContactSubmit} className="space-y-6" onKeyDown={(e) => {
              // Prevent form submission on Enter key unless it's the submit button
              if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
              }
            }}>
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
            {/* Interactive Map - Using Google Maps Embed */}
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

  // Footer Component
  const Footer = () => (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-900'} text-white pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 mb-6`}>
              <img
                src={logo}
                alt="Delta Academy Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#2970ae] via-[#ec960b] to-[#c17b3f] bg-clip-text text-transparent">
                {t.brand}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
              {[
                { icon: '📘', link: 'https://facebook.com/deltaacademy', label: 'Facebook' },
                { icon: '📷', link: 'https://instagram.com/deltaacademy', label: 'Instagram' },
                { icon: '🎵', link: 'https://tiktok.com/@deltaacademy', label: 'TikTok' },
                { icon: '💬', link: 'https://wa.me/216XXXXXXXX', label: 'WhatsApp' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-[#2970ae] hover:to-[#ec960b] rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { nameKey: 'home', page: 'home' },
                { nameKey: 'allCourses', page: 'courses' },
                { nameKey: 'aboutUs', page: 'about' },
                { nameKey: 'contact', page: 'contact' }
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className={`text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 group`}
                  >
                    <ChevronRight size={16} className="group-hover:text-[#ec960b]" />
                    <span>{t[link.nameKey]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.ourPrograms}</h3>
            <ul className="space-y-3">
              {[
                t.digitalMarketing,
                t.webDevelopment,
                t.graphicDesign,
                t.dataAnalysis,
                t.corporateFinance,
                t.leadershipTraining
              ].map((course, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigateTo('courses')}
                    className={`text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2 group`}
                  >
                    <Award size={14} className="group-hover:text-[#ec960b]" />
                    <span>{course}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.getInTouch}</h3>
            <ul className="space-y-4">
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                <MapPin size={20} className="text-[#ec960b] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm whitespace-pre-line">
                  {t.addressText}
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                <Phone size={20} className="text-[#ec960b] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  +216 XX XXX XXX
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                <Mail size={20} className="text-[#ec960b] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  info@deltaacademy.tn
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
                <Clock size={20} className="text-[#ec960b] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm whitespace-pre-line">
                  {t.officeHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t.allRightsReserved}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors">
              {t.privacyPolicy}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              {t.termsOfService}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              {t.cookiePolicy}
            </button>
          </div>
        </div>

        {/* Made with Love */}
        <div className="mt-8 text-center">
          <p className={`text-gray-500 text-sm flex items-center justify-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
            <span>{t.madeWithLove}</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            {/* <span>{t.forLearners}</span> */}
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-500`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <EnrollmentModal />
      {currentPage === 'home' && <LandingPage />}
      {currentPage === 'courses' && <CoursesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />

      {/* CSS Animations */}
      <style>{`
        /* Floating Bubbles Animation */
        @keyframes floatBubble {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide In with Rotation */
        @keyframes slideInRotate {
          0% {
            opacity: 0;
            transform: translateY(50px) rotate(-10deg) scale(0.8);
          }
          60% {
            transform: translateY(-10px) rotate(2deg) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* Scale In with Bounce */
        @keyframes scaleInBounce {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        /* Pulse Slow */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Gradient Animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Glow Effect */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.6);
          }
        }

        /* Float Gentle */
        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Swing Animation */
        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }

        /* Horizontal Scrolling Gallery Styles */
        .gallery-scroll-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .gallery-track {
          display: flex;
          width: fit-content;
          height: 100%;
          animation: scrollGallery 150s linear infinite;
          will-change: transform;
        }

        .gallery-image-wrapper {
          flex-shrink: 0;
          width: 50vw;
          min-width: 600px;
          height: 100%;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(3px) brightness(0.7);
          transition: filter 0.3s ease;
        }

        /* Infinite scroll animation - right to left */
        @keyframes scrollGallery {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gallery-image-wrapper {
            width: 60vw;
            min-width: 450px;
          }
          
          .gallery-image {
            filter: blur(2px) brightness(0.6);
          }
        }

        @media (max-width: 480px) {
          .gallery-image-wrapper {
            width: 100vw;
            min-width: 100vw;
          }
        }

        /* Fade In */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide Up */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: floatGentle 3s ease-in-out infinite;
        }

        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
      <SpeedInsights />
    </div>
    
  );
}