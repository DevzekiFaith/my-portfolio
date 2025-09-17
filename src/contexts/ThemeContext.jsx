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
      // Light mode colors
      light: {
        background: 'bg-gray-100',
        cardBackground: 'bg-gray-100',
        text: 'text-gray-800',
        textSecondary: 'text-gray-600',
        accent: 'text-emerald-600',
        border: 'border-gray-200',
        shadow: {
          raised: 'shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]',
          medium: 'shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]',
          small: 'shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff]',
          micro: 'shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]',
          inset: 'shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff]',
          insetSmall: 'shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]'
        }
      },
      // Dark mode colors
      dark: {
        background: 'bg-gray-900',
        cardBackground: 'bg-gray-800',
        text: 'text-gray-100',
        textSecondary: 'text-gray-300',
        accent: 'text-emerald-400',
        border: 'border-gray-700',
        shadow: {
          raised: 'shadow-[12px_12px_24px_#1f2937,-12px_-12px_24px_#374151]',
          medium: 'shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151]',
          small: 'shadow-[6px_6px_12px_#1f2937,-6px_-6px_12px_#374151]',
          micro: 'shadow-[4px_4px_8px_#1f2937,-4px_-4px_8px_#374151]',
          inset: 'shadow-[inset_6px_6px_12px_#1f2937,inset_-6px_-6px_12px_#374151]',
          insetSmall: 'shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#374151]'
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
