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
          className={`fixed top-6 right-6 ${colors.cardBackground} text-purple-600 px-6 py-4 rounded-xl ${colors.shadow.medium} transition-all duration-500 z-50`}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Message sent successfully! Redirecting...</span>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url(/hero-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Let's <span className="text-blue-400">Connect</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Ready to collaborate on innovative projects? Reach out and let's build something amazing together.
          </p>
          <motion.a
            href="#contact-form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send a Message
          </motion.a>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section id="contact-form" className="container mx-auto px-6 py-16">
        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div 
            className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Get in Touch</h2>
            <p className={`${colors.textSecondary} mb-8 leading-relaxed`}>
              Have a question or want to work together? Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <FaEnvelope className={`w-6 h-6 ${colors.accent}`} />
                <div>
                  <h3 className={`font-semibold ${colors.text}`}>Email</h3>
                  <a
                    href="mailto:ezekieloghojaforubor@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
                  >
                    ezekieloghojaforubor@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>Connect with Me</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/ezekiel-oghojafor-ubor-a75a7a21b/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-6 h-6 text-purple-600" />
              </motion.a>
              <motion.a
                href="https://github.com/DevzekiFaith"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-6 h-6 text-purple-600" />
              </motion.a>
              <motion.a
                href="https://twitter.com/DevzekiFaith"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="w-6 h-6 text-purple-600" />
              </motion.a>
              <motion.a
                href="https://instagram.com/devzekifaith"
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 ${colors.cardBackground} rounded-xl ${colors.shadow.small} hover:${colors.shadow.inset} transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="w-6 h-6 text-purple-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className={`${colors.cardBackground} rounded-3xl p-8 ${colors.shadow.medium}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className={`${colors.text} font-semibold`}>Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full p-4 rounded-xl ${colors.cardBackground} ${colors.shadow.insetSmall} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${errors.name ? 'border-red-500' : colors.border}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className={`${colors.text} font-semibold`}>Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full p-4 rounded-xl ${colors.cardBackground} ${colors.shadow.insetSmall} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${errors.email ? 'border-red-500' : colors.border}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className={`${colors.text} font-semibold`}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject of your message"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full p-4 rounded-xl ${colors.cardBackground} ${colors.shadow.insetSmall} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${errors.subject ? 'border-red-500' : colors.border}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={`${colors.text} font-semibold`}>Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full p-4 rounded-xl ${colors.cardBackground} ${colors.shadow.insetSmall} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${errors.message ? 'border-red-500' : colors.border}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                className={`w-full bg-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;