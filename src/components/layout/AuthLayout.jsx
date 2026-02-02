import '../../styles/AuthLayout.css'
import Logo from '../../assets/Logo.svg'
import { useEffect } from 'react'

export default function AuthLayout({ children }) {
  useEffect(() => {
    document.body.className = 'auth-body'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <div className="auth-layout">
        <img className='logo' src={Logo}></img>
        <div className="auth-card">
            {children}
        </div>
    </div>
  )
}