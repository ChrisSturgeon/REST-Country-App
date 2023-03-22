import React from 'react';
import Grid from './Grid';
import { screen, render } from '@testing-library/react';

describe('Country Grid', () => {
  it('Displays "no countries found" when empty', () => {
    render(<Grid countries={null} />);
    expect(
      screen.getByText(/No Countries Match Your Search/i)
    ).toBeInTheDocument();
  });

  it('Does not display "no countries found" when not empty', () => {
    render(<Grid countries={[]} />);
    expect(screen.queryByText(/No Countries Match Your Search/i)).toBeNull();
  });
});
