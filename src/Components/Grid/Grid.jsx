import React from 'react';
import { StyledGrid } from './Grid.style';
import CountryCard from '../CountryCard/CountryCard';

export default function Grid({ countries }) {
  return (
    <StyledGrid>
      {countries ? (
        countries.map((country) => {
          return (
            <CountryCard key={country.name.common} country={country}>
              {country.name.common}
            </CountryCard>
          );
        })
      ) : (
        <div>No Countries Match Your Search</div>
      )}
    </StyledGrid>
  );
}
