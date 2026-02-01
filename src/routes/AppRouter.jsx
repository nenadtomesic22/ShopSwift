import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Orders from '../pages/Orders'
import ProtectedRoute from './ProtectedRoute'
import DashboardLayout from '../components/layout/DashboardLayout'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
         <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
        
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}