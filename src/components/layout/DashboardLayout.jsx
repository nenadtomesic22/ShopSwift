import '../../styles/AuthLayout.css'
import Logo from '../../assets/Logo.svg'

export default function DashboardLayout({ children }) {
  return (
    <div className="auth-layout">
        <img className='logo' src={Logo}></img>
            {children}
        </div>
  )
}