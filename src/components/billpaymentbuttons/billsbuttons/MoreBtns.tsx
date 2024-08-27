import {} from 'react'
import { TfiMore } from 'react-icons/tfi'

type Props = {}

function MoreBtns({}: Props) {
  return (
      <button className='box box4'>
          <TfiMore className='text-red-500 text-xl'/>
    </button>
  )
}

export default MoreBtns