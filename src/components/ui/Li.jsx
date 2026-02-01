import { Link } from "react-router-dom";

export default function Li({id, className='text', to='/', icon, alt='text', li='text', onClick={onClick}, badge}) {    
    return(
        <li key={id} className={className}>
            <Link to={to} onClick={onClick} className="li-link">
                <img src={icon} alt={alt} />
                {li}
                {badge > 0 && <span className="badge">{badge}</span>}
            </Link>
        </li>
    )
}