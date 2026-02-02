import { useState } from "react";
import Li from '../ui/Li.jsx'
import pocetna from '../../assets/pocetna.svg'
import porudzbine from '../../assets/porudzbine.svg'
import proizvodi from '../../assets/proizvodi.svg'
import analitika from '../../assets/analitika.svg'
import settings from "../../assets/settings.svg";
import ordersList from '../../data/ordersList.js'

export default function SideBar() {
    const [active, setActive] = useState("pocetna")
    let badge = ordersList.length
    
    const items = [
        {id: "pocetna", label: "Početna", icon: pocetna, to: '/home'},
        {id: "porudzbine", label: "Porudžbine", icon: porudzbine, to: '/orders', badge: badge},
        {id: "proizvodi", label: "Proizvodi", icon: proizvodi, to: '/home'},
        {id: "analitika", label: "Analitika", icon: analitika, to: '/home'},
    ];
    
    return (
        <div className="SideBar">
            <ul>
            {items.map(item => (
                <Li
                key={item.id}
                to={item.to}
                className={active === item.id ? "active" : ""}
                icon={item.icon}
                alt={item.id}
                li={item.label}
                onClick={() => setActive(item.id)}
                badge={item.badge}
                />
            ))}
            </ul>
            <a href="#" className="settings"><img src={settings} alt="settings" />Podesavanja</a>
        </div>
    )
}