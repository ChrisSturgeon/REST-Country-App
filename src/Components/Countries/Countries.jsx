import React, { useState, useEffect } from 'react';
import { localData } from '../../../data.js';
import FilterBar from '../FilterBar/FilterBar.jsx';
import { CountriesWrapper } from './Countries.style.js';

export default function Countries() {
  const [countries, setCountries] = useState(null);
  const [displayed, setDisplayed] = useState(null);
  const [noCountries, setNoCountries] = useState(false);
  const [sort, setSort] = useState({
    type: 'alphabetical',
    region: '',
    reversed: false,
    name: '',
  });

  function assignRegionFilter(region) {
    setSort((prev) => ({
      ...prev,
      region: region,
    }));
  }

  function updateSortType(type) {
    if (sort.type !== type) {
      setSort((prev) => ({
        ...prev,
        type: type,
      }));
    } else {
      setSort((prev) => ({
        ...prev,
        reversed: !prev.reversed,
      }));
    }
  }

  function updateSearchName(e) {
    console.log(e.target.value);
    setSort((prev) => ({
      ...prev,
      name: e.target.value,
    }));
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

  function clearFilters() {
    setSort((prev) => ({
      ...prev,
      region: false,
      name: '',
    }));
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

    // Re-instates any previous filters and sorts within window session
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

  // Updates session storage copy of sort state on change
  useEffect(() => {
    window.sessionStorage.setItem('sort', JSON.stringify(sort));
  }, [sort]);

  // useEffect(() => {
  //   if (countries) {
  //     const unique = [];
  //     countries.forEach((country) => {
  //       if (!unique.includes(country.region)) {
  //         unique.push(country.region);
  //       }
  //       console.log(unique);
  //     });
  //   }
  // }, [countries]);

  return (
    <CountriesWrapper>
      <main>
        <FilterBar
          regionFilter={sort.region}
          setSort={setSort}
          searchName={sort.name}
          updateSearchName={updateSearchName}
        />
        {/* <button onClick={clearFilters}>Clear</button>
        <button
          onClick={() => {
            console.log(countries);
          }}
        >
          Log Countries
        </button>
        <button onClick={() => updateSortType('alphabetical')}>
          Sort alphabetically
        </button>
        <button onClick={() => updateSortType('population')}>
          Sort by Population
        </button>
        <button
          onClick={() => {
            assignRegionFilter('Africa');
          }}
        >
          Filter by Africa
        </button>
        <button
          onClick={() => {
            assignRegionFilter('Europe');
          }}
        >
          Filter by Europe
        </button>
        {displayed &&
          displayed.map((country) => {
            return (
              <div key={country.name.common}>
                {country.name.common}
                <img
                  src={country.flags.svg}
                  style={{ width: '200px', objectFit: 'cover' }}
                ></img>
              </div>
            );
          })} */}
        {displayed &&
          displayed.map((country) => {
            return (
              <div key={country.name.common}>
                {country.name.common}
                <img
                  src={country.flags.svg}
                  style={{ width: '200px', objectFit: 'cover' }}
                ></img>
              </div>
            );
          })}
        {noCountries && <div>No Countries match your search!</div>}
      </main>
    </CountriesWrapper>
  );
}
