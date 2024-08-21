import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import DashboardNavMenu from './../../components/dashboardnavmenu/DashboardNavMenu';

function Dashboard() {
  const [navWidth, setNavWidth] = useState<number>(80); // Default width 5rem in pixels

  const handleNavWidthChange = (newWidth: number) => {
    setNavWidth(newWidth);
  };

  return (
    <div className='h-full flex relative'>
      <DashboardNavMenu onWidthChange={handleNavWidthChange} />
      <div 
        className='flex-grow'
        style={{
          marginLeft: window.innerWidth >= 768 ? `${navWidth}px` : '0',
        }}
      >
        <div>
         <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;