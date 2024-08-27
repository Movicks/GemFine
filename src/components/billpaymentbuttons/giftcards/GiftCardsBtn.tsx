import {} from 'react'
import { TfiGift } from 'react-icons/tfi'

type Props = {}

function GiftCardsBtn({}: Props) {
  return (
      <div className='box'>
          <TfiGift className='text-red-500 text-xl'/>
    </div>
  )
}

export default GiftCardsBtn