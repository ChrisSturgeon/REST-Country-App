import React, { useState } from 'react';
import { StyledSearch } from './Search.style';

export default function Search({ searchName, updateSearchName }) {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <StyledSearch searchName={searchName} hasFocus={hasFocus}>
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 15L21 21"
          stroke="#323232"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#323232"
          strokeWidth="2"
        />
      </svg>
      <input
        value={searchName}
        onChange={updateSearchName}
        aria-label={'country search'}
        id="country-search"
        onFocus={() => {
          setHasFocus(true);
        }}
        onBlur={() => {
          setHasFocus(false);
        }}
      ></input>
      <label htmlFor="country-search">Search for a Country</label>
    </StyledSearch>
  );
}
