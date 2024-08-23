import {} from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const DetailsLinks = () => {
  return (
      <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold text-gray-600'>Pots</p>
          <Link to='#' className='w-[8rem] lg:w-[9rem] flex items-center justify-between'>
              <span className='text-gray-500 text-xl'>See Details</span>
              <IoIosArrowForward className='text-gray-500 text-xl' />
          </Link>
    </div>
  )
}

export default DetailsLinks