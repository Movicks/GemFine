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
  LogAndRegRoute,
  Cards,
  History,
  More,
  MoneyTransfer,
} from './App';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/protectedroutes/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>

      <Route path='/user-profile' element={<ProtectedRoute>
        <UserProfile/>
      </ProtectedRoute>} />

      <Route element={<Dashboard />}>
        {/* Pages with header and footer */}
        <Route element={<MainLayouts />}>
          <Route index element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path='/card' element={<ProtectedRoute>
            <Cards/>
          </ProtectedRoute>} />
          <Route path='/history' element={<ProtectedRoute>
            <History/>
          </ProtectedRoute>} />
          <Route path='/more' element={
            <ProtectedRoute>
              <More/>
            </ProtectedRoute>
          } />
          <Route path='/transfer' element={
            <ProtectedRoute>
              <MoneyTransfer/>
            </ProtectedRoute>
          } />
        </Route>
      </Route>

      
      
      <Route element={<LogAndRegRoute />}>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>

      {/* all pages without header and footer */}
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
