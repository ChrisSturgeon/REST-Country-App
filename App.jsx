import React, { createContext, useState, useMemo, useEffect } from 'react';
import Header from './src/Components/Header/Header';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';

// import countryList from 'react-select-country-list';
// import './style.css';
// import Button from './Components/Button/Button.jsx';
// import Select from 'react-select';

import { lightTheme, darkTheme } from './themes';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Header toggleDarkMode={toggleDarkMode} />
      </ThemeProvider>
    </>
  );
}
