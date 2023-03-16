import React, { useContext } from 'react';
import { StyledHeader } from './Header.style';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

export default function Header({ darkMode, toggleDarkMode }) {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <StyledHeader>
      <h1>Where in the World?</h1>
      <ThemeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </StyledHeader>
  );
}
