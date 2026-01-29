export default function Input({icon, alt='text', type='text', value, onChange, placeholder}) {
    return(
        <div className="inputWrapper">
        
            <span className="input-icon">
                <img src={icon} alt={alt}></img>
            </span>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}