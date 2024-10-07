import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { MdFilterList } from "react-icons/md";
import FilterPopup from './FilterPopUp';
import { Column, User } from '../types/types';


const columns: Column[] = [
  { key: 'orgName', header: 'ORGANIZATION' },
  { key: 'userName', header: 'USERNAME' },
  { key: 'email', header: 'EMAIL' },
  { key: 'phoneNumber', header: 'PHONE NUMBER' },
  { key: 'lastActiveDate', header: 'DATE JOINED' },
  { key: 'createdAt', header: 'STATUS' },
];

const UserTable = () => {
  const [sortColumn, setSortColumn] = useState<keyof User | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { users, loading, error } = useUsers();
  const navigate = useNavigate()
  

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilter = (filters: any) => {
    console.log('Applying filters:', filters);
  };

  const goToDetails = (id: number) => {
    navigate(`/profile/${id}`); 
  };

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead >
          <tr >
            {columns.map((column) => (
              <th className='user-header' key={column.key} onClick={toggleFilter}>
                {column.header} <span ><MdFilterList /></span>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody >
          {paginatedUsers.map((user, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td onClick={() => goToDetails(user.id)} key={column.key}>
                  {column.key === 'createdAt' ? (
                    // <span className={`status ${user.status.toLowerCase()}`}>
                    //   {user.status}
                    // </span>
                    ""
                  ) : (
                    user[column.key]
                  )}
                </td>
              ))}
              <td >
                <button className="ellipsis-menu" >⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>
          Showing {itemsPerPage * currentPage} out of {users.length}
        </span>

        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
          <button className=''
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>


      </div>
      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilter={handleFilter}
      />

    </div>
  );
};

export default UserTable;