import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/Home/Hero';

describe('Hero Component', () => {
  test('renders hero image with alt text', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText(/Hero image/i);
    expect(heroImage).toBeInTheDocument();
  });

  test('renders heading and button', () => {
    render(<Hero />);
    expect(screen.getByText(/Invest in everything/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /signup now/i })).toBeInTheDocument();
  });
});
