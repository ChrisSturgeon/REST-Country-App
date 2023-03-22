import React from 'react';
import { StyledCountryCard } from './CountryCard.style';
import { commonSeparateNumber } from '../../../helpers';

export default function CountryCard({ country }) {
  const formattedPopulation = commonSeparateNumber(country.population);

  return (
    <StyledCountryCard to={`/${country.name.common}`}>
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
