import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const AnimatedLinker = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[2.2rem] text-center mb-1'>Welcome</h1>
      <p className='mb-3 text-gray-500'>Hi, you need to signup or login to enter</p>
      <div className='relative flex justify-between bg-red-200 border-2 border-red-300 rounded-full overflow-hidden w-[16rem]'>
        <NavLink
          to='/register'
          className={`w-[8rem] text-center py-2 rounded-full z-10 transition-colors duration-500 text-lg ${
            activeLink === '/register' ? 'bg-redGradient text-white shadow-custom' : 'bg-transparent text-black'
          }`}
          onClick={() => handleLinkClick('/register')}
        >
          Sign Up
        </NavLink>
        <NavLink
          to='/login'
          className={`w-[8rem] text-center py-2 rounded-full z-10 transition-colors duration-500 text-lg ${
            activeLink === '/login' ? 'bg-redGradient text-white shadow-custom' : 'bg-transparent text-black'
          }`}
          onClick={() => handleLinkClick('/login')}
        >
          Login
        </NavLink>
        <span
          className='Indicator absolute top-0 left-0 h-full bg-redGradient rounded-full shadow-custom transition-transform duration-500 ease-in-out'
          style={{
            transform: activeLink === '/register' ? 'translateX(0)' : 'translateX(100%)',
            width: '50%',
          }}
        ></span>
      </div>
    </div>
  );
};

export default AnimatedLinker;
