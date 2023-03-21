import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';
import { MemoryRouter } from 'react-router-dom';

const mockCountry = {
  name: {
    common: 'United Kingdom',
  },
};

describe('Country Card', () => {
  it('Renders anchor tag', () => {
    render(
      <MemoryRouter>
        <CountryCard country={mockCountry} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('Renders anchor tag with href country from props', () => {
    render(
      <MemoryRouter>
        <CountryCard country={mockCountry} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/United Kingdom');
  });

  it('Renders heading 2 in link', () => {
    render(
      <MemoryRouter>
        <CountryCard country={mockCountry} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('Heading has name from props', () => {
    render(
      <MemoryRouter>
        <CountryCard country={mockCountry} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'United Kingdom'
    );
  });
});
