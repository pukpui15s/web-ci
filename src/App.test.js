import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the get started heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /get started/i })
  ).toBeInTheDocument();
});

test('increments the counter when clicked', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /count is 0/i }));

  expect(
    screen.getByRole('button', { name: /count is 1/i })
  ).toBeInTheDocument();
});
