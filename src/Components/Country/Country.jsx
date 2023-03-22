import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCountryWrapper } from './Country.style';

export default function Country() {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const url = `https://restcountries.com/v3.1/name/${country}/`;
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setCountryData(data);
      }
    }
    getCountryData();
  }, []);

  return (
    <StyledCountryWrapper>
      {countryData && (
        <div>I'm the country component for {countryData.name.common} </div>
      )}
    </StyledCountryWrapper>
  );
}
