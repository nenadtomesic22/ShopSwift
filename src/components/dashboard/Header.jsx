import {useState, useEffect , useRef} from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg'
import Avatar from '../../assets/avatar.svg'
import '../../styles/Header.css'
import UserInfo from '../ui/UserInfo'
import Popover from '../ui/Popover/Popover.jsx'

export default function Header(User) {
    User = "Butik Orlando"
    const avatarRef = useRef(null)


    return (
        <div className='NavBar'>
            <Link to='/home' className='logo'><img src={Logo} alt="Logo" /></Link>
            <button className="avatar" ref={avatarRef} popoverTarget="userPopover" popoverTargetAction="click">
                <p>{User}</p>
                <span id='avatar'><img src={Avatar} alt="avatar" /></span>
            </button>
            <Popover id='userPopover' triggerRef={avatarRef}>
                <UserInfo />
            </Popover>
        </div>
    )
}