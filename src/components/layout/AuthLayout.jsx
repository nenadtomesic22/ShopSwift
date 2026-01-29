import '../../styles/AuthLayout.css'
import Logo from '../../assets/Logo.svg'

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
        <img className='logo' src={Logo}></img>
        <div className="auth-card">
            {children}
        </div>
    </div>
  )
}