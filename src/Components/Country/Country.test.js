import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Country from './Country';

function renderSetup() {
  render(
    <MemoryRouter initialEntries={['/PRT']}>
      <Routes>
        <Route path="/:countryCode/" element={<Country />}></Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('Country Detail', () => {
  it('Renders with correct country name', async () => {
    renderSetup();

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Portugal' })
      ).toBeInTheDocument();
    });
  });

  it('Renders with flag img with src from component state', async () => {
    renderSetup();

    await waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://flagcdn.com/pt.svg'
      );
    });
  });

  it('Has Alt attribute on flag image', async () => {
    renderSetup();

    await waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'alt',
        'The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.'
      );
    });
  });
});
