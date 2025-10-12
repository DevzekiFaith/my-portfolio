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
    'ajopay': {
      title: 'Ajopay Digital Savings App',
      category: 'Frontend-Heavy FinTech',
      image: '/Ajo.png',
      description: 'Digital savings and contribution platform with modern UI/UX design and secure financial transactions.',
      longDescription: 'Ajopay is a comprehensive digital savings platform that revolutionizes how people save and contribute to group savings. Built with a focus on exceptional user experience, it features modern UI/UX design, secure financial transactions, and intuitive mobile-first interface.',
      features: [
        'Modern, responsive UI/UX design',
        'Secure digital savings and contributions',
        'Real-time transaction tracking',
        'Group savings management',
        'Mobile-first responsive design',
        'Interactive financial dashboards'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
      challenges: [
        'Creating intuitive financial interfaces for non-tech users',
        'Ensuring secure transaction handling',
        'Building responsive design across all devices',
        'Implementing real-time data updates'
      ],
      solutions: [
        'Designed user-centered interface with extensive user testing',
        'Implemented industry-standard security protocols',
        'Used modern CSS frameworks for consistent responsive design',
        'Built real-time data synchronization with WebSocket connections'
      ],
      results: [
        '95% user satisfaction with interface design',
        '40% increase in user engagement',
        '60% reduction in support tickets',
        'Mobile-first approach achieved 100% device compatibility'
      ],
      github: 'https://github.com/yourusername/ajopay-app',
      live: 'https://ajopay-demo.vercel.app'
    },
    'crypto-trading': {
      title: 'Crypto Trading Platform',
      category: 'Frontend-Heavy FinTech',
      image: '/db1.png',
      description: 'Advanced cryptocurrency trading platform with real-time data visualization and secure trading features.',
      longDescription: 'A sophisticated cryptocurrency trading platform that provides real-time market data, advanced charting capabilities, and secure trading features. Built with a focus on performance and user experience, it delivers professional-grade trading tools with an intuitive interface.',
      features: [
        'Real-time cryptocurrency price tracking',
        'Advanced trading charts and indicators',
        'Secure wallet integration',
        'Portfolio management and analytics',
        'Responsive design for all devices',
        'Interactive data visualizations'
      ],
      technologies: ['React', 'TypeScript', 'WebSocket', 'Chart.js', 'D3.js', 'Node.js'],
      challenges: [
        'Handling real-time data streams efficiently',
        'Creating responsive charts for mobile devices',
        'Implementing secure trading mechanisms',
        'Optimizing performance for large datasets'
      ],
      solutions: [
        'Implemented efficient WebSocket connections for real-time data',
        'Created responsive chart components with mobile optimization',
        'Used secure API endpoints with proper authentication',
        'Optimized rendering with React.memo and virtualization'
      ],
      results: [
        '99.9% uptime for real-time data feeds',
        '50% faster chart rendering on mobile',
        'Zero security incidents',
        'Professional-grade trading experience'
      ],
      github: 'https://github.com/yourusername/crypto-trading-platform',
      live: 'https://crypto-trading-demo.vercel.app'
    },
    'payment-gateway': {
      title: 'Payment Gateway Solution',
      category: 'Frontend-Heavy FinTech',
      image: '/db2.png',
      description: 'Secure payment processing platform with modern UI and comprehensive transaction management.',
      longDescription: 'A comprehensive payment gateway solution that provides secure, fast, and reliable payment processing for businesses. Features modern UI design, real-time transaction monitoring, and comprehensive analytics dashboard for merchants.',
      features: [
        'Secure payment processing',
        'Real-time transaction monitoring',
        'Comprehensive analytics dashboard',
        'Multi-currency support',
        'Mobile-optimized payment forms',
        'Fraud detection and prevention'
      ],
      technologies: ['React', 'Node.js', 'Stripe API', 'MongoDB', 'Express.js', 'JWT'],
      challenges: [
        'Ensuring PCI compliance and security',
        'Creating seamless payment user experience',
        'Handling multiple payment methods',
        'Building comprehensive analytics'
      ],
      solutions: [
        'Implemented industry-standard security protocols',
        'Designed intuitive payment flow with minimal friction',
        'Integrated multiple payment providers',
        'Built real-time analytics with data visualization'
      ],
      results: [
        '99.99% transaction success rate',
        'PCI DSS compliance achieved',
        '30% increase in conversion rates',
        'Comprehensive fraud protection'
      ],
      github: 'https://github.com/yourusername/payment-gateway',
      live: 'https://payment-gateway-demo.vercel.app'
    },
    'church-website': {
      title: 'Church Website Platform',
      category: 'UI/UX Focused Applications',
      image: '/ch1.png',
      description: 'Modern church website with event management, online giving, and community features.',
      longDescription: 'A comprehensive church website platform that combines modern design with practical functionality. Features event management, online giving, sermon streaming, and community engagement tools, all wrapped in a beautiful, accessible interface.',
      features: [
        'Modern, accessible website design',
        'Event management and registration',
        'Online giving and donations',
        'Sermon streaming and archives',
        'Community engagement features',
        'Mobile-responsive design'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Cloudinary'],
      challenges: [
        'Creating accessible design for all users',
        'Integrating multiple third-party services',
        'Building scalable event management',
        'Ensuring mobile-first experience'
      ],
      solutions: [
        'Implemented WCAG accessibility guidelines',
        'Created modular component architecture',
        'Built flexible event management system',
        'Used responsive design principles throughout'
      ],
      results: [
        '100% accessibility compliance',
        '60% increase in online engagement',
        '40% growth in online donations',
        'Seamless mobile experience'
      ],
      github: 'https://github.com/yourusername/church-website',
      live: 'https://church-website-demo.vercel.app'
    },
    'business-management': {
      title: 'Business Management System',
      category: 'UI/UX Focused Applications',
      image: '/og2.png',
      description: 'Comprehensive business management platform with inventory, CRM, and analytics.',
      longDescription: 'A full-featured business management system that streamlines operations for small and medium enterprises. Features inventory management, customer relationship management, financial tracking, and comprehensive analytics with an intuitive, modern interface.',
      features: [
        'Inventory management with real-time tracking',
        'Customer relationship management (CRM)',
        'Financial reporting and analytics',
        'Multi-user access with role-based permissions',
        'Mobile-responsive design',
        'Data export and reporting capabilities'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'Tailwind CSS'],
      challenges: [
        'Complex data relationships and real-time updates',
        'Creating intuitive interface for non-technical users',
        'Scalable architecture for growing businesses',
        'Multi-user collaboration features'
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
      github: 'https://github.com/yourusername/business-management',
      live: 'https://business-management-demo.vercel.app'
    },
    'mobile-apps': {
      title: 'Mobile Banking App',
      category: 'UI/UX Focused Applications',
      image: '/t1.png',
      description: 'Secure mobile banking solution with modern UI and comprehensive financial features.',
      longDescription: 'A comprehensive mobile banking application that provides secure, user-friendly access to banking services. Features modern UI design, biometric authentication, real-time transactions, and comprehensive financial management tools.',
      features: [
        'Modern, intuitive mobile interface',
        'Biometric authentication and security',
        'Real-time transaction processing',
        'Comprehensive financial management',
        'Push notifications and alerts',
        'Offline transaction capabilities'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux', 'Biometric Auth', 'WebSocket', 'SQLite'],
      challenges: [
        'Creating secure mobile banking experience',
        'Implementing biometric authentication',
        'Handling offline functionality',
        'Optimizing for various screen sizes'
      ],
      solutions: [
        'Implemented industry-standard security protocols',
        'Used native biometric APIs for authentication',
        'Built offline-first architecture with sync capabilities',
        'Created responsive design system for all devices'
      ],
      results: [
        '99.9% security compliance',
        '95% user satisfaction rating',
        '50% faster transaction processing',
        'Zero security incidents'
      ],
      github: 'https://github.com/yourusername/mobile-banking-app',
      live: 'https://mobile-banking-demo.vercel.app'
    },
    'food-delivery': {
      title: 'Food Delivery App',
      category: 'React & Next.js Web Applications',
      image: '/Techeat food app.png',
      description: 'Modern food delivery platform with real-time tracking and seamless user experience.',
      longDescription: 'A comprehensive food delivery platform that connects customers with local restaurants. Features real-time order tracking, secure payments, restaurant management, and delivery coordination with a focus on exceptional user experience.',
      features: [
        'Real-time order tracking',
        'Secure payment processing',
        'Restaurant and menu management',
        'Delivery coordination system',
        'User reviews and ratings',
        'Responsive web and mobile design'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Google Maps API', 'WebSocket'],
      challenges: [
        'Real-time order tracking and updates',
        'Managing complex delivery logistics',
        'Creating seamless payment experience',
        'Optimizing for mobile performance'
      ],
      solutions: [
        'Implemented WebSocket for real-time updates',
        'Built efficient delivery routing algorithms',
        'Integrated secure payment processing',
        'Used progressive web app features for mobile optimization'
      ],
      results: [
        '30% increase in order completion rate',
        '25% reduction in delivery time',
        '95% customer satisfaction',
        'Seamless cross-platform experience'
      ],
      github: 'https://github.com/yourusername/food-delivery-app',
      live: 'https://food-delivery-demo.vercel.app'
    },
    'movie-streaming': {
      title: 'Movie Streaming Platform',
      category: 'React & Next.js Web Applications',
      image: '/movie-app.jpg.png',
      description: 'Modern streaming platform with high-quality video playback and personalized recommendations.',
      longDescription: 'A comprehensive movie streaming platform that delivers high-quality video content with personalized recommendations. Features advanced video streaming, user profiles, watchlists, and social features with a modern, responsive interface.',
      features: [
        'High-quality video streaming',
        'Personalized content recommendations',
        'User profiles and watchlists',
        'Social features and reviews',
        'Multi-device synchronization',
        'Responsive design for all screens'
      ],
      technologies: ['Next.js', 'React', 'Video.js', 'MongoDB', 'Node.js', 'Redis'],
      challenges: [
        'Optimizing video streaming performance',
        'Creating personalized recommendation engine',
        'Handling large video file storage',
        'Building responsive video player'
      ],
      solutions: [
        'Implemented adaptive bitrate streaming',
        'Built machine learning recommendation system',
        'Used cloud storage with CDN for video delivery',
        'Created responsive video player with custom controls'
      ],
      results: [
        '99.9% video streaming uptime',
        '40% increase in user engagement',
        'Seamless streaming across all devices',
        'Personalized content discovery'
      ],
      github: 'https://github.com/yourusername/movie-streaming-platform',
      live: 'https://movie-streaming-demo.vercel.app'
    },
    'ecommerce': {
      title: 'E-commerce Platform',
      category: 'React & Next.js Web Applications',
      image: '/v1.png',
      description: 'Complete online shopping solution with modern UI and comprehensive e-commerce features.',
      longDescription: 'A full-featured e-commerce platform that provides everything needed for online retail. Features product management, shopping cart, secure checkout, order tracking, and comprehensive admin dashboard with modern, responsive design.',
      features: [
        'Product catalog and management',
        'Shopping cart and checkout',
        'Order tracking and management',
        'User accounts and profiles',
        'Admin dashboard and analytics',
        'Mobile-responsive design'
      ],
      technologies: ['Next.js', 'React', 'Stripe', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      challenges: [
        'Creating scalable product catalog',
        'Implementing secure payment processing',
        'Building comprehensive admin features',
        'Optimizing for mobile commerce'
      ],
      solutions: [
        'Built efficient product management system',
        'Integrated secure payment processing',
        'Created comprehensive admin dashboard',
        'Implemented mobile-first responsive design'
      ],
      results: [
        '50% increase in conversion rates',
        '99.9% payment processing success',
        'Comprehensive business analytics',
        'Seamless mobile shopping experience'
      ],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-platform-demo.vercel.app'
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
                  className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-gray-700 hover:to-gray-800"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Live Demo</span>
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
