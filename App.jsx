import React from 'react';
import Header from './src/Components/Header/Header';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Countries from './src/Components/Countries/Countries';

import { lightTheme, darkTheme } from './themes';
import { useDarkMode } from './hooks/useDarkMode';
import Footer from './src/Components/Footer/Footer';
import Country from './src/Components/Country/Country';

export const routesConfig = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/all" />,
  },
  {
    path: '/:countryCode/',
    element: <Country />,
  },
  {
    path: '/all',
    element: <Countries />,
  },
]);

export default function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RouterProvider router={routesConfig} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
