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
  UserProfile,
  Onboarding,
} from './App';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/protectedroutes/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>

      {/* Pages with header and footer */}
      <Route element={<MainLayouts />}>
        <Route path='/home' element={<Home/>} />
      </Route>
      
      
      {/* protected routes below */}
      <Route index element={<ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>} />
      <Route path='/user-profile' element={<ProtectedRoute>
        <UserProfile/>
      </ProtectedRoute>} />


      {/* all pages without header and footer */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/welcome' element={<Onboarding />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
