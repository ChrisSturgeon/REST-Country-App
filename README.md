# Where in the World?

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Concepts and Ideas Learnt](#concepts-and-ideas-learnt)
- [Areas to Improve](#areas-to-improve)
- [Contact](#contact)

## Overview

A site to display information about countries with data fetched from the [REST Countries API](https://restcountries.com/) built as a challenge from [Front End Mentor](https://www.frontendmentor.io/).

Users can:

- Filter countries by region
- Search by name
- Sort by population or alphabetical order
- View individual country pages with additional details such as currency, population and domain.
- Navigate between individual bordering countries.

View the live project [here](https://chrissturgeon.github.io/REST-Country-App/#/all) and view the project guidelines [here](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

![Home Page in Light Mode](/imgs/home-light.jpg 'Home Page in Light Mode')
![Detail Page in Light Mode](/imgs/detail-light.jpg 'Detail Page in Light Mode')
![Detail Page in Dark Mode](/imgs/detail-dark.jpg 'Detail Page in Light Mode')
![Detail Page in Mobile View](/imgs/mobile-detail-light.jpg 'Detail Page in Mobile View')

### Built With

- [React](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- [React Select](https://react-select.com/home)
- [webpack](https://webpack.js.org/)

## Features

- **Dark Mode** with custom animated toggle.
- Built with TDD approach using **Jest, React Testing Library**, and **[msw](https://mswjs.io/docs/getting-started/integrate)** to mock the API calls during testing.
- 45 tests across 9 suites.
- Created with **accessibility** in mind and achieves a lighthouse score of 93.
- **Responsive** to desktop, tablet and mobile viewports.

### Concepts and Ideas Learnt

- This was my first project using **Styled Components** which has given me an understanding of the advantages and disadvantages of CSS-in-JS.
- For this project I decided that I would forgo using Create React App and instead setup React from scratch myself in order to gain more of an insight on how it works under the hood, particularly integration of testing libraries and how to bring everything together with the help of **webpack**. I found [this YouTube video](https://www.youtube.com/watch?v=h3LpsM42s5o) and [this Medium article](https://www.youtube.com/watch?v=h3LpsM42s5o) very helpful.

### Areas to Improve

With more time I would have liked to have implemented more features and improved others, such as:

- Add maps of each country and capital using [leaflet](https://leafletjs.com/).
- Added more sort fields, such as land area.
- Included some interactive quizzes for each region.

## Contact

- sturgeon.chris@gmail.com
- [www.chrissturgeon.co.uk](https://chrissturgeon.co.uk/)
- [LinkedIn](https://www.linkedin.com/in/chris-sturgeon-36a74254/)
