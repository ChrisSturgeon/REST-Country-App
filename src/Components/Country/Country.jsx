import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCountryWrapper } from './Country.style';

export default function Country() {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const url = `https://restcountries.com/v3.1/name`;
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setCountryData(data[0]);
      }
    }
    getCountryData();
  }, []);

  useEffect(() => {
    if (countryData) {
      console.log(countryData);
    }
  }, [countryData]);

  return (
    <StyledCountryWrapper>
      <div>I'm the country component for Portugal</div>
    </StyledCountryWrapper>
  );
}
