import React from 'react';
import { StyledFilterBar } from './FilterBar.style';

import Search from './Search/Search';
import RegionFilter from './RegionFilter/RegionFilter';
import Sort from './Sort/Sort';

export default function FilterBar({
  regionFilter,
  setSort,
  searchName,
  updateSearchName,
  reverseSort,
  sort,
}) {
  return (
    <StyledFilterBar>
      <Search searchName={searchName} updateSearchName={updateSearchName} />
      <RegionFilter regionFilter={regionFilter} setSort={setSort} />
      <Sort reverseSort={reverseSort} sort={sort} setSort={setSort} />
    </StyledFilterBar>
  );
}
