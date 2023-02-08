import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /Simple React Type and Read with Typescript/i
  )
  expect(linkElement).toBeInTheDocument()
})
