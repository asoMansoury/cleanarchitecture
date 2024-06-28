import { render } from '@testing-library/react';
import App from './App';

it.skip('renders learn react link', () => {
  const {getByText}=render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
});

test('renders App component', () => {
  render(<App></App>);
});
