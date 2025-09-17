import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileImage from "/p.image.jpg";
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaHeartbeat, FaChartLine, FaShieldAlt, FaMobileAlt, FaDatabase, FaUsers, FaCreditCard, FaStethoscope, FaUserMd, FaFileMedical } from "react-icons/fa";
import { MdMarkEmailRead, MdBusiness, MdAccountBalance, MdHealthAndSafety, MdTrendingUp, MdSecurity } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [toastVisible, setToastVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
      reset();
    }, 3000);
  };

  return (
    <div className={`min-h-screen ${colors.background} relative transition-colors duration-300`}>
      {/* Toast Notification */}
      {toastVisible && (
        <motion.div 
          className={`fixed top-6 right-6 ${colors.cardBackground} ${colors.accent} px-6 py-4 rounded-2xl ${colors.shadow.medium} transition-all duration-500 z-50`}
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
        <div className="flex xl:flex-row flex-col justify-between items-center gap-16 min-h-[80vh]">
          <motion.div 
            className="flex-1 max-w-2xl text-center xl:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.h1 
                className={`text-4xl xl:text-6xl font-bold ${colors.text} mb-6 leading-tight`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <motion.span 
                  className="text-purple-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Faith
                </motion.span>
              </motion.h1>
              <motion.div 
                className={`text-lg xl:text-xl ${colors.textSecondary} font-light leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer specializing in Business Solutions & HealthTech.",
                      "Building innovative applications for SMEs, FinTech, and Healthcare sectors.",
                      "Creating digital solutions that drive business growth and improve lives."
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className={`group flex items-center gap-3 ${colors.cardBackground} ${colors.accent} px-8 py-4 rounded-2xl font-semibold text-lg ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 focus:outline-none`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
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
                  <FaLinkedin className="w-5 h-5 text-purple-600" />
                </motion.a>
                <motion.a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5 text-purple-600" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 xl:max-w-lg"
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
                src={ProfileImage}
                alt="Faith Oghojafor"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="container mx-auto px-6 py-16">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#business-solutions"
            className={`group flex items-center gap-4 ${colors.cardBackground} px-8 py-6 rounded-2xl ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 flex-1`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 bg-purple-100 rounded-xl">
              <MdBusiness className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-left">
              <h3 className={`text-xl font-bold ${colors.text}`}>Business Solutions</h3>
              <p className={`${colors.textSecondary} text-sm`}>SMEs & FinTech Applications</p>
            </div>
            <FaArrowRight className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#health-solutions"
            className={`group flex items-center gap-4 ${colors.cardBackground} px-8 py-6 rounded-2xl ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 flex-1`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 bg-purple-100 rounded-xl">
              <MdHealthAndSafety className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-left">
              <h3 className={`text-xl font-bold ${colors.text}`}>Health Solutions</h3>
              <p className={`${colors.textSecondary} text-sm`}>Telemedicine & Patient Care</p>
            </div>
            <FaArrowRight className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </section>

      {/* Business Solutions Section */}
      <section id="business-solutions" className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              Business{" "}
              <span className="text-blue-600">Solutions</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Empowering small and medium enterprises with cutting-edge administrative tools and fintech solutions that streamline operations and drive growth.
            </p>
          </motion.div>

          {/* Business Solutions Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* SME Management System */}
            <Link to="/project/sme-management">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MdBusiness className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>SME Management</h3>
                </div>
                <img
                  src="/og2.png"
                  alt="SME Management System"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  Comprehensive business management platform for small and medium enterprises with inventory, CRM, and analytics.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Node.js</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>

            {/* FinTech Dashboard */}
            <Link to="/project/fintech-dashboard">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaCreditCard className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>FinTech Dashboard</h3>
                </div>
                <img
                  src="/db1.png"
                  alt="FinTech Dashboard"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  Advanced financial dashboard with real-time analytics, transaction monitoring, and risk assessment tools.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Chart.js</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>

            {/* Analytics Platform */}
            <Link to="/project/analytics-platform">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaChartLine className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>Analytics Platform</h3>
                </div>
                <img
                  src="/db2.png"
                  alt="Analytics Platform"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  Business intelligence platform with advanced data visualization and predictive analytics capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">D3.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Business Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaUsers, title: "User Management", desc: "Role-based access control" },
              { icon: FaDatabase, title: "Data Security", desc: "Enterprise-grade encryption" },
              { icon: MdTrendingUp, title: "Growth Analytics", desc: "Real-time performance metrics" },
              { icon: MdSecurity, title: "Compliance", desc: "Industry-standard security" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-purple-100 rounded-xl w-fit mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className={`${colors.text} font-semibold mb-2`}>{feature.title}</h4>
                <p className={`${colors.textSecondary} text-sm`}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Health Solutions Section */}
      <section id="health-solutions" className={`py-24 ${colors.background}`}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              Health{" "}
              <span className="text-blue-600">Solutions</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Revolutionizing healthcare through innovative telemedicine platforms and patient management systems that improve outcomes and accessibility.
            </p>
          </motion.div>

          {/* Health Solutions Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* PCOS Management */}
            <Link to="/project/pcos-management">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaStethoscope className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>PCOS Management</h3>
                </div>
                <img
                  src="/md1.jpg"
                  alt="PCOS Patient Management"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  Comprehensive PCOS patient management platform with 3D visualization and AI-powered insights.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">WebRTC</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>

            {/* Telemedicine Platform */}
            <Link to="/project/telemedicine">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaUserMd className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>Telemedicine</h3>
                </div>
                <img
                  src="/md2.jpg"
                  alt="Telemedicine Platform"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  Secure video consultation platform with appointment scheduling and prescription management.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">WebRTC</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Firebase</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>

            {/* Health Records */}
            <Link to="/project/health-records">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium} group cursor-pointer w-80 h-96 flex flex-col`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaFileMedical className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>Health Records</h3>
                </div>
                <img
                  src="/md3.jpg"
                  alt="Health Records Portal"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  loading="lazy"
                />
                <p className={`${colors.textSecondary} mb-4 text-sm leading-relaxed`}>
                  HIPAA-compliant patient health record portal with secure data sharing and analytics.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">HIPAA</span>
                  </div>
                  <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Health Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaHeartbeat, title: "Patient Monitoring", desc: "Real-time health tracking" },
              { icon: FaShieldAlt, title: "HIPAA Compliance", desc: "Secure data protection" },
              { icon: FaMobileAlt, title: "Mobile Access", desc: "Cross-platform availability" },
              { icon: FaUserMd, title: "Provider Tools", desc: "Advanced clinical features" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-purple-100 rounded-xl w-fit mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className={`${colors.text} font-semibold mb-2`}>{feature.title}</h4>
                <p className={`${colors.textSecondary} text-sm`}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              Let's{" "}
              <span className="text-blue-600">Connect</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Ready to transform your business or healthcare operations? Let's discuss how we can work together to create innovative solutions.
            </p>
          </motion.div>

          <div className="grid xl:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>Get in touch</h3>
                <p className={`${colors.textSecondary} mb-6 leading-relaxed`}>
                  I'm always open to discussing new opportunities and innovative projects. 
                  Let's work together to create solutions that make a difference!
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
                  <FaLinkedin className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
                <motion.a
                  href="https://github.com/DevzekiFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;