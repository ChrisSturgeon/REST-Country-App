import React from 'react';
import Stats from './Stats';
import { render, screen } from '@testing-library/react';

const mockStats = {
  name: {
    common: 'Portugal',
    official: 'Portuguese Republic',
    nativeName: {
      por: {
        official: 'República português',
        common: 'Portugal',
      },
    },
  },
  cca3: 'PRT',
  tld: ['.pt'],
  currencies: {
    EUR: {
      name: 'Euro',
      symbol: '€',
    },
  },
  capital: ['Lisbon'],
  region: 'Europe',
  subregion: 'Southern Europe',
  languages: {
    por: 'Portuguese',
  },
  borders: ['ESP'],
  population: 10305564,
  continents: ['Europe'],
  flags: {
    png: 'https://flagcdn.com/w320/pt.png',
    svg: 'https://flagcdn.com/pt.svg',
    alt: 'The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.',
  },
};

function renderSetup() {
  return render(<Stats country={mockStats} />);
}

describe('Stats Component', () => {
  it('Shows native name from props', () => {
    renderSetup();
    expect(screen.getByTestId('native-name')).toHaveTextContent(
      'Native Name: Portugal'
    );
  });

  it('Shows formatted population from props', () => {
    renderSetup();
    expect(screen.getByTestId('population')).toHaveTextContent(
      'Population: 10,305,564'
    );
  });

  it('Shows region from props', () => {
    renderSetup();
    expect(screen.getByTestId('region')).toHaveTextContent('Region: Europe');
  });

  it('Shows sub region from props', () => {
    renderSetup();
    expect(screen.getByTestId('subregion')).toHaveTextContent(
      'Sub Region: Southern Europe'
    );
  });

  it('Shows capital from props', () => {
    renderSetup();
    expect(screen.getByTestId('capital')).toHaveTextContent('Capital: Lisbon');
  });

  it('Shows top level domain from props', () => {
    renderSetup();
    expect(screen.getByTestId('domain')).toHaveTextContent(
      'Top Level Domain: .pt'
    );
  });

  it('Shows currencies from props', () => {
    renderSetup();
    expect(screen.getByTestId('currencies')).toHaveTextContent(
      'Currencies: Euro'
    );
  });

  it('Shows languages from props', () => {
    renderSetup();
    expect(screen.getByTestId('languages')).toHaveTextContent(
      'Languages: Portuguese'
    );
  });
});
