import {} from 'react'
import { BsFileBarGraph } from 'react-icons/bs'

type Props = {}

function AirtimeBills({}: Props) {
  return (
      <button className='box box1'>
          <BsFileBarGraph className='text-red-500 text-xl'/>
    </button>
  )
}

export default AirtimeBills