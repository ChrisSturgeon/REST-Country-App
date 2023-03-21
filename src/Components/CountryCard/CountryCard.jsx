import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCountryCard } from './CountryCard.style';

export default function CountryCard({ country }) {
  return (
    <StyledCountryCard to={`/${country.name.common}`}>
      <h2>{country.name.common}</h2>
    </StyledCountryCard>
  );
}
