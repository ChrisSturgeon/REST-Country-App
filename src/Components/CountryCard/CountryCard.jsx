import React from 'react';
import { StyledCountryCard } from './CountryCard.style';

export default function CountryCard({ country }) {
  function commonSeparateNumber(num) {
    const arr = num.toString().split('');
    if (arr.length >= 5) {
      const numOfCommas = Math.floor(arr.length / 3);
      let insertAt = arr.length - 3;

      for (let i = 0; i < numOfCommas; i++) {
        if (insertAt !== 0) {
          arr.splice(insertAt, 0, ',');
        }
        insertAt -= 3;
      }
    }

    return arr.join('');
  }

  const population = commonSeparateNumber(country.population);
  return (
    <StyledCountryCard to={`/${country.name.common}`}>
      <img src={country.flags.svg} alt={country.flags.alt} />

      <div>
        <h2>{country.name.common}</h2>
        <div data-testid="population">
          <span>Population: </span>
          {population}
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
