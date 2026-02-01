import { Link } from "react-router-dom";

export default function Li({id, className='text', to='/', icon, alt='text', li='text', onClick={onClick}, badge}) {    
    return(
        <li key={id} className={className} onClick={onClick}>
            <Link to={to}>
                <img src={icon} alt={alt}></img>
                {li}
                {badge > 0 && <span className="badge">{badge}</span>}
            </Link>
        </li>
    )
}