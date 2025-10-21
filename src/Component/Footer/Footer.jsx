import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/DevzekiFaith',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/ezekiel-oghojafor-268889196/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/DevzekiFaith',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/DevzekiFaith',
      color: 'hover:text-pink-500'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'zekipossible@gmail.com',
      href: 'mailto:zekipossible@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+234-7014441418',
      href: 'tel:+2347014441418'
    }
  ];

  return (
    <footer className={`${colors.background} py-12 sm:py-16 transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`${colors.cardBackground} rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${colors.shadow.raised} h-full`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={`text-xl sm:text-2xl font-bold ${colors.text} mb-3 sm:mb-4`}>
                Ezekiel <span className="text-emerald-600">Oghojafor</span>
              </h3>
              <p className={`${colors.textSecondary} leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base`}>
                Specialized in frontend engineering with expertise in React, Next.js, and modern web technologies. 
                Building exceptional user interfaces and seamless user experiences across various industries.
              </p>
              <motion.div 
                className="flex items-center gap-2 text-emerald-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Made with passion for healthcare innovation</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`${colors.cardBackground} rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${colors.shadow.raised} h-full`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className={`text-lg sm:text-xl font-bold ${colors.text} mb-4 sm:mb-6`}>Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300 group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-2 sm:p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.micro} group-hover:${colors.shadow.insetSmall} transition-all duration-300`}>
                      <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm ${colors.textSecondary} font-medium`}>{contact.label}</p>
                      <p className={`${colors.text} font-semibold group-hover:text-emerald-600 transition-colors duration-300 text-sm sm:text-base`}>
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={`${colors.cardBackground} rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${colors.shadow.raised} h-full`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className={`text-lg sm:text-xl font-bold ${colors.text} mb-4 sm:mb-6`}>Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 sm:p-6 ${colors.cardBackground} rounded-2xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-3 sm:p-4 ${colors.cardBackground} rounded-xl ${colors.shadow.micro} group-hover:${colors.shadow.insetSmall} transition-all duration-300 mb-2 sm:mb-3`}>
                      <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300 ${social.color}`} />
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold ${colors.textSecondary} group-hover:text-emerald-600 transition-colors duration-300`}>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className={`border-t ${colors.border} pt-6 sm:pt-8`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`${colors.cardBackground} rounded-2xl p-4 sm:p-6 ${colors.shadow.medium}`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <motion.p 
                className={`${colors.textSecondary} text-center md:text-left text-sm sm:text-base`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                &copy; {currentYear} Ezekiel Oghojafor. All rights reserved.
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-2 text-emerald-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs sm:text-sm">Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                </motion.div>
                <span className="text-xs sm:text-sm">for healthcare innovation</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
