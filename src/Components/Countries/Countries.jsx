import React, { useState, useEffect } from 'react';

export default function Countries() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,capital,region'
      );

      if (response.status === 200) {
        const data = await response.json();

        // const sorted = data.sort(function (a, b) {
        //   var nameA = a.name.common.toLowerCase(),
        //     nameB = b.name.common.toLowerCase();
        //   if (nameA < nameB)
        //     //sort string ascending
        //     return -1;
        //   if (nameA > nameB) return 1;
        //   return 0; //default return value (no sorting)
        // });
        // setCountries(sorted);

        const african = data.filter((country) => {
          return country.region === 'Africa';
        });
        setCountries(african);
      } else {
        console.log('Make an error message');
      }
    }
    getCountries();
  }, []);

  return (
    <div>
      <div>I'm the countries component</div>
      {countries &&
        countries.map((country) => {
          return <div>{country.name.common}</div>;
        })}
    </div>
  );
}
