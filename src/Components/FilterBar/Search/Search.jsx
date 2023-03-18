import React, { useState } from 'react';
import { StyledSearch } from './Search.style';

export default function Search({ searchName, updateSearchName }) {
  const [hasFocus, setHasFocus] = useState(false);

  function logFocus(e) {}

  return (
    <StyledSearch searchName={searchName} hasFocus={hasFocus}>
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
