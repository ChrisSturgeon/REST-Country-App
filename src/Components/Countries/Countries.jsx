import React, { useState, useEffect } from 'react';
import { localData } from '../../../data.js';
import { CountriesWrapper } from './Countries.style.js';

// Hooks
import { useDisplayScrollButton } from '../../../hooks/useScrollPosition.js';

// Components
import FilterBar from '../FilterBar/FilterBar.jsx';
import Grid from '../Grid/Grid.jsx';

export default function Countries() {
  const displayScrollButton = useDisplayScrollButton();
  const [countries, setCountries] = useState(null);
  const [displayed, setDisplayed] = useState(null);
  const [noCountries, setNoCountries] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [sort, setSort] = useState({
    type: 'population',
    region: '',
    reversed: false,
    name: '',
  });

  function scrollToPageTop() {
    window.scrollTo({
      top: 0,
      top: 0,
      behavior: 'smooth',
    });
  }

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
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,flags,population,capital,cca3'
        );
        if (response.status === 200) {
          const data = await response.json();
          setCountries(data);
        } else {
          setServerError(true);
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

  if (serverError) {
    return <div>Unable to reach server. Please try again later.</div>;
  }

  return (
    <CountriesWrapper>
      <main>
        <FilterBar
          regionFilter={sort.region}
          setSort={setSort}
          searchName={sort.name}
          sort={sort}
        />
        <Grid countries={displayed} noCountries={noCountries} />

        {displayScrollButton && (
          <button
            onClick={scrollToPageTop}
            aria-label={'Scrol back up to top of page'}
          >
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Arrow / Arrow_Up_LG">
                <path
                  id="Vector"
                  d="M12 3L7 8M12 3L17 8M12 3V21"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            Top
          </button>
        )}
      </main>
    </CountriesWrapper>
  );
}
