import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import burgerImage from "/list (2).svg";
import CloseButton from "/x-circle.svg";

// Constants for styling and configuration
const STYLE_CONSTANTS = {
  ACTIVE_LINK: "text-white bg-yellow-500 p-2 rounded-full font-bold",
  NORMAL_LINK: "text-gray-300 hover:text-white transition duration-200",
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
    <nav className="relative bg-transparent" role="navigation" aria-label="Main navigation">
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="text-white font-bold text-xl">Ezekiel Oghojafor Ubor</h1>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex xl:gap-6">
          {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }) => (
            <NavBarLink key={path} to={path}>
              {label}
            </NavBarLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <button
            className="focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <img className="w-6 h-6" src={burgerImage} alt="Menu icon" />
          </button>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-900 shadow-lg rounded-lg navbar-menu z-20 transition-transform transform translate-y-0">
          <div className="flex justify-end p-2">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
            >
              <img className="w-6 h-6" src={CloseButton} alt="Close menu" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            {STYLE_CONSTANTS.NAVBAR_LINKS.map(({ path, label }) => (
              <NavBarLink key={path} to={path}>
                {label}
              </NavBarLink>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;