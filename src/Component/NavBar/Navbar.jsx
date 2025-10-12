import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

// Constants for styling and configuration
const STYLE_CONSTANTS = {
  NAVBAR_LINKS: [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/contact", label: "Contact" }
  ]
};

const NavBarLink = ({ to, children }) => {
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];
  
  return (
    <NavLink
      className={({ isActive }) => 
        isActive 
          ? `text-cyan-600 ${colors.glassBackground} backdrop-blur-sm px-4 py-2 rounded-xl font-semibold ${colors.shadow.glass} border ${colors.border} cyber-glow` 
          : `${colors.textSecondary} hover:text-cyan-600 transition-all duration-300 font-medium hover:${colors.glassBackground} hover:backdrop-blur-sm hover:px-4 hover:py-2 hover:rounded-xl`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

NavBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const colors = theme.colors[theme.isDark ? 'dark' : 'light'];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key press to close menu
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Handle click outside to close menu
  const handleClickOutside = useCallback((event) => {
    if (isMenuOpen && !event.target.closest('.navbar-menu')) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Setup event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleEscapeKey, handleClickOutside]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `backdrop-blur-2xl ${colors.glassBackground} border-b ${colors.border} ${colors.shadow.glass}` 
          : `backdrop-blur-xl ${colors.glassBackground} border-b ${colors.border}`
      }`} 
      role="navigation" 
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? `${colors.text} drop-shadow-lg` : 'text-white drop-shadow-lg'
            }`}>
              Faith{" "}
              <span className="text-gradient drop-shadow-lg">
                Oghojafor
              </span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }, index) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NavBarLink to={path}>
                  {label}
                </NavBarLink>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={theme.toggleTheme}
              className={`p-3 ${colors.glassBackground} backdrop-blur-sm hover:${colors.cardBackground} transition-all duration-300 rounded-xl focus:outline-none border ${colors.border} ${colors.shadow.glass} hover:${colors.shadow.glow} cyber-glow`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {theme.isDark ? (
                <FaSun className="w-5 h-5 text-cyan-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-cyan-600" />
              )}
            </motion.button>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <NavLink
                to="/contact"
                className={`group ${colors.glassBackground} backdrop-blur-sm hover:${colors.cardBackground} text-cyan-600 px-6 py-3 rounded-xl font-semibold ${colors.shadow.glass} hover:${colors.shadow.glow} border ${colors.border} transition-all duration-300 focus:outline-none cyber-glow`}
              >
                Get In Touch
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={theme.toggleTheme}
              className={`p-3 ${colors.glassBackground} backdrop-blur-sm hover:${colors.cardBackground} transition-all duration-300 rounded-xl focus:outline-none border ${colors.border} ${colors.shadow.glass} hover:${colors.shadow.glow} cyber-glow`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {theme.isDark ? (
                <FaSun className="w-4 h-4 text-cyan-400" />
              ) : (
                <FaMoon className="w-4 h-4 text-cyan-600" />
              )}
            </motion.button>
            
            <motion.button
              className={`p-3 rounded-xl transition-all duration-300 focus:outline-none ${colors.glassBackground} hover:${colors.cardBackground} ${colors.text} backdrop-blur-sm border ${colors.border} ${colors.shadow.glass} hover:${colors.shadow.glow} cyber-glow`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 xl:hidden"
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className={`fixed top-0 right-0 w-80 h-full ${colors.glassBackground} backdrop-blur-2xl border-l ${colors.border} ${colors.shadow.glass} navbar-menu z-50 xl:hidden`}
          initial={{ x: 320 }}
          animate={{ x: 0 }}
          exit={{ x: 320 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <h2 className={`text-xl font-bold ${colors.text} drop-shadow-lg`}>
                Menu
              </h2>
              <motion.button
                onClick={toggleMenu}
                aria-label="Close menu"
                className={`p-2 rounded-xl ${colors.glassBackground} backdrop-blur-sm hover:${colors.cardBackground} ${colors.text} transition-all duration-300 focus:outline-none border ${colors.border} ${colors.shadow.glass} hover:${colors.shadow.glow} cyber-glow`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile Menu Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-4">
                {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }, index) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) => 
                        `block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                          isActive 
                            ? `text-cyan-600 ${colors.glassBackground} backdrop-blur-sm ${colors.shadow.glass} border ${colors.border} cyber-glow` 
                            : `${colors.textSecondary} hover:text-cyan-600 hover:${colors.glassBackground} hover:backdrop-blur-sm`
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <motion.div 
                className="mt-8 pt-6 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <NavLink
                  to="/contact"
                  className={`group flex items-center justify-center w-full ${colors.glassBackground} backdrop-blur-sm hover:${colors.cardBackground} text-cyan-600 px-6 py-4 rounded-xl font-semibold ${colors.shadow.glass} hover:${colors.shadow.glow} border ${colors.border} transition-all duration-300 focus:outline-none cyber-glow`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </NavLink>
              </motion.div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-white/20">
              <p className={`text-sm ${colors.textSecondary} text-center drop-shadow-lg`}>
                © {new Date().getFullYear()} Ezekiel Oghojafor
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;