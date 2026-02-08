import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg'
import Avatar from '../../assets/avatar.svg'
import '../../styles/Header.css'
import UserInfo from '../ui/UserInfo'
import Modal from '../ui/Modal/Modal.jsx'

export default function Header(User) {
    User = "Butik Orlando"
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className='NavBar'>
            <Link to='/home' className='logo'><img src={Logo} alt="Logo" /></Link>
            <div className="avatar"  onClick={e => { e.stopPropagation(); setMenuOpen(prev => !prev)}}>
                <p>{User}</p>
                <a href="#" id='avatar'><img src={Avatar} alt="avatar" /></a>
            </div>
            {menuOpen && (
                <Modal onClose={() => setMenuOpen(false)} isOpen={menuOpen}>
                    <UserInfo />
                </Modal>
            )}
        </div>
    )
}