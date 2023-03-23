import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCountryMain } from './Country.style';
import Stats from './Stats/Stats';
import Neighbours from './Neighbours/Neighbours';

export default function Country() {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const url = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags,name,population,region,subregion,capital,currencies,languages,tld`;
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setCountryData(data);
      }
    }
    getCountryData();
  }, []);

  // useEffect(() => {
  //   console.log(countryData);
  // }, [countryData]);

  return (
    <StyledCountryMain>
      <div>
        {countryData && (
          <>
            <div>
              <button>Back</button>
            </div>
            <img src={countryData.flags.svg} alt={countryData.flags.alt}></img>
            <div>
              <h1>{countryData.name.common}</h1>
              <Stats country={countryData} />
              <Neighbours />
            </div>
          </>
        )}
      </div>
    </StyledCountryMain>
  );
}
