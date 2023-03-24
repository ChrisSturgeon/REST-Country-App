import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { StyledCountryMain } from './Country.style';

// Components
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
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  id="left-arrow"
                  data-name="Flat Color"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="primary"
                    d="M21,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
                  ></path>
                </svg>
                Back
              </button>
              <Link to="/all">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  title="Home Icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
                    fill="#000000"
                  />
                </svg>
                Home
              </Link>
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
