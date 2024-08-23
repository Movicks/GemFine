import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaHistory, FaGift, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsCreditCard2BackFill, BsGridFill } from 'react-icons/bs';

interface DashboardNavMenuProps {
  onWidthChange: (width: number) => void;
}

const DashboardNavMenu = ({ onWidthChange }: DashboardNavMenuProps) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  const [width, setWidth] = useState<number>(80); // Default width 5rem for md screens
  const [showIconsOnly, setShowIconsOnly] = useState<boolean>(true); // Default is icons only
  const [isMdScreen, setIsMdScreen] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const handleLeftClick = () => {
    setWidth(80); // 5rem in pixels
    setShowIconsOnly(true);
    onWidthChange(80);
  };

  const handleRightClick = () => {
    setWidth(200); // 30rem in pixels
    setShowIconsOnly(false);
    onWidthChange(200);
  };

  const getTransformStyle = () => {
    const activeIndex = ['/', '/card', '/history', '/transfer', '/more'].indexOf(activeLink);
    if (isMdScreen) {
      return `translateY(${activeIndex * 70}px)`; // Adjusted height for indicator on md screens
    }
    return `translateX(${activeIndex * 100}%)`;
  };

  return (
    <div
      style={{ width: isMdScreen ? `${width}px` : '100%' }}
      className='BottomFooter fixed bottom-0 h-[4.5rem] shadow-custom py-2 md:pr-1 overflow-hidden w-full bg-white md:rounded-r-2xl md:w-auto md:flex-col md:items-start md:fixed md:top-0 md:left-0 md:h-full'
    >
      <div className='relative flex items-center md:pb-3 md:pl-4 justify-between md:max-h-[21rem] overflow-hidden w-full md:h-full md:flex-col md:items-start'>
        <NavLink
          to='/'
          className={`w-[20%] md:w-[100%] flex flex-col md:flex-row md:gap-3 md:pt-3 ${isMdScreen && showIconsOnly ? 'flex-col' : 'flex-row'} items-center text-center py-2 z-10 transition-colors duration-500 text-md ${
            activeLink === '/' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLinkClick('/')}
        >
          <FaHome className={` ${isMdScreen && showIconsOnly ? 'text-2xl' : 'text-2xl'}`}  />
          {(!isMdScreen || !showIconsOnly) && <span className={`${
            activeLink === '/' ? 'text-gray-500 md:text-white' : 'text-gray-500'
          }`}>Home</span>}
        </NavLink>
        <NavLink
          to='/card'
          className={`w-[20%] md:w-[100%] flex flex-col md:flex-row md:gap-3 md:pt-3 ${isMdScreen && showIconsOnly ? 'flex-col' : 'flex-row'} items-center text-center py-2 z-10 transition-colors duration-500 text-md ${
            activeLink === '/card' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLinkClick('/card')}
        >
          <BsCreditCard2BackFill className={` ${isMdScreen && showIconsOnly ? 'text-2xl' : 'text-2xl'}`} />
          {(!isMdScreen || !showIconsOnly) && <span className={`${
            activeLink === '/card' ? 'text-gray-500 md:text-white' : 'text-gray-500'
          }`}>Cards</span>}
        </NavLink>
        <NavLink
          to='/history'
          className={`w-[20%] md:w-[100%] flex flex-col md:flex-row md:gap-3 md:pt-3 ${isMdScreen && showIconsOnly ? 'flex-col' : 'flex-row'} items-center text-center py-2 z-10 transition-colors duration-500 text-md ${
            activeLink === '/history' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLinkClick('/history')}
        >
          <FaHistory className={` ${isMdScreen && showIconsOnly ? 'text-2xl' : 'text-2xl'}`} />
          {(!isMdScreen || !showIconsOnly) && <span className={`${
            activeLink === '/history' ?'text-gray-500 md:text-white' : 'text-gray-500'
          }`}>History</span>}
        </NavLink>
        <NavLink
          to='/transfer'
          className={`w-[20%] md:w-[100%] flex flex-col md:flex-row md:gap-3 md:pt-3 ${isMdScreen && showIconsOnly ? 'flex-col' : 'flex-row'} items-center text-center py-2 z-10 transition-colors duration-500 text-md ${
            activeLink === '/transfer' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLinkClick('/transfer')}
        >
          <FaGift className={` ${isMdScreen && showIconsOnly ? 'text-2xl' : 'text-2xl'}`} />
          {(!isMdScreen || !showIconsOnly) && <span className={`${
            activeLink === '/transfer' ? 'text-gray-500 md:text-white' : 'text-gray-500'
          }`}>Transfer</span>}
        </NavLink>
        <NavLink
          to='/more'
          className={`w-[20%] md:w-[100%] flex flex-col md:flex-row md:gap-3 md:pt-3 ${isMdScreen && showIconsOnly ? 'flex-col' : 'flex-row'} items-center text-center py-2 z-10 transition-colors duration-500 text-md ${
            activeLink === '/more' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLinkClick('/more')}
        >
          <BsGridFill className={` ${isMdScreen && showIconsOnly ? 'text-2xl' : 'text-2xl'}`} />
          {(!isMdScreen || !showIconsOnly) && <span className={`${
            activeLink === '/more' ? 'text-gray-500 md:text-white' : 'text-gray-500'
          }`}>More</span>}
        </NavLink>
        <span
          className={`Indicator mt-[5px] absolute top-0 left-0 bg-redGradient rounded-full ${isMdScreen && showIconsOnly ? 'rounded-full' : 'md:rounded-r-full'} shadow-custom transition-transform duration-500 ease-in-out`}
          style={{
            transform: getTransformStyle(),
            width: window.innerWidth >= 768 ? '100%' : '20%',
            height: window.innerWidth >= 768 ? '40px' : '1.7rem', // Adjusted height for indicator
            borderTopLeftRadius: window.innerWidth >= 768 ? '0px' : '',
            borderBottomLeftRadius: window.innerWidth >= 768 ? '0px' : '',
            borderTopRightRadius: window.innerWidth >= 768 ? '20px' : '', // Top-right radius
            borderBottomRightRadius: window.innerWidth >= 768 ? '20px' : '', 
          }}
        ></span>
      </div>
      {isMdScreen && (
        <div className='flex md:flex-col w-full md:max-w-[3.7rem] items-center mt-4 md:mt-4'>
          <button
            className='p-2 rounded-full bg-gray-200 md:mb-5'
            onClick={handleRightClick}
          >
            <FaArrowRight className='text-red-600'/>
          </button>
          <button
            className='p-2 rounded-full bg-gray-200'
            onClick={handleLeftClick}
          >
            <FaArrowLeft className='text-red-600'/>
          </button>
        </div>
      )}
    </div>
  );
};

export default DashboardNavMenu;