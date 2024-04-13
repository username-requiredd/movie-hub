import { createContext, useState, useContext, useEffect } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a custom hook to access dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark Mode Provider component
export const DarkModeProvider = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    // Check if storedDarkMode is "true" (string) or null
    return storedDarkMode === "true";
  });
  
  // Update local storage and state when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
