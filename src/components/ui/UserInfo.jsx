import './UserInfo.css'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.svg'
import checkMark from '../../assets/checkMark.svg'

export default function UserInfo() {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div className="userInfo">
            <div className="userWrapp">
                <div className='store'>
                    <a href="#" id="avatar"><img src={avatar} alt="avatar"/></a>
                    <p>Butik Orlando</p>
                </div>
                <img src={checkMark} alt="checkMark" id='checkMark' />
            </div>

            <div className="divider" />

            <ul className='supportLinks'>
                <li><a href="#">Centar za pomoć</a></li>
                <li><a href="#">Korisnička podrška</a></li>
            </ul>

            <div className="divider" />

            <div className="user">
                <div className="userLinks">
                    <p>Jasmina Covic</p>
                    <span className="email">jasmina@orlando.com</span>
                </div>
                <button className="logout" onClick={handleLogout}>Izlogujte se</button>
            </div>
        </div>
  )
}
