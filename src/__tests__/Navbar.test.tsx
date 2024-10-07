
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('should render the navbar correctly', () => {
    render(<Navbar />);
    
    // Check if the search input and buttons are rendered
    expect(screen.getByPlaceholderText('Search for anything')).toBeInTheDocument();
    expect(screen.getByLabelText('Submit search')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Richard')).toBeInTheDocument();
  });

  it('should handle search input changes', () => {
    render(<Navbar />);
    const searchInput = screen.getByPlaceholderText('Search for anything');

    fireEvent.change(searchInput, { target: { value: 'Test search' } });
    expect(searchInput).toHaveValue('Test search');
  });

  it('should handle search form submission', () => {
    render(<Navbar />);
    const searchInput = screen.getByPlaceholderText('Search for anything');
    const searchButton = screen.getByLabelText('Submit search');

    fireEvent.change(searchInput, { target: { value: 'Test search' } });
    fireEvent.click(searchButton);
    
    // Check if the search input still retains its value
    expect(searchInput).toHaveValue('Test search');
  });
});
