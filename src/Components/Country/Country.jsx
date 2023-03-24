import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { StyledCountryMain } from './Country.style';
import Stats from './Stats/Stats';
import Neighbours from './Neighbours/Neighbours';

export default function Country() {
  const navigate = useNavigate();
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function getCountryData() {
      const url = `https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags,name,population,region,subregion,capital,currencies,languages,tld,borders`;
      const response = await fetch(url);

      if (response.status === 200) {
        const data = await response.json();
        setCountryData(data);
      }
    }
    getCountryData();
  }, [countryCode]);

  return (
    <StyledCountryMain>
      <div>
        {countryData && (
          <>
            <div>
              <button
                onClick={() => navigate(-1)}
                aria-label={'Go back to previous page'}
              >
                Back
              </button>
              <Link to="/all">Home</Link>
            </div>
            <img src={countryData.flags.svg} alt={countryData.flags.alt}></img>
            <div>
              <h1>{countryData.name.common}</h1>
              <Stats country={countryData} />
              <Neighbours neighbours={countryData.borders} />
            </div>
          </>
        )}
      </div>
    </StyledCountryMain>
  );
}
