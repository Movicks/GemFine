import {} from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

type Props = {}

function ElectricityBills({}: Props) {
  return (
      <button className='box box3'>
          <FaRegLightbulb className='text-red-500 text-xl' />
    </button>
  )
}

export default ElectricityBills