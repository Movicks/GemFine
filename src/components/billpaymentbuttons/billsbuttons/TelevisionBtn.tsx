import {} from 'react'
import { MdLiveTv } from 'react-icons/md'

type Props = {}

function TelevisionBtn({}: Props) {
  return (
      <button className='box box5'>
          <MdLiveTv className='text-red-500 text-xl'/>
    </button>
  )
}

export default TelevisionBtn