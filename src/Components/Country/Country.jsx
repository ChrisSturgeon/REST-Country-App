import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCountryWrapper } from './Country.style';

export default function Country() {
  const { country } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        console.log(typeof data);
        setCountryData(data[0]);
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
