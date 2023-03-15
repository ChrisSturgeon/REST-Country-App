import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    if (darkMode) {
      setDarkMode(false);
      window.localStorage.setItem('dark-mode', false);
    } else {
      setDarkMode(true);
      window.localStorage.setItem('dark-mode', true);
    }
  }

  // Checks if user already has preference saved in localstorage
  useEffect(() => {
    const existingTheme = window.localStorage.getItem('dark-mode');
    if (existingTheme) {
      if (existingTheme === 'true') {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }
  }, []);

  return [darkMode, toggleDarkMode];
}
