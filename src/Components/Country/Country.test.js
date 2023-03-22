import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { routesConfig } from '../../../App';
import Country from './Country';
import { act } from 'react-dom/test-utils';

function renderSetup() {
  render(
    <MemoryRouter initialEntries={['/Portugal']}>
      <Routes>
        <Route path="/:country/" element={<Country />}></Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('Country Detail', () => {
  // it('Does something', async () => {
  //   renderSetup();
  //   expect(
  //     screen.getByText(/I'm the country component for Portugal/i)
  //   ).toBeInTheDocument();
  // });

  it('Does something', async () => {
    await act(async () => {
      renderSetup();
    });

    await waitFor(() => {
      expect(
        screen.getByText(/I'm the country component for Portugal/i)
      ).toBeInTheDocument();
    });
  });
});
