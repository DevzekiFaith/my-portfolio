import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 ${colors.cardBackground} ${colors.shadow.medium} rounded-full border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)",
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6 text-purple-600" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

