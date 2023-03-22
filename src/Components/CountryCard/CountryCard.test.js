import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';
import { MemoryRouter } from 'react-router-dom';

const mockCountry = {
  name: {
    common: 'United Kingdom',
  },

  flags: {
    svg: 'https://flagcdn.com/gb.svg',
    alt: 'The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.',
  },

  population: 67215293,
  region: 'Europe',
  capital: ['London'],
};

function renderSetup() {
  render(
    <MemoryRouter>
      <CountryCard country={mockCountry} />
    </MemoryRouter>
  );
}

describe('Country Card', () => {
  it('Renders anchor tag', () => {
    renderSetup();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('Renders anchor tag with href country from props', () => {
    renderSetup();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/United Kingdom');
  });

  it('Renders heading 2 in link', () => {
    renderSetup();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('Heading has name from props', () => {
    renderSetup();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'United Kingdom'
    );
  });

  it('Has img element', () => {
    renderSetup();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Has img element with alt from props', () => {
    renderSetup();
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.'
    );
  });

  it('Has comma seperated population from props', () => {
    renderSetup();
    expect(screen.getByTestId('population')).toHaveTextContent(
      /Population: 67,215,293/i
    );
  });

  it('Has region from props', () => {
    renderSetup();
    expect(screen.getByTestId('region')).toHaveTextContent(/Region: Europe/i);
  });

  it('Has singular capital from props', () => {
    renderSetup();
    expect(screen.getByTestId('capital')).toHaveTextContent(/Capital: London/i);
  });
});
