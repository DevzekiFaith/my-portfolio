import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from "react-icons/fa";

// Constants for styling and configuration
const STYLE_CONSTANTS = {
  ACTIVE_LINK: "text-[#635bff] bg-gradient-to-r from-[#635bff]/10 to-[#a084ee]/10 px-4 py-2 rounded-xl font-semibold border border-[#635bff]/20",
  NORMAL_LINK: "text-gray-600 hover:text-[#635bff] transition-all duration-300 font-medium",
  NAVBAR_LINKS: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ]
};

const NavBarLink = ({ to, children }) => (
  <NavLink
    className={({ isActive }) => 
      isActive ? STYLE_CONSTANTS.ACTIVE_LINK : STYLE_CONSTANTS.NORMAL_LINK
    }
    to={to}
  >
    {children}
  </NavLink>
);

NavBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Faith{" "}
              <span className="bg-gradient-to-r from-[#635bff] to-[#a084ee] bg-clip-text text-transparent">
                Oghojafor
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }) => (
              <NavBarLink key={path} to={path}>
                {label}
              </NavBarLink>
            ))}
            
            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="group bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
            >
              Get In Touch
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <button
              className={`p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20 ${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl navbar-menu z-50 xl:hidden transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">
                Menu
              </h2>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-4">
                {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                        isActive 
                          ? 'text-[#635bff] bg-gradient-to-r from-[#635bff]/10 to-[#a084ee]/10 border border-[#635bff]/20' 
                          : 'text-gray-600 hover:text-[#635bff] hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <NavLink
                  to="/contact"
                  className="group flex items-center justify-center w-full bg-gradient-to-r from-[#635bff] to-[#a084ee] text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#635bff]/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#635bff]/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </NavLink>
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Ezekiel Oghojafor
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;