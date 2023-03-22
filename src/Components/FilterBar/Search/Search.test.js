import React from 'react';
import Search from './Search';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';

describe('Search Bar', () => {
  it('Has input textbox element', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Has aria-label', () => {
    render(<Search />);
    expect(screen.getByLabelText('country search')).toBeInTheDocument();
  });

  it('Has value from props', async () => {
    const onChangeMock = jest.fn();
    render(<Search searchName="test" updateSearchName={onChangeMock} />);
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('Triggers on change value on input change', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Search searchName="" updateSearchName={onChangeMock} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'new value');
    expect(onChangeMock).toHaveBeenCalledTimes(9);
  });
});
