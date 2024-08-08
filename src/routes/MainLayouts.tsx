import {} from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainLayouts = () => {
  return (
      <div className='h-full'>
          <Header />
          <Outlet />
          <Footer/>
    </div>
  )
}

export default MainLayouts