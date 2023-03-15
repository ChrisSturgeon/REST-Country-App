import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header Tests', () => {
  it.skip('Matches snapshot', () => {
    render(<Header />);
    expect(document.body).toMatchSnapshot();
  });

  it('Has "header" element as banner', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Should have a header element', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Should render h1 level heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('Has correct title', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Where in the World?'
    );
  });
});
