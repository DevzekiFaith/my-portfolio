import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  const onSubmit = async (data) => {
    console.log(data);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Show toast notification
    setToastVisible(true);

    // Hide toast after 3 seconds and navigate to home
    setTimeout(() => {
      setToastVisible(false);
      navigate('/'); // Navigate to the home page after submission
    }, 3000);
  };

  return (
    <div className={`${colors.background} min-h-screen transition-colors duration-300`}>
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
            <span className="font-medium">Message sent successfully! Redirecting...</span>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`text-4xl xl:text-6xl font-bold ${colors.text} mb-6`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's{" "}
            <motion.span 
              className="text-emerald-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Connect
            </motion.span>
          </motion.h1>
          <motion.p 
            className={`text-lg xl:text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to transform healthcare through technology? I'm always excited to discuss health technology opportunities 
            and collaborate on innovative health solutions. Let's improve patient outcomes together!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`${colors.cardBackground} rounded-2xl p-8 ${colors.shadow.medium} transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.micro}`}>
                <FaEnvelope className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className={`text-xl font-bold ${colors.text}`}>Email</h3>
            </div>
            <p className={`${colors.textSecondary} mb-4`}>
              Drop me a line and I'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:ezekieloghojaforubor@gmail.com"
              className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
            >
              ezekieloghojaforubor@gmail.com
            </a>
          </motion.div>

          <motion.div 
            className={`${colors.cardBackground} rounded-2xl p-8 ${colors.shadow.medium} transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.micro}`}>
                <FaFileAlt className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className={`text-xl font-bold ${colors.text}`}>Resume</h3>
            </div>
            <p className={`${colors.textSecondary} mb-4`}>
              Want to know more about my experience and skills?
            </p>
            <a
              href="Ezekiel's Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 group"
            >
              <span>Download Resume</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="grid xl:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className={`${colors.cardBackground} rounded-2xl p-8 ${colors.shadow.medium} border ${colors.border}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className={`${colors.text} font-semibold`}>Name</label>
                  <input
                    className={`w-full ${colors.cardBackground} border ${colors.border} rounded-xl px-4 py-3 ${colors.text} focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300`}
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className={`${colors.text} font-semibold`}>Email</label>
                  <input
                    className={`w-full ${colors.cardBackground} border ${colors.border} rounded-xl px-4 py-3 ${colors.text} focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300`}
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className={`${colors.text} font-semibold`}>Message</label>
                  <textarea
                    className={`w-full h-32 ${colors.cardBackground} border ${colors.border} rounded-xl px-4 py-3 ${colors.text} resize-none focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300`}
                    placeholder="Tell me about your project or how I can help..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/20`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Get in Touch</h2>
                <p className={`text-lg ${colors.textSecondary} leading-relaxed mb-8`}>
                  I'm always open to discussing healthcare technology opportunities, innovative health projects, 
                  or just having a chat about health tech and patient-centered design. Feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`text-xl font-bold ${colors.text} mb-4`}>Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://github.com/DevzekiFaith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 ${colors.cardBackground} rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${colors.shadow.small}`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-6 h-6" />
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ezekiel-oghojafor-268889196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 ${colors.cardBackground} rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${colors.shadow.small}`}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                    <span className="font-medium">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 ${colors.cardBackground} rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${colors.shadow.small}`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter className="w-6 h-6" />
                    <span className="font-medium">Twitter</span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 ${colors.cardBackground} rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 ${colors.shadow.small}`}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="w-6 h-6" />
                    <span className="font-medium">Instagram</span>
                  </motion.a>
                </div>
              </div>

              {/* Quick Info */}
              <motion.div 
                className={`bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl p-6 border border-emerald-500/20`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-lg font-bold ${colors.text} mb-3`}>Quick Facts</h3>
                <div className={`space-y-2 ${colors.textSecondary}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Specializing in HealthTech solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>HIPAA-compliant development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Available for freelance projects</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.section 
        className={`py-12 ${colors.background}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className={colors.textSecondary}>
            © {new Date().getFullYear()} Ezekiel Oghojafor Ubor. All rights reserved.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
