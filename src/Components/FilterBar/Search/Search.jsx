import React, { useState } from 'react';
import { StyledSearch } from './Search.style';

export default function Search({ sort, setSort }) {
  const [hasFocus, setHasFocus] = useState(false);

  function handleChange(e) {
    setSort((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  function clearSearch() {
    setSort((prev) => ({
      ...prev,
      name: '',
    }));
  }

  return (
    <StyledSearch searchName={sort.name} hasFocus={hasFocus}>
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
        value={sort.name}
        onChange={handleChange}
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

      {sort.name.length ? (
        <button
          onClick={clearSearch}
          aria-label={'clear input for search by country name'}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      ) : null}
    </StyledSearch>
  );
}
