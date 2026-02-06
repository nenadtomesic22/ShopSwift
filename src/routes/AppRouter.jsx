import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import ProtectedRoute from './ProtectedRoute'
import DashboardLayout from '../components/layout/DashboardLayout'
import OrdersDashboard from '../components/OrdersDashboard'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import OrderDetails from '../pages/orders/OrderDetails'
import AddOrder from '../pages/orders/AddOrder'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
         <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/orders" element={<OrdersDashboard />} />
              <Route path="/orders/:orderId" element={<OrderDetails />} />
              <Route path="/orders/add_order" element={<AddOrder />} />
              <Route path="/products" element={<AnalyticsDashboard />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Route>
        
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}