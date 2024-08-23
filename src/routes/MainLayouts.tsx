import {} from 'react'
import { Outlet } from 'react-router-dom'
import PageHeader from '../components/header/PageHeader'

const MainLayouts = () => {
  return (
    <main className='h-full px-2'>
      <PageHeader title="Victor MovicX" />
          <Outlet />
    </main>
  )
}

export default MainLayouts