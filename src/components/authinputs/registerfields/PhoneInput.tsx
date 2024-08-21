import {} from 'react'
import { useFormContext } from 'react-hook-form';
import { SlCallIn } from 'react-icons/sl';

const PhoneInput = () => {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col gap-1 bg-transparent w-full'>
      <label htmlFor="phone" className='text-gray-600'>Phone</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full shadow-custom w-full md:max-w-[14rem]'>
        <SlCallIn className='text-xl text-red-300'/>
        <input id='phone' placeholder='Phone No' {...register('phone')} className='bg-transparent outline-none h-full w-full'/>
      </div>
    </div>
  )
}

export default PhoneInput