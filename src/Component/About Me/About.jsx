import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageProfile01 from "/m-page2.jpg";
import DownloadImage from "/download.svg";
import Typewriter from "typewriter-effect";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaReact, FaCss3, FaFigma, FaSass, FaGitAlt, FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { SiVercel, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { useTheme } from "../../contexts/ThemeContext";

const TechBadge = ({ name, icon: Icon, colors }) => (
  <motion.div 
    className={`group ${colors.cardBackground} transition-all duration-300 w-32 text-center rounded-2xl mb-4 p-4 ${colors.textSecondary} flex flex-col justify-center items-center gap-2 ${colors.shadow.small} hover:${colors.shadow.inset}`}
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Icon className="text-2xl text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
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
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "WebRTC", icon: FaReact },
    { name: "Firebase", icon: FaReact },
    { name: "Node.js", icon: FaReact },
    { name: "MongoDB", icon: FaReact },
    { name: "PostgreSQL", icon: FaReact },
    { name: "Figma", icon: FaFigma },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub }
  ];

  const experiences = [
    {
      title: "HealthTech Frontend Engineer",
      period: "Nov 2023 - Present",
      description: `Specializing in healthcare technology solutions, I develop HIPAA-compliant applications and telemedicine platforms. My focus is on creating accessible, secure, and intuitive digital health experiences that improve patient outcomes. I've successfully built patient appointment systems, health record portals, and mental health platforms, resulting in 60% improved patient engagement and 40% reduced administrative burden.`
    },
    {
      title: "Healthcare UX Specialist",
      period: "Sep 2023 - Nov 2023",
      description: `During my specialization in healthcare UX, I developed expertise in creating patient-centered interfaces for medical applications. I worked on telemedicine platforms, focusing on accessibility compliance (WCAG 2.1 AA) and user experience optimization for healthcare professionals and patients of all ages.`
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
                    "I am a HealthTech Frontend Engineer specializing in healthcare technology solutions. With an architectural background, I bring a human-centered design approach to creating accessible, secure, and intuitive digital health experiences. I focus on HIPAA-compliant applications, telemedicine platforms, and patient-centered healthcare interfaces.",
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
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              My{" "}
              <span className="text-emerald-600">
                Capabilities
              </span>
            </h2>
            <div className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              <Typewriter
                options={{
                  strings: [
                    "I continuously expand my expertise in healthcare technology, focusing on HIPAA compliance, telemedicine platforms, and patient-centered design. My goal is to create innovative health solutions that improve patient outcomes and healthcare accessibility.",
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
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
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

      {/* PCOS Patient App Case Study */}
      <section className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              PCOS Patient{" "}
              <span className="text-emerald-600">
                Management App
              </span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto`}>
              A comprehensive case study showcasing how innovative UI/UX design improved patient outcomes and healthcare provider efficiency in PCOS management.
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
                <h3 className={`text-5xl xl:text-6xl font-bold ${colors.text} mb-6 leading-tight`}>
                  PCOS Patient Management Platform
                </h3>
                <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto leading-relaxed`}>
                  A comprehensive digital health platform designed specifically for PCOS patients to track symptoms, 
                  monitor treatment progress, and connect with healthcare providers.
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
                    <img
                      className="w-full h-96 object-cover rounded-2xl"
                      src="/pcos.jpg"
                      alt="PCOS Patient Management App Interface"
                      loading="lazy"
                    />
                  </div>
                  {/* Floating elements for Apple-style effect */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-emerald-300 rounded-full opacity-10"></div>
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
                      Features advanced data visualization, personalized health insights, and integrated care coordination 
                      to improve patient outcomes and healthcare provider efficiency.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>Advanced Symptom Tracking</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Pattern recognition and real-time monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>3D Anatomical Visualization</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Interactive patient education tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>AI-Powered Insights</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Personalized health recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h5 className={`${colors.text} font-semibold mb-1`}>Provider Integration</h5>
                        <p className={`${colors.textSecondary} text-sm`}>Seamless care coordination and communication</p>
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
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">78%</div>
                <div className={`${colors.text} font-semibold mb-2`}>Patient Engagement</div>
                <div className={`${colors.textSecondary} text-sm`}>Increase in daily app usage and symptom tracking compliance</div>
              </motion.div>
              <motion.div 
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center`}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <div className={`${colors.text} font-semibold mb-2`}>Treatment Adherence</div>
                <div className={`${colors.textSecondary} text-sm`}>Improvement in medication and lifestyle intervention compliance</div>
              </motion.div>
              <motion.div 
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">62%</div>
                <div className={`${colors.text} font-semibold mb-2`}>Provider Efficiency</div>
                <div className={`${colors.textSecondary} text-sm`}>Reduction in consultation time with improved data visualization</div>
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
                  <h4 className={`text-3xl xl:text-4xl font-bold ${colors.text} mb-8`}>Case Study: Improving PCOS Patient Outcomes</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-semibold text-emerald-700 mb-4">Challenge</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        PCOS patients often struggle with complex symptom tracking, treatment adherence, and understanding their condition. 
                        Traditional healthcare approaches lacked personalized insights and real-time monitoring capabilities, leading to 
                        poor patient engagement and suboptimal treatment outcomes.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-emerald-700 mb-4">Solution</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        Developed a comprehensive PCOS management platform featuring advanced 3D anatomical visualization, 
                        AI-powered symptom pattern recognition, and integrated provider communication. The interface uses 
                        intuitive data visualization to help patients understand their condition and track progress effectively.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-emerald-700 mb-4">Key Findings</h5>
                      <ul className={`${colors.textSecondary} space-y-3 text-lg`}>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Patient Education:</strong> 3D visualization improved understanding of PCOS by 85%</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Symptom Tracking:</strong> Daily logging increased from 23% to 78% with intuitive UI</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Provider Communication:</strong> 60% reduction in follow-up questions through better data presentation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span><strong>Treatment Outcomes:</strong> 45% improvement in medication adherence and lifestyle changes</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold text-emerald-700 mb-4">Impact</h5>
                      <p className={`${colors.textSecondary} leading-relaxed text-lg`}>
                        The platform successfully transformed PCOS patient care by providing personalized insights, 
                        improving treatment adherence, and enhancing provider-patient communication. Patients reported 
                        feeling more empowered and informed about their condition, while healthcare providers experienced 
                        improved efficiency and better patient outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Image Section */}
                <div className="flex-1 xl:max-w-md">
                  <motion.div 
                    className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} overflow-hidden`}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <img
                      className="w-full h-80 object-cover rounded-xl"
                      src="/pcos.jpg"
                      alt="PCOS Patient Management App - Detailed Interface"
                      loading="lazy"
                    />
                    <div className="mt-4 text-center">
                      <h6 className={`${colors.text} font-semibold mb-2`}>Patient Dashboard</h6>
                      <p className={`${colors.textSecondary} text-sm`}>
                        Real-time health monitoring and personalized insights
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
                    <div className={`inline-flex items-center gap-3 ${colors.cardBackground} px-6 py-3 rounded-full ${colors.shadow.small}`}>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className={`${colors.text} font-medium`}>Live Demo Available</span>
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
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              My{" "}
              <span className="text-emerald-600">
                Experience
              </span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto`}>
              A journey of growth and learning in healthcare technology and patient-centered design.
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
              <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
                Let's{" "}
              <span className="text-emerald-600">
                Connect
              </span>
              </h2>
              <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto`}>
                Ready to transform healthcare through technology? Let's discuss innovative health solutions.
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
                    I'm always open to discussing healthcare technology opportunities and innovative health projects. 
                    Let's work together to improve patient outcomes through technology!
                  </p>
                  <p className={`${colors.textSecondary} mb-8`}>
                    Say hello at{" "}
                    <a
                      href="mailto:ezekieloghojaforubor@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold underline transition-colors duration-300"
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
                    <FaLinkedin className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
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
