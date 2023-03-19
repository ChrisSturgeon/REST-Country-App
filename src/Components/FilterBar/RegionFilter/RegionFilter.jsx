import React from 'react';
// import { StyledSelect } from './RegionFilter.style';

import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  /* color: ${(props) => props.theme.text}; */
  /* padding: 2em; */

  .Select__control {
    height: 100%;
    width: 120%;

    border: none;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  .Select__control:hover {
    /* border-color: #a1a1a1; */
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__input-container {
    color: ${(props) => props.theme.text};
    /* padding: 2em; */
  }

  .Select__single-value {
    color: ${(props) => props.theme.text};
  }

  .Select__placeholder {
    color: ${(props) => props.theme.text};
  }

  .Select__menu {
    /* color: ${(props) => props.theme.text}; */
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
  { value: '', label: 'All' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Antarctic', label: 'Antarctic' },
  { value: 'Asia', label: 'Asisa' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];
export default function RegionFilter() {
  // return <StyledSelect classNamePrefix="Select" options={options} />;
  return (
    <StyledSelect
      classNamePrefix="Select"
      options={options}
      placeholder={'Filter by Region'}
      // value={{ value: 'hhh', label: 'hxf' }}
    />
  );
}
