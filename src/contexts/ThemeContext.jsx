import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update document class for global styling
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Light mode colors - Modern Tech Theme
      light: {
        background: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
        cardBackground: 'bg-white/70 backdrop-blur-xl',
        glassBackground: 'bg-white/20 backdrop-blur-2xl',
        text: 'text-slate-800',
        textSecondary: 'text-slate-600',
        accent: 'text-cyan-600',
        accentGradient: 'bg-gradient-to-r from-cyan-500 to-blue-600',
        border: 'border-white/20',
        shadow: {
          raised: 'shadow-[20px_20px_40px_#cbd5e1,-20px_-20px_40px_#ffffff]',
          medium: 'shadow-[15px_15px_30px_#cbd5e1,-15px_-15px_30px_#ffffff]',
          small: 'shadow-[10px_10px_20px_#cbd5e1,-10px_-10px_20px_#ffffff]',
          micro: 'shadow-[5px_5px_10px_#cbd5e1,-5px_-5px_10px_#ffffff]',
          inset: 'shadow-[inset_10px_10px_20px_#cbd5e1,inset_-10px_-10px_20px_#ffffff]',
          insetSmall: 'shadow-[inset_5px_5px_10px_#cbd5e1,inset_-5px_-5px_10px_#ffffff]',
          glass: 'shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
          glow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]'
        }
      },
      // Dark mode colors - Cyberpunk Tech Theme
      dark: {
        background: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
        cardBackground: 'bg-slate-800/70 backdrop-blur-xl',
        glassBackground: 'bg-slate-800/20 backdrop-blur-2xl',
        text: 'text-slate-100',
        textSecondary: 'text-slate-300',
        accent: 'text-cyan-400',
        accentGradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
        border: 'border-slate-700/50',
        shadow: {
          raised: 'shadow-[20px_20px_40px_#0f172a,-20px_-20px_40px_#1e293b]',
          medium: 'shadow-[15px_15px_30px_#0f172a,-15px_-15px_30px_#1e293b]',
          small: 'shadow-[10px_10px_20px_#0f172a,-10px_-10px_20px_#1e293b]',
          micro: 'shadow-[5px_5px_10px_#0f172a,-5px_-5px_10px_#1e293b]',
          inset: 'shadow-[inset_10px_10px_20px_#0f172a,inset_-10px_-10px_20px_#1e293b]',
          insetSmall: 'shadow-[inset_5px_5px_10px_#0f172a,inset_-5px_-5px_10px_#1e293b]',
          glass: 'shadow-[0_8px_32px_0_rgba(15,23,42,0.37)]',
          glow: 'shadow-[0_0_20px_rgba(34,211,238,0.4)]'
        }
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
