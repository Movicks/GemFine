import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  NotFoundPage,
  Root,
  MainLayouts,
  Dashboard,
  Home,
  Register,
  Login,
} from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>
      <Route index element={<Dashboard />} />

      {/* Pages with header and footer */}
      <Route element={<MainLayouts />}>
        <Route path='/home' element={<Home/>} />
      </Route>
      
      {/* all pages without header and footer */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
