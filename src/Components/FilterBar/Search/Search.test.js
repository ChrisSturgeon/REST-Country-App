import React from 'react';
import Search from './Search';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';

const mockSort = {
  name: 'China',
};

const mockEmptySort = {
  name: '',
};

describe('Search Bar', () => {
  it('Has input textbox element', () => {
    render(<Search sort={mockSort} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Has aria-label', () => {
    render(<Search sort={mockSort} />);
    expect(screen.getByLabelText('country search')).toBeInTheDocument();
  });

  it('Displays search value from props when present', async () => {
    render(<Search sort={mockSort} />);
    expect(screen.getByRole('textbox')).toHaveValue('China');
  });

  it('Displays empty input element when props value is empty', () => {
    render(<Search sort={mockEmptySort} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('Triggers on change value on input change', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Search sort={mockEmptySort} setSort={onChangeMock} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'new value');
    expect(onChangeMock).toHaveBeenCalledTimes(9);
  });

  it('Renders clear search button when props name has length', () => {
    render(<Search sort={mockSort} />);
    expect(
      screen.getByRole('button', {
        name: 'clear input for search by country name',
      })
    ).toBeInTheDocument();
  });

  it('Does not render search button when props name is empty', () => {
    render(<Search sort={mockEmptySort} />);
    expect(
      screen.queryByRole('button', {
        name: 'clear input for search by country name',
      })
    ).toBeFalsy();
  });

  it('Has clear search button with name from aria label', () => {
    render(<Search sort={mockSort} />);
    expect(
      screen.getByRole('button', {
        name: 'clear input for search by country name',
      })
    ).toBeInTheDocument();
  });

  it('Calls set sort function when clear search button is clicked', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Search sort={mockSort} setSort={onChangeMock} />);

    await user.click(
      screen.getByRole('button', {
        name: 'clear input for search by country name',
      })
    );

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
