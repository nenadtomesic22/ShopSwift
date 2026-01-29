import DashboardLayout from '../components/layout/DashboardLayout'
import NavBar from '../components/dashboard/NavBar'
import SideBar from '../components/dashboard/SideBar'
import Dashboard from '../components/dashboard/Dashboard'

export default function Home() {
  return (
    <DashboardLayout>
      <NavBar />
      <SideBar />
      <Dashboard />
    </DashboardLayout>
  )
}