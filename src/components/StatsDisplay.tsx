import React from 'react';
import { HiOutlineUsers } from "react-icons/hi2";
import { PiUsersThreeLight } from "react-icons/pi";
import { GrDocumentStore } from "react-icons/gr";
import { FaCoins } from 'react-icons/fa6';
// import '../StatsDisplay.scss';

interface StatCardProps {
  // icon: React.ReactNode;
  icon: any;
  title: string;
  value: number;
  color: string;
}

const iconMap: Record<string, React.ElementType> = {
  hioutlineuser: HiOutlineUsers,
  piusersthreelight: PiUsersThreeLight,
  grdocumentstore: GrDocumentStore,
  facoins: FaCoins
};

const StatsDisplay = () => {
  const stats = [
    { icon: 'hioutlineuser', title: 'USERS', value: 2453, color: '#DF18FF' },
    { icon: 'piusersthreelight', title: 'ACTIVE USERS', value: 2453, color: '#5718FF' },
    { icon: 'grdocumentstore', title: 'USERS WITH LOANS', value: 12453, color: '#F55F44' },
    { icon: 'facoins', title: 'USERS WITH SAVINGS', value: 102453, color: '#FF3366' }
  ];

  return (
    <div>
      <h1 className='stat-header'>Users</h1>
      <div className="stats-container">
        {stats.map((stat, index) => {
          const IconComponent = iconMap[stat.icon];

          return (
            <div key={index} className="stat-card">
              <div className="icon-container" style={{ backgroundColor: `${stat.color}1A`, color: `${stat.color}` }}>
                <IconComponent />
              </div>
              <div className="stat-info">
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-value">{stat.value.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
        {/* {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))} */}
      </div>
    </div>
  );
};

export default StatsDisplay;