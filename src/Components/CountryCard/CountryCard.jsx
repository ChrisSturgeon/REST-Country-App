import React from 'react';
import { StyledCountryCard } from './CountryCard.style';
import { commaSeparateNumbers } from '../../../helpers';

export default function CountryCard({ country }) {
  const formattedPopulation = commaSeparateNumbers(country.population);

  return (
    <StyledCountryCard to={`/${country.cca3}`}>
      <img src={country.flags.svg} alt={country.flags.alt} />

      <div>
        <h2>{country.name.common}</h2>
        <div data-testid="population">
          <span>Population: </span>
          {formattedPopulation}
        </div>
        <div data-testid="region">
          <span>Region: </span>
          {country.region}
        </div>
        <div data-testid="capital">
          <span>Capital: </span>
          {country.capital}
        </div>
      </div>
    </StyledCountryCard>
  );
}
