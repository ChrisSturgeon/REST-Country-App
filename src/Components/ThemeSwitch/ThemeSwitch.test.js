import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitch from './ThemeSwitch';

describe('Theme Toggle Switch', () => {
  it('Renders as button', () => {
    render(<ThemeSwitch />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Fires theme toggle function on click', async () => {
    const mockToggle = jest.fn();
    const user = userEvent.setup();

    render(<ThemeSwitch toggleDarkMode={mockToggle} />);
    await user.click(screen.getByRole('button'));

    expect(mockToggle).toHaveBeenCalled();
  });
});
