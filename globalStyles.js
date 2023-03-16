import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // CSS Reset(https://www.joshwcomeau.com/css/custom-css-reset/)

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }



  #root, #__next {
    isolation: isolate;
  }

  // My global CSS

  body {
    font-family: 'Nunito Sans', sans-serif;
  }

  #root {
    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;

  }

  
`;

export default GlobalStyle;
