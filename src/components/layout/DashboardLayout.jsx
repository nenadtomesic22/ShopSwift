import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import '../../styles/DashboardLayout.css'
import Header from '../dashboard/Header'
import SideBar from '../dashboard/SideBar'
import UpdateModal from '../UpdateModal'

export default function DashboardLayout({ children }) {
  useEffect(() => {
      document.body.className = 'dashboard-body'
      return () => {
        document.body.className = ''
      }
    }, [])
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="layout-body">
      <UpdateModal />
        <SideBar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
