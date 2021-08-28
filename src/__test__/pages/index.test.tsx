import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

test('renders without erros', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', { name: 'Welcome to Next.js!' })
  ).toBeInTheDocument();
});
