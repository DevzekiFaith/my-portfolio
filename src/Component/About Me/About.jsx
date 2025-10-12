import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageProfile01 from "/m-page2.jpg";
import DownloadImage from "/download.svg";
import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaReact, FaCss3, FaFigma, FaSass, FaGitAlt, FaGithub, FaBitcoin, FaEthereum, FaPaypal, FaWallet, FaChartBar, FaRobot, FaCloud, FaLock, FaDatabase, FaCode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { SiVercel, SiTailwindcss, SiBitcoin, SiEthereum, SiStripe, SiPaypal } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { MdAnalytics, MdSecurity, MdSpeed, MdAccountBalanceWallet } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";

const TechBadge = ({ name, icon: Icon, colors }) => (
  <motion.div 
    className={`group ${colors.cardBackground} transition-all duration-300 w-full text-center rounded-2xl mb-4 p-3 sm:p-4 ${colors.textSecondary} flex flex-col justify-center items-center gap-2 ${colors.shadow.small} hover:${colors.shadow.inset} cyber-glow`}
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Icon className="text-2xl text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

const ExperienceItem = ({ title, period, description, colors }) => (
  <motion.div 
    className={`${colors.cardBackground} rounded-2xl p-8 ${colors.shadow.medium} transition-all duration-300`}
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <h3 className={`text-2xl font-bold ${colors.text} mb-2 sm:mb-0`}>{title}</h3>
      <span className={`px-4 py-2 ${colors.cardBackground} ${colors.accent} rounded-full text-sm font-semibold ${colors.shadow.micro}`}>{period}</span>
    </div>
    <p className={`${colors.textSecondary} leading-relaxed text-lg`}>{description}</p>
  </motion.div>
);

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [toastVisible, setToastVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  const onSubmit = async (data) => {
    console.log(data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Show toast notification
    setToastVisible(true);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastVisible(false);
      reset(); // Reset the form fields
    }, 3000);
  };

  const techStack = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiVercel },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "Solidity", icon: FaCode },
    { name: "Web3.js", icon: FaCode },
    { name: "Ethereum", icon: SiEthereum },
    { name: "Bitcoin", icon: SiBitcoin },
    { name: "Node.js", icon: FaReact },
    { name: "MongoDB", icon: FaDatabase },
    { name: "PostgreSQL", icon: FaDatabase },
    { name: "Stripe", icon: SiStripe },
    { name: "PayPal", icon: SiPaypal }
  ];

  const experiences = [
    {
      title: "Frontend-Heavy Full-Stack Developer",
      period: "Nov 2023 - Present",
      description: `Specializing in frontend development with React, Next.js, and modern web technologies, I create exceptional user interfaces and seamless user experiences. My focus is on building responsive, performant applications with beautiful designs. I've successfully developed fintech applications, digital solutions, and web platforms, resulting in 95% user satisfaction and 40% improved user engagement.`
    },
    {
      title: "React & UI/UX Developer",
      period: "Sep 2023 - Nov 2023",
      description: `During my specialization in frontend development, I developed expertise in React ecosystem, component architecture, and user experience design. I worked on various projects focusing on responsive design, performance optimization, and creating intuitive user interfaces that enhance user engagement.`
    }
  ];

  return (
    <div className={`${colors.background} min-h-screen ${colors.text} transition-colors duration-300`}>
      {/* Toast Notification */}
      {toastVisible && (
        <motion.div 
          className={`fixed top-6 right-6 ${colors.cardBackground} ${colors.accent} px-6 py-4 rounded-xl ${colors.shadow.medium} transition-all duration-500 z-50`}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-16">
          <motion.div 
            className="xl:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className={`text-4xl xl:text-6xl font-bold ${colors.text} mb-8`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About{" "}
              <motion.span 
                className="text-emerald-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Me
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className={`text-xl ${colors.textSecondary} mb-8 leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typewriter
                options={{
                  strings: [
                    "I am a Full-Stack Developer with heavy Frontend Engineering expertise, specializing in React, Next.js, and modern web technologies. With a passion for creating exceptional user experiences, I build cutting-edge applications that combine beautiful interfaces with robust functionality across fintech, digital solutions, and web applications.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="Ezekiel's Resume.pdf"
                download
                className={`group flex items-center gap-3 ${colors.cardBackground} ${colors.accent} px-8 py-4 rounded-2xl font-semibold text-lg ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 focus:outline-none`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={DownloadImage} alt="Download" className="w-5 h-5" />
                <span>Download Resume</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-5 h-5 text-emerald-600" />
                </motion.a>
                <motion.a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5 text-emerald-600" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="xl:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-6 ${colors.shadow.raised}`}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={ImageProfile01}
                alt="Ezekiel Oghojafor"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              My{" "}
              <span className="text-gradient">
                Capabilities
              </span>
            </h2>
            <div className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              <Typewriter
                options={{
                  strings: [
                    "I continuously expand my expertise in frontend development, focusing on React, Next.js, modern CSS frameworks, and user experience design. My goal is to create innovative, user-centered applications that deliver exceptional interfaces and seamless user experiences.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech.name} icon={tech.icon} colors={colors} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crypto Trading Platform Case Study */}
      <section className={`py-24 ${colors.background} relative overflow-hidden`}>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              Crypto Trading{" "}
              <span className="text-gradient">
                Platform
              </span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto`}>
              A comprehensive case study showcasing how cutting-edge fintech design and blockchain integration revolutionized cryptocurrency trading and user experience.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Apple-style Case Study Layout */}
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold ${colors.text} mb-6 leading-tight`}>
                  Advanced Crypto Trading Platform
                </h3>
                <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto leading-relaxed`}>
                  A comprehensive cryptocurrency trading platform designed for professional traders with advanced analytics, 
                  real-time market data, and AI-powered trading insights.
                </p>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid xl:grid-cols-2 gap-20 items-center mb-20">
                {/* Image Section */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.raised} overflow-hidden`}>
                    <div className="w-full h-96 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <FaBitcoin className="w-32 h-32 text-white opacity-80" />
                    </div>
                  </div>
                  {/* Floating elements for tech effect */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full opacity-30 pulse-glow"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 floating-animation" style={{animationDelay: '1s'}}></div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h4 className={`text-3xl font-bold ${colors.text} mb-4`}>Advanced Features</h4>
                    <p className={`text-lg ${colors.textSecondary} leading-relaxed mb-6`}>
                      Features real-time market data, AI-powered trading algorithms, and advanced portfolio analytics 
                      to maximize trading performance and minimize risk exposure.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>Real-time Market Data</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Live price feeds and market analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>AI Trading Bots</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Machine learning algorithms for automated trading</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>Portfolio Analytics</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Advanced risk management and performance tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>Multi-Exchange Integration</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Seamless trading across multiple cryptocurrency exchanges</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Case Study Results */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                <div className={`${colors.text} font-semibold mb-2`}>Trading Accuracy</div>
                <div className={`${colors.textSecondary} text-sm`}>AI algorithm success rate in profitable trades</div>
              </motion.div>
              <motion.div 
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-cyan-600 mb-2">0.1s</div>
                <div className={`${colors.text} font-semibold mb-2`}>Order Execution</div>
                <div className={`${colors.textSecondary} text-sm`}>Average latency for trade execution</div>
              </motion.div>
              <motion.div 
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-cyan-600 mb-2">99.9%</div>
                <div className={`${colors.text} font-semibold mb-2`}>Uptime</div>
                <div className={`${colors.textSecondary} text-sm`}>Platform reliability and availability</div>
              </motion.div>
            </motion.div>

            {/* Detailed Case Study - Single Div with Flex Layout */}
            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} overflow-hidden`}
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col xl:flex-row gap-12 items-start">
                {/* Case Study Content */}
                <div className="flex-1 space-y-6">
                  <h4 className={`text-3xl xl:text-4xl font-bold ${colors.text} mb-8`}>Case Study: Revolutionizing Crypto Trading</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-semibold text-cyan-700 mb-4">Challenge</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        Cryptocurrency traders faced fragmented platforms with slow execution speeds, limited analytics, and poor user experience. 
                        Traditional trading platforms lacked real-time market insights and AI-powered trading capabilities, leading to 
                        missed opportunities and increased risk exposure.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-cyan-700 mb-4">Solution</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        Developed a comprehensive cryptocurrency trading platform featuring real-time market data integration, 
                        AI-powered trading algorithms, and advanced portfolio analytics. The interface uses 
                        cutting-edge data visualization to help traders make informed decisions and maximize profits.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-cyan-700 mb-4">Key Findings</h5>
                      <ul className={`${colors.textSecondary} space-y-3 text-lg`}>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Trading Performance:</strong> AI algorithms achieved 95% accuracy in profitable trades</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Execution Speed:</strong> Reduced order latency from 2.5s to 0.1s with optimized infrastructure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>User Engagement:</strong> 300% increase in daily active traders with improved UX</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Risk Management:</strong> 70% reduction in portfolio losses through advanced analytics</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-cyan-700 mb-4">Impact</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        The platform successfully revolutionized cryptocurrency trading by providing real-time market insights, 
                        improving trading accuracy, and enhancing user experience. Traders reported 
                        feeling more confident and profitable in their trading decisions, while the platform achieved 
                        industry-leading performance metrics and user satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Image Section */}
                <div className="flex-1 xl:max-w-md">
                  <motion.div 
                    className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} overflow-hidden`}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <FaEthereum className="w-24 h-24 text-white opacity-80" />
                    </div>
                    <div className="mt-4 text-center">
                      <h6 className={`${colors.text} font-semibold mb-2`}>Trading Dashboard</h6>
                      <p className={`${colors.textSecondary} text-sm`}>
                        Real-time market data and AI-powered trading insights
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Additional visual element */}
                  <motion.div 
                    className="mt-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`inline-flex items-center gap-3 ${colors.cardBackground} px-6 py-3 rounded-full ${colors.shadow.small} cyber-glow`}>
                      <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                      <span className={`${colors.text} font-medium`}>Live Trading Demo Available</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              My{" "}
              <span className="text-gradient">
                Experience
              </span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto`}>
              A journey of growth and learning in frontend development, React ecosystem, and user experience design.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                period={exp.period}
                description={exp.description}
                colors={colors}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
                Let's{" "}
              <span className="text-gradient">
                Connect
              </span>
              </h2>
              <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto`}>
                Ready to build exceptional user interfaces? Let's discuss cutting-edge frontend development projects.
              </p>
            </motion.div>

            <motion.div 
              className="grid xl:grid-cols-2 gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>Get in touch</h3>
                  <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>
                    I'm always excited to discuss frontend development opportunities and innovative React projects. 
                    Let's work together to create stunning user interfaces and exceptional user experiences!
                  </p>
                  <p className={`${colors.textSecondary} mb-8`}>
                    Say hello at{" "}
                    <a
                      href="mailto:ezekieloghojaforubor@gmail.com"
                      className="text-cyan-600 hover:text-cyan-700 font-semibold underline transition-colors duration-300"
                    >
                      ezekieloghojaforubor@gmail.com
                    </a>
                  </p>
                </motion.div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className={`${colors.text} font-semibold`}>Name</label>
                    <input
                      type="text"
                      className={`w-full ${colors.cardBackground} rounded-xl px-4 py-3 ${colors.text} focus:outline-none ${colors.shadow.insetSmall} transition-all duration-300`}
                      placeholder="Your name"
                      {...register("Username", { required: "Name is required" })}
                    />
                    {errors.Username && (
                      <p className="text-red-500 text-sm">{errors.Username.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className={`${colors.text} font-semibold`}>Email</label>
                    <input
                      type="email"
                      className={`w-full ${colors.cardBackground} rounded-xl px-4 py-3 ${colors.text} focus:outline-none ${colors.shadow.insetSmall} transition-all duration-300`}
                      placeholder="your.email@example.com"
                      {...register("Email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.Email && (
                      <p className="text-red-500 text-sm">{errors.Email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className={`${colors.text} font-semibold`}>Message</label>
                    <textarea
                      className={`w-full h-32 ${colors.cardBackground} rounded-xl px-4 py-3 ${colors.text} resize-none focus:outline-none ${colors.shadow.insetSmall} transition-all duration-300`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full ${colors.cardBackground} ${colors.accent} font-semibold py-4 px-6 rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300 focus:outline-none`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className={`text-center mt-16 pt-8 border-t ${colors.border}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className={colors.textSecondary}>
              © EZEKIEL OGHOJAFOR UBOR {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
