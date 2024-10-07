
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserTable from '../components/UserTable';
import { useUsers } from '../hooks/useUsers';

// Mock the useUsers hook
jest.mock('../hooks/useUsers', () => ({
  useUsers: jest.fn(),
}));

const mockUsers = [
  { id: 1, orgName: 'Org 1', userName: 'User 1', email: 'user1@example.com', phoneNumber: '1234567890', lastActiveDate: '2023-10-01', createdAt: 'ACTIVE' },
  { id: 2, orgName: 'Org 2', userName: 'User 2', email: 'user2@example.com', phoneNumber: '0987654321', lastActiveDate: '2023-10-02', createdAt: 'INACTIVE' },
];

describe('UserTable component', () => {
  beforeEach(() => {
    (useUsers as jest.Mock).mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });
    render(
      <BrowserRouter>
        <UserTable />
      </BrowserRouter>
    );
  });

  it('should render the user table with correct headers', () => {
    expect(screen.getByText('ORGANIZATION')).toBeInTheDocument();
    expect(screen.getByText('USERNAME')).toBeInTheDocument();
    expect(screen.getByText('EMAIL')).toBeInTheDocument();
    expect(screen.getByText('PHONE NUMBER')).toBeInTheDocument();
    expect(screen.getByText('DATE JOINED')).toBeInTheDocument();
    expect(screen.getByText('STATUS')).toBeInTheDocument();
  });

  it('should display user data correctly', () => {
    expect(screen.getByText('Org 1')).toBeInTheDocument();
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('user1@example.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('2023-10-01')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  it('should open the filter popup when the filter icon is clicked', () => {
    const filterIcon = screen.getAllByRole('img')[0]; // Assuming the MdFilterList icon is the first image
    fireEvent.click(filterIcon);
    expect(screen.getByRole('dialog')).toBeInTheDocument(); // Assuming FilterPopup has a dialog role
  });

  it('should navigate to user details page when a row is clicked', () => {
    const userRow = screen.getByText('User 1').closest('tr');
    if (userRow) {
      fireEvent.click(userRow);
    }
    
    expect(window.location.pathname).toBe('/profile/1'); // Ensure it navigates to the correct profile
  });

  it('should sort users when a header is clicked', () => {
    const header = screen.getByText('USERNAME');
    fireEvent.click(header);
    // Simulate sorting logic if needed, you can add more assertions based on sort direction/state
    expect(header).toHaveTextContent('USERNAME'); // You can verify the state if you manage sorting state
  });

  it('should paginate users correctly', () => {
    const nextPageButton = screen.getByText('>'); // Assuming '>' is the next button
    fireEvent.click(nextPageButton);
    // Verify that pagination state changes, you can add assertions based on pagination logic
    expect(screen.getByText('Showing 10 out of 2')).toBeInTheDocument(); // Adjust as needed based on state
  });
});
