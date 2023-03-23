import React, { useState, useEffect } from 'react';
import { localData } from '../../../data.js';
import FilterBar from '../FilterBar/FilterBar.jsx';
import Grid from '../Grid/Grid.jsx';
import { CountriesWrapper } from './Countries.style.js';

export default function Countries() {
  const [countries, setCountries] = useState(null);
  const [displayed, setDisplayed] = useState(null);
  const [noCountries, setNoCountries] = useState(false);
  const [sort, setSort] = useState({
    type: 'population',
    region: '',
    reversed: false,
    name: '',
  });

  function filterByRegion(countries) {
    const allCountries = [...countries];
    return allCountries.filter((country) => {
      return country.region === sort.region;
    });
  }

  function sortAlphabetically(countries) {
    const allCountries = [...countries];

    if (sort.reversed) {
      return allCountries
        .sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        })
        .reverse();
    } else {
      return allCountries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
    }
  }

  function sortByPopulation(countries) {
    const allCountries = [...countries];
    if (!sort.reversed) {
      return allCountries.sort((a, b) => b.population - a.population);
    } else {
      return allCountries.sort((a, b) => b.population - a.population).reverse();
    }
  }

  function filterByName(countries) {
    const allCountries = [...countries];
    return allCountries.filter((country) => {
      return country.name.common
        .toLocaleLowerCase()
        .startsWith(sort.name.toLocaleLowerCase());
    });
  }

  function filterAndSortCountries() {
    let allCountries = [...countries];

    if (sort.region) {
      allCountries = filterByRegion(allCountries);
    }

    if (sort.type === 'alphabetical') {
      allCountries = sortAlphabetically(allCountries);
    }

    if (sort.type === 'population') {
      allCountries = sortByPopulation(allCountries);
    }

    if (sort.name) {
      allCountries = filterByName(allCountries);
    }

    setDisplayed(allCountries);

    if (allCountries.length) {
      setNoCountries(false);
    } else {
      setNoCountries(true);
    }
  }

  useEffect(() => {
    // Sets list of all countries into state from API or local copy as backup
    async function getCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.status === 200) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.log('display error here');
        }
      } catch (err) {
        console.log('Server is down. Loading data from local...');
        setCountries(localData);
      }
    }

    // Reinstates any previous filters and sorts held in session storage
    function retrieveSessionSort() {
      if (window.sessionStorage.getItem('sort')) {
        setSort(JSON.parse(window.sessionStorage.getItem('sort')));
      } else {
        window.sessionStorage.setItem('sort', JSON.stringify(sort));
      }
    }
    getCountries();
    retrieveSessionSort();
  }, []);

  // Renders list of filtered countries on load and application of region filter
  useEffect(() => {
    if (countries) {
      filterAndSortCountries();
    }
  }, [countries, sort]);

  // Updates session storage copy of sort after sort state change
  useEffect(() => {
    window.sessionStorage.setItem('sort', JSON.stringify(sort));
  }, [sort]);

  return (
    <CountriesWrapper>
      <main>
        <FilterBar
          regionFilter={sort.region}
          setSort={setSort}
          searchName={sort.name}
          sort={sort}
        />
        <Grid countries={displayed} />

        {noCountries && <div>No Countries match your search!</div>}
      </main>
    </CountriesWrapper>
  );
}
