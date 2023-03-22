import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Country from './Country';

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
  it('Renders with correct name', async () => {
    renderSetup();

    await waitFor(() => {
      expect(
        screen.getByText(/I'm the country component for Portugal/i)
      ).toBeInTheDocument();
    });
  });
});
