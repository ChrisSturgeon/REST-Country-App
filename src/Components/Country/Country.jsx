import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCountryWrapper } from './Country.style';

export default function () {
  const { country } = useParams();
  return (
    <StyledCountryWrapper>
      I'm the country component for {country}
    </StyledCountryWrapper>
  );
}
