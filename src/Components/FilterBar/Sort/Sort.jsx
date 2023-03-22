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

export default function Sort({ reverseSort, setSort, sort }) {
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
    reverseSort();
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
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
          />
        </svg>
      </button>
    </SortWrapper>
  );
}
