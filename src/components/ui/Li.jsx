export default function Li({id, href='text', className='text', icon, alt='text', li='text', onClick={onClick}, badge}) {    
    return(
        <li key={id} className={className} onClick={onClick}>
            <a href={href}>
                <img src={icon} alt={alt}></img>
                {li}
                {badge > 0 && <span className="badge">{badge}</span>}
            </a>
            
        </li>
    )
}