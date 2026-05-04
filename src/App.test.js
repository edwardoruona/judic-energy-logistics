import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home hero content', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByText(/Expertise in logistics, drilling rigs, marine, oil and gas construction/i)
  ).toBeInTheDocument();
});
