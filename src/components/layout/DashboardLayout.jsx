import '../../styles/AuthLayout.css'
import Logo from '../../assets/Logo.png'

export default function DashboardLayout({ children }) {
  return (
    <div className="auth-layout">
        <img className='logo' src={Logo}></img>
        <div className="auth-card">
            {children}
        </div>
    </div>
  )
}