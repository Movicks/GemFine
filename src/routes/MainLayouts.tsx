import {} from 'react'
import { Outlet } from 'react-router-dom'
import PageHeader from '../components/header/PageHeader'

const MainLayouts = () => {
  return (
    <main className='h-full'>
      <PageHeader title="Victor MovicX" />
      <div className='h-full px-2'>
        <Outlet />
      </div>
          
    </main>
  )
}

export default MainLayouts