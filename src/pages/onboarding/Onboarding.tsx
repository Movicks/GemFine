import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

const Onboarding = () => {
  return (
    <section className='relative flex items-center justify-center h-screen bg-redGradient overflow-hidden'>
      <div className='flex flex-col justify-center items-center z-70 gap-9 w-full md:max-w-[30rem] shadow-custom py-[7rem] rounded-lg'>
        <h1 className='text-white text-5xl'>UBA</h1>
        <p className='text-gray-100 text-lg text-center'>
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
          <a href='https://' className='border-2 border-gray-200 p-1 rounded-full bg-black'><FaFacebookF className='text-2xl text-white rounded-full'/></a>
          <a href='https://' className='border-2 border-gray-200 p-1 rounded-full bg-black'><BsTwitterX className='text-2xl text-white rounded-full'/></a>
          <a href='https://' className='border-2 border-gray-200 p-1 rounded-full bg-black'><IoLogoInstagram className='text-2xl text-white rounded-full'/></a>
          <a href='https://' className='border-2 border-gray-200 p-1 rounded-full bg-black'><IoLogoTiktok className='text-2xl text-white rounded-full'/></a>
        </div>
      </div>
      <div className='bubbles-container absolute'>
        {[...Array(10)].map((_, i) => (
          <div key={i} className='bubble absolute'></div>
        ))}
      </div>
    </section>
  );
}

export default Onboarding;
