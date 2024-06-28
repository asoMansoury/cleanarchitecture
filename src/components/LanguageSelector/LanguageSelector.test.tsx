import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

test('renders learn react English Language Link', () => {
  const {getByText} = render(<LanguageSelector />);
  const linkElement = getByText(/English/i);
  expect(linkElement).toBeInTheDocument();
});