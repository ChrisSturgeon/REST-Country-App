import React from 'react';
import { StyledFilterBar } from './FilterBar.style';

import Search from './Search/Search';
import RegionFilter from './RegionFilter/RegionFilter';

export default function FilterBar({ searchName, updateSearchName }) {
  return (
    <StyledFilterBar>
      <Search searchName={searchName} updateSearchName={updateSearchName} />
      <RegionFilter />
    </StyledFilterBar>
  );
}
