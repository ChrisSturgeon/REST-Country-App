import React from 'react';
import { StyledFilterWrapper } from './RegionFilter.style';
import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 72px;
    width: 100%;
    flex-basis: 1;
    left: auto;
    border: none;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    padding-left: 0.5em;
    cursor: pointer;
  }

  .Select__control--is-focused {
    background-color: 'red';
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px;
    color: ${(props) => props.theme.text};
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__input-container {
    color: ${(props) => props.theme.text};
  }

  .Select__single-value {
    color: ${(props) => props.theme.text};
  }

  .Select__placeholder {
    color: ${(props) => props.theme.text};
  }

  .Select__menu {
    background-color: ${(props) => props.theme.primary};
  }

  .Select__menu-list {
    color: ${(props) => props.theme.text};
  }

  .Select__option--is-focused {
    background-color: ${(props) => props.theme.background};
  }

  .Select__option--is-selected {
    background-color: ${(props) => props.theme.reactSelectSelected};
  }
`;

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Antarctic', label: 'Antarctic' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];
export default function RegionFilter({ sort, setSort }) {
  const selectValue = sort.region
    ? { value: sort.region, label: sort.region }
    : null;

  function handleChange(selectedOption) {
    if (selectedOption === null) {
      setSort((prev) => ({
        ...prev,
        region: '',
      }));
    } else {
      setSort((prev) => ({
        ...prev,
        region: selectedOption.value,
      }));
    }
  }

  return (
    <StyledFilterWrapper>
      <StyledSelect
        classNamePrefix="Select"
        options={options}
        placeholder={'Filter by Region'}
        onChange={handleChange}
        isClearable
        value={selectValue}
      />
    </StyledFilterWrapper>
  );
}
