import React from 'react';
import { StyledStats } from './Stats.style';
import {
  commaSeparateNumbers,
  formatCurrencies,
  formatLanguages,
} from '../../../../helpers';

export default function Stats({ country }) {
  const commonNativeName = {
    ...Object.values(country.name.nativeName)[0],
  }.common;

  const formattedPopulation = commaSeparateNumbers(country.population);
  const formattedCurrencies = formatCurrencies(country.currencies);
  const formattedLanguages = formatLanguages(country.languages);

  return (
    <StyledStats>
      <div>
        <div data-testid="native-name">
          <span>Native Name: </span>
          {commonNativeName}
        </div>
        <div data-testid="population">
          <span>Population: </span>
          {formattedPopulation}
        </div>
        <div data-testid="region">
          <span>Region: </span>
          {country.region}
        </div>
        <div data-testid="subregion">
          <span>Sub Region: </span>
          {country.subregion}
        </div>
        <div data-testid="capital">
          <span>Capital: </span>
          {country.capital}
        </div>
      </div>
      <div>
        <div data-testid="domain">
          <span>Top Level Domain: </span>
          {country.tld}
        </div>
        <div data-testid="currencies">
          <span>Currencies: </span>
          {formattedCurrencies}
        </div>
        <div data-testid="languages">
          <span>Languages: </span>
          {formattedLanguages}
        </div>
      </div>
    </StyledStats>
  );
}
