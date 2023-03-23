import React from 'react';
import Sort from './Sort';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';

const mockSort = {
  type: 'population',
};

describe('Sort', () => {
  it('Has button element for reverse sorting', () => {
    render(<Sort sort={mockSort} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Has aria-label on the reverse sort button', () => {
    render(<Sort sort={mockSort} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });

  it('Triggers reverse order sort on button click', async () => {
    const user = userEvent.setup();
    const mockFunction = jest.fn();
    render(<Sort sort={mockSort} setSort={mockFunction} />);
    await user.click(screen.getByRole('button'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
