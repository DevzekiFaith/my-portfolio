import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileImage from "/p.image.jpg";
import { useForm } from "react-hook-form";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaChartLine, FaShieldAlt, FaMobileAlt, FaDatabase, FaUsers, FaCreditCard, FaBitcoin, FaEthereum, FaPaypal, FaWallet, FaChartBar, FaRobot, FaCloud, FaLock } from "react-icons/fa";
import { MdMarkEmailRead, MdBusiness, MdAccountBalance, MdTrendingUp, MdSecurity, MdPayment, MdAnalytics, MdSpeed, MdAccountBalanceWallet } from "react-icons/md";
import { SiBitcoin, SiEthereum, SiStripe, SiPaypal } from "react-icons/si";
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
      <section className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-16 min-h-[85vh]">
          <motion.div 
            className="flex-1 max-w-2xl text-center xl:text-left px-4 md:px-6 lg:px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10 md:mb-12">
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
                      "Full-Stack Developer with heavy Frontend Engineering expertise in React, Next.js & Modern Web Technologies.",
                      "Building stunning user interfaces and seamless user experiences for fintech, digital solutions, and web applications.",
                      "Creating pixel-perfect, responsive applications with cutting-edge frontend technologies and robust backend integration."
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
            className="flex-1 xl:max-w-lg px-4 md:px-6 lg:px-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div 
            className={`${colors.cardBackground} rounded-3xl p-8 md:p-10 ${colors.shadow.raised} relative overflow-hidden`}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
            <div className="absolute inset-0 tech-grid opacity-20"></div>
            <div className="relative z-10">
              <img
                src={ProfileImage}
                alt="Faith Oghojafor"
                className="w-full h-auto rounded-2xl floating-animation"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full opacity-30 pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 floating-animation" style={{animationDelay: '1s'}}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Categories Showcase */}
      <section className="container mx-auto px-6 py-16">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#fintech-solutions"
            className={`group flex items-center gap-4 ${colors.cardBackground} px-8 py-6 rounded-2xl ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 flex-1 cyber-glow`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl">
              <FaBitcoin className="w-8 h-8 text-cyan-600" />
            </div>
            <div className="text-left">
              <h3 className={`text-xl font-bold ${colors.text}`}>Frontend-First FinTech</h3>
              <p className={`${colors.textSecondary} text-sm`}>React-based financial interfaces</p>
            </div>
            <FaArrowRight className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#digital-solutions"
            className={`group flex items-center gap-4 ${colors.cardBackground} px-8 py-6 rounded-2xl ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 flex-1 cyber-glow`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
              <FaWallet className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-left">
              <h3 className={`text-xl font-bold ${colors.text}`}>UI/UX Focused Apps</h3>
              <p className={`${colors.textSecondary} text-sm`}>User-centered design & interactions</p>
            </div>
            <FaArrowRight className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="#web-applications"
            className={`group flex items-center gap-4 ${colors.cardBackground} px-8 py-6 rounded-2xl ${colors.shadow.medium} hover:${colors.shadow.inset} transition-all duration-300 flex-1 cyber-glow`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
              <FaUsers className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-left">
              <h3 className={`text-xl font-bold ${colors.text}`}>Modern Web Apps</h3>
              <p className={`${colors.textSecondary} text-sm`}>React, Next.js & responsive design</p>
            </div>
            <FaArrowRight className="ml-auto group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </section>

      {/* FinTech Solutions Section */}
      <section id="fintech-solutions" className={`py-24 ${colors.background} relative overflow-hidden`}>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              <span className="text-gradient">Frontend-Heavy</span>{" "}
              <span className="text-cyan-600">FinTech Solutions</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Crafting exceptional user interfaces for financial applications with React, Next.js, and modern frontend technologies that deliver seamless user experiences.
            </p>
          </motion.div>

          {/* FinTech Solutions Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Ajopay Digital Savings App */}
            <Link to="/project/ajopay">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/Ajo.png"
                    alt="Ajopay Digital Savings App"
                    className="w-full h-full object-cover"
                  loading="lazy"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Ajopay Savings App</h3>
                      <p className="text-green-200 text-sm">Digital savings & contribution platform</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Crypto Trading Platform */}
            <Link to="/project/crypto-trading">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/db1.png"
                    alt="Crypto Trading Platform"
                    className="w-full h-full object-cover"
                  loading="lazy"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Crypto Trading Platform</h3>
                      <p className="text-cyan-200 text-sm">Real-time trading with advanced analytics</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Payment Gateway */}
            <Link to="/project/payment-gateway">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/db2.png"
                    alt="Payment Gateway System"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Payment Gateway</h3>
                      <p className="text-blue-200 text-sm">Secure multi-currency payment processing</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* FinTech Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaCode, title: "React Development", desc: "Modern component-based architecture" },
              { icon: FaShieldAlt, title: "Secure Frontend", desc: "Client-side security & validation" },
              { icon: MdAnalytics, title: "Interactive Dashboards", desc: "Real-time data visualization" },
              { icon: FaBitcoin, title: "Payment UIs", desc: "Intuitive payment interfaces" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl w-fit mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className={`${colors.text} font-semibold mb-2`}>{feature.title}</h4>
                <p className={`${colors.textSecondary} text-sm`}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section id="digital-solutions" className={`py-24 ${colors.background} relative overflow-hidden`}>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              <span className="text-gradient">UI/UX</span>{" "}
              <span className="text-cyan-600">Focused Applications</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Designing and developing user-centered applications with pixel-perfect interfaces, smooth animations, and intuitive user experiences.
            </p>
          </motion.div>

          {/* Digital Solutions Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Church Website */}
            <Link to="/project/church-website">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/ch1.png"
                    alt="Church Website"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Church Website</h3>
                      <p className="text-blue-200 text-sm">Community engagement & event management</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Business Management System */}
            <Link to="/project/business-management">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/og2.png"
                    alt="Business Management System"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Business Management</h3>
                      <p className="text-purple-200 text-sm">Complete business operations platform</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Mobile App Development */}
            <Link to="/project/mobile-apps">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/t1.png"
                    alt="Mobile Banking App"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Mobile Banking App</h3>
                      <p className="text-green-200 text-sm">Secure mobile banking solution</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Digital Solutions Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaUsers, title: "User Experience", desc: "Intuitive & engaging interfaces" },
              { icon: FaMobileAlt, title: "Responsive Design", desc: "Mobile-first approach" },
              { icon: FaCode, title: "Component Architecture", desc: "Reusable UI components" },
              { icon: MdSpeed, title: "Performance", desc: "Optimized frontend performance" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl w-fit mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className={`${colors.text} font-semibold mb-2`}>{feature.title}</h4>
                <p className={`${colors.textSecondary} text-sm`}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Web Applications Section */}
      <section id="web-applications" className={`py-24 ${colors.background} relative overflow-hidden`}>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl xl:text-5xl font-bold ${colors.text} mb-6`}>
              <span className="text-gradient">React & Next.js</span>{" "}
              <span className="text-cyan-600">Web Applications</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Building modern, responsive web applications with React, Next.js, and cutting-edge frontend technologies that deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* Web Applications Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Food Delivery App */}
            <Link to="/project/food-delivery">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/Techeat food app.png"
                    alt="Food Delivery App"
                    className="w-full h-full object-cover"
                  loading="lazy"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Food Delivery App</h3>
                      <p className="text-orange-200 text-sm">Restaurant ordering & delivery platform</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Movie Streaming Platform */}
            <Link to="/project/movie-streaming">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/movie-app.jpg.png"
                    alt="Movie Streaming Platform"
                    className="w-full h-full object-cover"
                  loading="lazy"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">Movie Streaming</h3>
                      <p className="text-red-200 text-sm">Netflix-style streaming platform</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* E-commerce Platform */}
            <Link to="/project/ecommerce">
              <motion.div 
                className={`${colors.cardBackground} rounded-3xl p-4 ${colors.shadow.medium} group cursor-pointer w-80 h-80 flex items-center justify-center cyber-glow`}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/v1.png"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">E-commerce Platform</h3>
                      <p className="text-indigo-200 text-sm">Complete online shopping solution</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Web Applications Features */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FaMobileAlt, title: "Responsive Design", desc: "Mobile-first React components" },
              { icon: FaShieldAlt, title: "Frontend Security", desc: "Secure client-side architecture" },
              { icon: MdAnalytics, title: "Performance Optimized", desc: "Fast loading & smooth UX" },
              { icon: FaUsers, title: "Modern UI/UX", desc: "Cutting-edge interface design" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`${colors.cardBackground} rounded-2xl p-6 ${colors.shadow.small} text-center cyber-glow`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl w-fit mx-auto mb-4">
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
              <span className="text-gradient">Connect</span>
            </h2>
            <p className={`text-lg ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Ready to build stunning user interfaces and exceptional user experiences? Let's discuss how we can create cutting-edge frontend applications with React, Next.js, and modern web technologies.
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
                    I'm always excited to discuss frontend development projects, React applications, and creating exceptional user experiences. 
                    Let's build stunning interfaces together!
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