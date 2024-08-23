import {} from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiCustomerService2Line } from 'react-icons/ri';

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className='sticky top-0 left-0 py-2 bg-[#f2f8fc] md:py-4 px-2 md:px-4 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <div className='w-[3.3rem] h-[3.3rem] min-w-[3.3rem] min-h-[3.3rem]  md:w-[4rem] md:h-[4rem] rounded-full border-2 p-1 border-red-500'>
          <img src='https://media.istockphoto.com/id/1178961032/photo/photo-of-funny-dark-skin-man-holding-telephone-advertising-new-model-smart-phone-indicating.jpg?s=612x612&w=0&k=20&c=H1g5dwymU1TaQAdi_72fjuYrl_a9w46Uz2XEy1aCSNw='
            alt='user'
            className='w-full h-full bg-cover object-cover bg-center rounded-full shadow-custom' />
        </div>
        <div className='h-[2.7rem] flex flex-col'>
          <p className='text-gray-500 text-sm md:text-md'>Good Morning,</p>
          <h1 className='text-[1.1rem] md:text-[1.6rem] text-gray-600'>{title}</h1>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button className='relative bg-gray-200 h-10 w-10 flex items-center justify-center p-1 rounded-full shadow-custon'>
          <RiCustomerService2Line className='text-4xl text-gray-500'/>
          <span className='absolute w-3 h-1 bg-red-500 top-6 rounded-full shadow-custon'></span>
        </button>
        <button className='relative bg-gray-200 h-10 w-10 flex items-center justify-center p-1 rounded-full shadow-custon'>
          <IoNotificationsOutline className='text-4xl text-gray-500' />
          <span className='absolute w-2 h-2 bg-red-500 top-2 right-2 rounded-full shadow-custon'></span>
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
