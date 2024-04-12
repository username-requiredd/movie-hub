import { createContext, useState, useContext, useEffect } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a custom hook to access dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark Mode Provider component
export const DarkModeProvider = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? storedDarkMode : false;
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
