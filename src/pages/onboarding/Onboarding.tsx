import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

const Onboarding = () => {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen bg-redGradient'>
      <div className='Row-container absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-10 backdrop-blur-md z-50 gap-9 w-full md:max-w-[30rem] lg:max-w-[40rem] lg:w-full shadow-custom px-3 rounded-lg'>
        <svg className='svg'>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" className='text-7xl font-bold'>
            UBA
          </text>
        </svg>
        <p className='text-gray-100 text-lg text-center md:w-[25rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link to='/register' className='rounded-full shadow-custom text-center text-xl px-3 py-2 text-white flex items-center justify-between w-full max-w-[17rem] bg-black'>
          <span className='text-center ml-2 pb-1'>Get Started</span>
          <div className='bg-white p-2 rounded-full w-[4rem] flex items-center justify-end'>
            <FaArrowRightLong className='text-black text-1xl' />
          </div>
        </Link>
        <div className='Socials mt-5 flex items-center px-3 justify-between w-full max-w-[17rem]'>
          <a href='https://facebook.com' className='border-2 border-gray-200 p-1 md:p-2 rounded-full bg-black'><FaFacebookF className='text-2xl text-white rounded-full'/></a>
          <a href='https://twitter.com' className='border-2 border-gray-200 p-1 md:p-2 rounded-full bg-black'><BsTwitterX className='text-2xl text-white rounded-full'/></a>
          <a href='https://instagram.com' className='border-2 border-gray-200 p-1 md:p-2 rounded-full bg-black'><IoLogoInstagram className='text-2xl text-white rounded-full'/></a>
          <a href='https://tiktok.com' className='border-2 border-gray-200 p-1 md:p-2 rounded-full bg-black'><IoLogoTiktok className='text-2xl text-white rounded-full'/></a>
        </div>
      </div>
      <div className='bubbles-container absolute'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='bubble absolute flex items-center justify-center'></div>
        ))}
      </div>
    </section>
  );
}

export default Onboarding;
