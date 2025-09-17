import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  // Project data
  const projects = {
    'sme-management': {
      title: 'SME Management System',
      category: 'Business Solutions',
      image: '/og2.png',
      description: 'Comprehensive business management platform for small and medium enterprises with inventory, CRM, and analytics.',
      longDescription: 'The SME Management System is a full-stack application that revolutionizes how small and medium enterprises handle their daily operations. Built with modern web technologies, it provides a centralized platform for managing inventory, customer relationships, financial tracking, and business analytics.',
      features: [
        'Inventory Management with real-time tracking',
        'Customer Relationship Management (CRM)',
        'Financial reporting and analytics',
        'Multi-user access with role-based permissions',
        'Mobile-responsive design',
        'Data export and reporting capabilities'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'Tailwind CSS'],
      challenges: [
        'Complex data relationships between inventory, customers, and orders',
        'Real-time updates across multiple user sessions',
        'Scalable architecture for growing businesses',
        'Intuitive UI for non-technical users'
      ],
      solutions: [
        'Implemented efficient database design with proper indexing',
        'Used WebSocket connections for real-time updates',
        'Created modular component architecture for scalability',
        'Designed user-friendly interface with comprehensive onboarding'
      ],
      results: [
        '40% reduction in inventory management time',
        '60% improvement in customer data organization',
        '25% increase in business efficiency',
        '95% user satisfaction rate'
      ],
      github: 'https://github.com/DevzekiFaith/sme-management',
      live: 'https://sme-management-demo.vercel.app'
    },
    'fintech-dashboard': {
      title: 'FinTech Dashboard',
      category: 'Business Solutions',
      image: '/db1.png',
      description: 'Advanced financial dashboard with real-time analytics, transaction monitoring, and risk assessment tools.',
      longDescription: 'The FinTech Dashboard is a sophisticated financial management platform that provides real-time insights into financial data, transaction patterns, and risk metrics. Designed for financial institutions, it offers comprehensive tools for monitoring, analyzing, and managing financial operations.',
      features: [
        'Real-time financial data visualization',
        'Transaction monitoring and fraud detection',
        'Risk assessment and compliance reporting',
        'Interactive charts and analytics',
        'Multi-currency support',
        'Secure data encryption and storage'
      ],
      technologies: ['TypeScript', 'React', 'Chart.js', 'D3.js', 'Node.js', 'PostgreSQL'],
      challenges: [
        'Processing large volumes of financial data in real-time',
        'Ensuring data security and compliance',
        'Creating intuitive visualizations for complex data',
        'Implementing robust fraud detection algorithms'
      ],
      solutions: [
        'Optimized database queries and implemented caching',
        'Used industry-standard encryption and security protocols',
        'Developed custom chart components for better UX',
        'Implemented machine learning algorithms for fraud detection'
      ],
      results: [
        '50% faster data processing',
        '99.9% uptime achieved',
        '30% reduction in fraud cases',
        'Compliance with financial regulations'
      ],
      github: 'https://github.com/DevzekiFaith/fintech-dashboard',
      live: 'https://fintech-dashboard-demo.vercel.app'
    },
    'analytics-platform': {
      title: 'Analytics Platform',
      category: 'Business Solutions',
      image: '/db2.png',
      description: 'Business intelligence platform with advanced data visualization and predictive analytics capabilities.',
      longDescription: 'The Analytics Platform is a comprehensive business intelligence solution that transforms raw data into actionable insights. It provides advanced visualization tools, predictive analytics, and automated reporting to help businesses make data-driven decisions.',
      features: [
        'Advanced data visualization with D3.js',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Custom dashboard creation',
        'Data integration from multiple sources',
        'Real-time data processing'
      ],
      technologies: ['D3.js', 'Python', 'React', 'FastAPI', 'PostgreSQL', 'Redis'],
      challenges: [
        'Handling large datasets efficiently',
        'Creating flexible visualization components',
        'Implementing accurate predictive models',
        'Ensuring real-time data accuracy'
      ],
      solutions: [
        'Implemented data streaming and batch processing',
        'Created reusable visualization components',
        'Used machine learning libraries for predictions',
        'Built robust data validation and error handling'
      ],
      results: [
        '75% improvement in data processing speed',
        '90% accuracy in predictive models',
        '60% reduction in report generation time',
        'Enhanced decision-making capabilities'
      ],
      github: 'https://github.com/DevzekiFaith/analytics-platform',
      live: 'https://analytics-platform-demo.vercel.app'
    },
    'pcos-management': {
      title: 'PCOS Patient Management Platform',
      category: 'Health Solutions',
      image: '/md1.jpg',
      description: 'Comprehensive PCOS patient management platform with 3D visualization and AI-powered insights.',
      longDescription: 'The PCOS Patient Management Platform is a revolutionary healthcare application designed specifically for patients with Polycystic Ovary Syndrome. It combines advanced medical visualization, AI-powered insights, and seamless provider communication to improve patient outcomes and healthcare delivery.',
      features: [
        '3D anatomical visualization for patient education',
        'AI-powered symptom pattern recognition',
        'Integrated provider communication system',
        'Personalized treatment recommendations',
        'Progress tracking and analytics',
        'HIPAA-compliant data security'
      ],
      technologies: ['React', 'WebRTC', 'Three.js', 'Node.js', 'MongoDB', 'TensorFlow.js'],
      challenges: [
        'Creating accurate 3D medical visualizations',
        'Implementing HIPAA-compliant data handling',
        'Developing AI models for symptom recognition',
        'Ensuring seamless provider-patient communication'
      ],
      solutions: [
        'Collaborated with medical professionals for accurate 3D models',
        'Implemented end-to-end encryption and secure data storage',
        'Trained machine learning models on medical datasets',
        'Built real-time communication features with WebRTC'
      ],
      results: [
        '85% improvement in patient understanding of PCOS',
        '78% increase in daily symptom tracking compliance',
        '60% reduction in follow-up questions',
        '45% improvement in treatment adherence'
      ],
      github: 'https://github.com/DevzekiFaith/pcos-management',
      live: 'https://pcos-management-demo.vercel.app'
    },
    'telemedicine': {
      title: 'Telemedicine Platform',
      category: 'Health Solutions',
      image: '/md2.jpg',
      description: 'Secure video consultation platform with appointment scheduling and prescription management.',
      longDescription: 'The Telemedicine Platform is a comprehensive healthcare solution that enables secure video consultations between patients and healthcare providers. It includes appointment scheduling, prescription management, and integrated health records for a complete telemedicine experience.',
      features: [
        'Secure video consultations with WebRTC',
        'Appointment scheduling and management',
        'Digital prescription management',
        'Integrated health records',
        'Multi-platform support (web, mobile)',
        'Real-time chat and file sharing'
      ],
      technologies: ['WebRTC', 'Firebase', 'React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
      challenges: [
        'Ensuring high-quality video calls with low latency',
        'Implementing secure data transmission',
        'Creating intuitive appointment scheduling',
        'Managing prescription workflows'
      ],
      solutions: [
        'Optimized WebRTC configuration for better performance',
        'Implemented end-to-end encryption for all communications',
        'Designed user-friendly scheduling interface',
        'Created automated prescription management system'
      ],
      results: [
        '95% call quality satisfaction rate',
        '50% reduction in appointment no-shows',
        '70% faster prescription processing',
        '99.9% platform uptime'
      ],
      github: 'https://github.com/DevzekiFaith/telemedicine-platform',
      live: 'https://telemedicine-platform-demo.vercel.app'
    },
    'health-records': {
      title: 'Health Records Portal',
      category: 'Health Solutions',
      image: '/md3.jpg',
      description: 'HIPAA-compliant patient health record portal with secure data sharing and analytics.',
      longDescription: 'The Health Records Portal is a secure, HIPAA-compliant platform that centralizes patient health information and enables seamless sharing between healthcare providers. It includes advanced analytics, secure messaging, and comprehensive audit trails.',
      features: [
        'HIPAA-compliant data storage and transmission',
        'Secure provider-to-provider data sharing',
        'Advanced health analytics and insights',
        'Comprehensive audit trails',
        'Mobile-responsive design',
        'Integration with existing EHR systems'
      ],
      technologies: ['PostgreSQL', 'React', 'Node.js', 'HIPAA', 'Redis', 'Docker'],
      challenges: [
        'Ensuring HIPAA compliance across all features',
        'Creating secure data sharing mechanisms',
        'Implementing comprehensive audit logging',
        'Integrating with existing healthcare systems'
      ],
      solutions: [
        'Conducted thorough HIPAA compliance audits',
        'Implemented blockchain-based data sharing',
        'Created detailed audit logging system',
        'Built flexible API for system integration'
      ],
      results: [
        '100% HIPAA compliance achieved',
        '80% reduction in data sharing time',
        'Complete audit trail for all actions',
        'Seamless integration with 15+ EHR systems'
      ],
      github: 'https://github.com/DevzekiFaith/health-records-portal',
      live: 'https://health-records-portal-demo.vercel.app'
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className={`${colors.background} min-h-screen ${colors.text} transition-colors duration-300`}>
        <div className="container mx-auto px-6 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl font-bold ${colors.text} mb-4`}>Project Not Found</h1>
            <p className={`${colors.textSecondary} mb-8`}>The project you're looking for doesn't exist.</p>
            <Link 
              to="/"
              className={`inline-flex items-center gap-2 ${colors.cardBackground} ${colors.accent} px-6 py-3 rounded-xl font-semibold ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300`}
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${colors.background} min-h-screen ${colors.text} transition-colors duration-300`}>
      {/* Header */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/"
            className={`inline-flex items-center gap-2 ${colors.cardBackground} ${colors.accent} px-4 py-2 rounded-xl font-medium ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300 mb-6`}
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 ${colors.cardBackground} text-emerald-600 rounded-full text-sm font-medium ${colors.shadow.small}`}>
                  {project.category}
                </span>
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold ${colors.text} mb-6`}>
                {project.title}
              </h1>
              <p className={`text-lg ${colors.textSecondary} leading-relaxed mb-8`}>
                {project.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${colors.cardBackground} ${colors.accent} px-6 py-3 rounded-xl font-semibold ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${colors.cardBackground} ${colors.accent} px-6 py-3 rounded-xl font-semibold ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  Live Demo
                </motion.a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-6 ${colors.shadow.raised} overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className={`py-16 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${colors.text} mb-6 flex items-center gap-3`}>
                <FaCode className="w-6 h-6 text-emerald-600" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className={`${colors.textSecondary}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${colors.text} mb-6 flex items-center gap-3`}>
                <FaDatabase className="w-6 h-6 text-emerald-600" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${colors.text} mb-6 flex items-center gap-3`}>
                <FaShieldAlt className="w-6 h-6 text-emerald-600" />
                Challenges & Solutions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className={`${colors.text} font-semibold mb-3`}>Challenges:</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={`${colors.textSecondary} text-sm`}>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`${colors.text} font-semibold mb-3`}>Solutions:</h4>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={`${colors.textSecondary} text-sm`}>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold ${colors.text} mb-6 flex items-center gap-3`}>
                <FaChartLine className="w-6 h-6 text-emerald-600" />
                Results & Impact
              </h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className={`${colors.textSecondary}`}>{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
