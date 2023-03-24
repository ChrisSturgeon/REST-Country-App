import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Neighbours from './Neighbours';

const mockNeighbours = [
  'AFG',
  'BTN',
  'MMR',
  'HKG',
  'IND',
  'KAZ',
  'NPL',
  'PRK',
  'KGZ',
  'LAO',
  'MAC',
  'MNG',
  'PAK',
  'RUS',
  'TJK',
  'VNM',
];

function renderSetup() {
  render(
    <MemoryRouter>
      <Neighbours neighbours={mockNeighbours} />
    </MemoryRouter>
  );
}

describe('Neighbours component', () => {
  it('Renders with nav component', () => {
    renderSetup();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('Renders anchor tag correct common country name', () => {
    render(
      <MemoryRouter>
        <Neighbours neighbours={['AND']} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Andorra' })).toBeInTheDocument();
  });
});

it('Renders statement of no neighbours when appropriate', () => {
  render(
    <MemoryRouter>
      <Neighbours neighbours={[]} />
    </MemoryRouter>
  );

  expect(screen.getByTestId('no-neighbours')).toHaveTextContent(
    'Neighbours: none'
  );
});

it('Renders correct number of anchor tags for given neighbours', () => {
  renderSetup();
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(16);
});
