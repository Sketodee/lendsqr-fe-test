
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterPopup from '../components/FilterPopUp';
import { FilterState, FilterPopupProps } from '../types/types';

describe('FilterPopup component', () => {
  const defaultProps: FilterPopupProps = {
    isOpen: true,
    onClose: jest.fn(),
    onFilter: jest.fn(),
  };

  const renderComponent = (props = defaultProps) => render(<FilterPopup {...props} />);

  it('should not render when isOpen is false', () => {
    renderComponent({ ...defaultProps, isOpen: false });
    expect(screen.queryByText('Organization')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    renderComponent();
    expect(screen.getByText('Organization')).toBeInTheDocument();
  });

  it('should handle input changes', () => {
    renderComponent();
    const usernameInput = screen.getByLabelText('Username');
    fireEvent.change(usernameInput, { target: { value: 'John Doe', name: 'username' } });
    expect((usernameInput as HTMLInputElement).value).toBe('John Doe');

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com', name: 'email' } });
    expect((emailInput as HTMLInputElement).value).toBe('john@example.com');
  });

  it('should reset all fields when reset button is clicked', () => {
    renderComponent();

    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const phoneNumberInput = screen.getByLabelText('Phone Number');
    const statusSelect = screen.getByLabelText('Status');

    fireEvent.change(usernameInput, { target: { value: 'John Doe', name: 'username' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890', name: 'phoneNumber' } });
    fireEvent.change(statusSelect, { target: { value: 'active', name: 'status' } });

    fireEvent.click(screen.getByText('Reset'));

    expect((usernameInput as HTMLInputElement).value).toBe('');
    expect((emailInput as HTMLInputElement).value).toBe('');
    expect((phoneNumberInput as HTMLInputElement).value).toBe('');
    expect((statusSelect as HTMLSelectElement).value).toBe('');
  });

  it('should call onFilter and onClose when filter button is clicked', () => {
    const onCloseMock = jest.fn();
    const onFilterMock = jest.fn();

    renderComponent({ ...defaultProps, onClose: onCloseMock, onFilter: onFilterMock });

    const filterButton = screen.getByText('Filter');
    fireEvent.click(filterButton);

    expect(onFilterMock).toHaveBeenCalledWith({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    expect(onCloseMock).toHaveBeenCalled();
  });
});

