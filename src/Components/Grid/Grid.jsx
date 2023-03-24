import React from 'react';
import { StyledGrid } from './Grid.style';
import CountryCard from '../CountryCard/CountryCard';

export default function Grid({ countries, noCountries }) {
  if (noCountries) {
    return <div>No Countries Match Your Search!</div>;
  }

  if (countries) {
    return (
      <StyledGrid>
        {countries.map((country) => {
          return (
            <CountryCard key={country.name.common} country={country}>
              {country.name.common}
            </CountryCard>
          );
        })}
      </StyledGrid>
    );
  }
}
