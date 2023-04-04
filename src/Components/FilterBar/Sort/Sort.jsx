import React from 'react';
import { SortWrapper } from './Sort.style';
import { StyledSortSelect } from './Sort.style';

const options = [
  { value: 'alphabetical', label: 'Alphabetically' },
  { value: 'population', label: 'Population' },
];

const styles = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),
};

export default function Sort({ sort, setSort }) {
  const selectValue = sort.type === 'alphabetical' ? options[0] : options[1];
  function handleTypeChange(selectedOption) {
    if (selectedOption === null) {
      setSort((prev) => ({
        ...prev,
        type: 'alphabetical',
      }));
    } else {
      setSort((prev) => ({
        ...prev,
        type: selectedOption.value,
      }));
    }
  }

  function handleDirectionChange() {
    setSort((prev) => ({
      ...prev,
      reversed: !sort.reversed,
    }));
  }

  return (
    <SortWrapper>
      <StyledSortSelect
        classNamePrefix="Select"
        options={options}
        placeholder={'Sort by...'}
        onChange={handleTypeChange}
        styles={styles}
        value={selectValue}
        aria-label={'Sort by'}
      />
      <button aria-label="reverse sort order" onClick={handleDirectionChange}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform={sort.reversed ? null : 'rotate(180)'}
        >
          <g id="Arrow / Arrow_Up_LG">
            <path
              id="Vector"
              d="M12 3L7 8M12 3L17 8M12 3V21"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </SortWrapper>
  );
}
