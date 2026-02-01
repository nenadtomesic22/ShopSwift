import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg'
import Avatar from '../../assets/avatar.svg'
import '../../styles/Header.css'
import UserInfo from '../ui/UserInfo'

export default function Header(User) {
    User = "Butik Orlando"
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, []);


    return (
        <div className='NavBar'>
            <img src={Logo} alt="Logo" onClick={e => {<Link to='/login' />}} />
            <div className="avatar"  onClick={e => { e.stopPropagation(); setMenuOpen(prev => !prev)}}>
                <p>{User}</p>
                <a href="#" id='avatar'><img src={Avatar} alt="avatar" /></a>
            </div>
            <UserInfo isOpen={menuOpen} />
        </div>
    )
}