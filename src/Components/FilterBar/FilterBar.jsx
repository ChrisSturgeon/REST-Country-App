import React from 'react';
import { StyledFilterBar } from './FilterBar.style';

import Search from './Search/Search';
import RegionFilter from './RegionFilter/RegionFilter';
import Sort from './Sort/Sort';

export default function FilterBar({ sort, setSort }) {
  return (
    <StyledFilterBar>
      <Search sort={sort} setSort={setSort} />
      <RegionFilter sort={sort} setSort={setSort} />
      <Sort sort={sort} setSort={setSort} />
    </StyledFilterBar>
  );
}
