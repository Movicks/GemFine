import {} from 'react'
import { Outlet } from 'react-router-dom'

// type Props = {}

const Root = () => {
  return (
      <div>
          <Outlet/>
    </div>
  )
}

export default Root