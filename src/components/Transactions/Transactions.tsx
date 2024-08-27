import {} from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


type Props = {}

function Transactions({ }: Props) {
  const navigate = useNavigate();
  const TransactsLink = () => {
    navigate('/history')
  }
  return (
    <section className='w-full h-full gap-1'>
      <h1 className='text-[1.1rem]'>Recent transaction</h1>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-[3rem] h-[3rem] bg-red-200 flex items-center justify-center rounded-lg'>
            <FaArrowTrendDown className='text-red-500 text-xl'/>
          </div>
          <div>
            <p>Transfer to Movicx...</p>
            <span>24 Jan, 2024.(3:39pm)</span>
          </div>
        </div>
        <div className='flex flex-col flex-end'>
          <h1 className='text-[1.2rem] text-end'>-$55</h1>
          <span className='text-green-500'>Success</span>
        </div>
      </div>
      <button onClick={TransactsLink} className='flex items-center justify-center gap-4 mt-1 w-full bg-white shadow-custom py-2 rounded-full px-9 text-gray-500'>See all transactions <CiLocationArrow1 className='text-red-500 text-xl'/></button>
    </section>
    
  )
}

export default Transactions