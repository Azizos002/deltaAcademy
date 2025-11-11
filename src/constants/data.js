import { Award, Briefcase, Target, Zap, Sparkles, TrendingUp, Building2, Users } from 'lucide-react';

export const courseCategories = {
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

export const previousFormations = [
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

