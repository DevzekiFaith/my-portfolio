import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 mb-12"
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
              className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ezekiel <span className="text-emerald-600">Oghojafor</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                HealthTech Frontend Engineer specializing in telemedicine and patient care solutions. 
                Building digital health platforms that improve patient outcomes and healthcare accessibility.
              </p>
              <motion.div 
                className="flex items-center gap-2 text-emerald-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaHeart className="w-4 h-4" />
                <span className="text-sm font-medium">Made with passion for healthcare innovation</span>
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
              className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                      <p className="text-gray-800 font-semibold group-hover:text-emerald-600 transition-colors duration-300">
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
              className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="p-4 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 mb-3">
                      <social.icon className={`w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300 ${social.color}`} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
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
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gray-100 rounded-2xl p-6 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-600 text-center md:text-left"
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
                <span className="text-sm">Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span className="text-sm">for healthcare innovation</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
