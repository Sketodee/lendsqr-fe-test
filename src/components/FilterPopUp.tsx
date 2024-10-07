import React, { useState } from 'react';
import { FilterPopupProps, FilterState } from '../types/types';

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose, onFilter }) => {
  const [filters, setFilters] = useState<FilterState>({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
  };

  const handleFilter = () => {
    onFilter(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="filter-popup">
      <div className="filter-content">
        <form>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <select
              id="organization"
              name="organization"
              value={filters.organization}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              {/* Add organization options here */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={filters.username}
              onChange={handleInputChange}
              placeholder="User"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={filters.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={filters.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={filters.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="button-group">
            <button type="button" className="reset-button" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="filter-button" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPopup;