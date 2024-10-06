import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <div className="main-content">
        <Navbar />
        {/* <main>{children}</main> */}
        <main>
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;