import { useState } from "react";
import Li from '../ui/Li.jsx'
import pocetna from '../../assets/pocetna.svg'
import porudzbine from '../../assets/porudzbine.svg'
import proizvodi from '../../assets/proizvodi.svg'
import analitika from '../../assets/analitika.svg'

export default function SideBar() {
    const [active, setActive] = useState("pocetna")
    
    const items = [
        {id: "pocetna", label: "Početna", icon: pocetna},
        {id: "porudzbine", label: "Porudžbine", icon: porudzbine, badge: 3},
        {id: "proizvodi", label: "Proizvodi", icon: proizvodi},
        {id: "analitika", label: "Analitika", icon: analitika},
    ];
    
    return (
        <div className="SideBar">
            <ul>
            {items.map(item => (
                <Li
                key={item.id}
                href="#"
                className={active === item.id ? "active" : ""}
                icon={item.icon}
                alt={item.id}
                li={item.label}
                onClick={() => setActive(item.id)}
                badge={item.badge}
                />
            ))}
            </ul>
        </div>
    )
}