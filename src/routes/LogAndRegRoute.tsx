import {} from 'react'
import AnimatedLinker from '../components/authinputs/AnimatedLinker'
import { Outlet } from 'react-router-dom'

const LogAndRegRoute = () => {
  return (
      <div className='h-full bg-white md:bg-transparent'>
        <div className='flex flex-col gap-3 p-2 items-center md:pt-[5rem] justify-center h-auto md:h-full bg-white md:bg-transparent'>
          <div className='w-full md:max-w-[30rem] md:p-4 md:shadow-custom py-2 md:rounded-2xl px-1 flex flex-col bg-white justify-center gap-3'>
            <AnimatedLinker />
            <Outlet/> 
          </div> 
        </div>
    </div>
  )
}

export default LogAndRegRoute