import React, { useContext } from 'react';
import { StyledHeader } from './Header.style';

export default function Header({ toggleDarkMode }) {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <StyledHeader>
      <h1>Where in the World?</h1>
      {/* <button
        onClick={() => {
          console.log(darkMode);
          toggleDarkMode();
        }}
      >
        Hi
      </button> */}
      <button onClick={toggleDarkMode}>Change Theme</button>
    </StyledHeader>
  );
}
