import { NavLink } from "react-router-dom";

export default function Li({id, to='/', icon, alt='text', li='text', badge}) {    
    return(
        <li key={id}>
            <NavLink to={to} className={({ isActive }) => isActive ? "li-link active" : "li-link"}>
                <img src={icon} alt={alt} />
                {li}
                {badge > 0 && <span className="badge">{badge}</span>}
            </NavLink>
        </li>
    )
}