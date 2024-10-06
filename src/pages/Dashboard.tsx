import React from 'react';
import StatsDisplay from '../components/StatsDisplay';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  return (
    <div>
      <StatsDisplay/>
      <UserTable />
    </div>
  );
};

export default Dashboard;