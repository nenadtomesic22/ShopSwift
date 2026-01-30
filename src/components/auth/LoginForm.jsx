import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'
import Input from '../ui/Input.jsx'
import mailIcon from '../../assets/mail.svg'
import pwIcon  from '../../assets/pw.svg'


export default function LoginForm() {
  const [email, setEmail] = useState('nikola@nrt-media.com')
  const [password, setPassword] = useState('123456')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await login({ email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/home')
    } catch (err) {
      alert('Pogrešni podaci')
    }
  }

  return (
    <>
    <h1>Ulogujte se</h1>
    <p>Unesite vase detalje da nastavite</p>
    <form onSubmit={handleSubmit}>
        
        <Input icon={mailIcon} alt={'mailIcon'} type={'email'} value={email} onChange={e => setEmail(e.target.value)} placeholder={'nikola@nrt-media.com'} />
        <Input icon={pwIcon} alt={'passwordIcon'} type={'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder={'••••••••'} />
        <a href='#'>Zaboravili ste lozinku?</a>
        <button type="submit" className='login'>Ulogujte se</button>
    </form>
    </>
  )
}
