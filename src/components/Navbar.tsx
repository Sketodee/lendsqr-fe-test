import React, { useState } from 'react';
import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

  const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

    return (
      <header className="header">
      <div className="header__search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search"
          />
          <button type="submit" aria-label="Submit search">
            <IoSearch/>
          </button>
        </form>
      </div>
      <div className="header__actions">
        <a href="/docs" className="header__docs">Docs</a>
        <button className="header__notifications" aria-label="Notifications">
         <FaRegBell/>
        </button>
        <div className="header__profile">
          <img src="" alt="" className="header__avatar" />
          <span className="header__username">Richard</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
    );
  };

export default Navbar;