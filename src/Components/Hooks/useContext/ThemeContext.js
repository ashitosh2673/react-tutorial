// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// create context
const ThemeContext = createContext();

//  Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const testValue = "This is a test value";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, testValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
