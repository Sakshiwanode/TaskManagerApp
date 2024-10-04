import React, { createContext, useState, useContext, ReactNode } from 'react';

// Create a simple context with a default value of 'light'
const ThemeContext = createContext({
  theme: 'light', // default theme
  setTheme: (theme: string) => {}, // placeholder function
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
