import './StatusBadge.css'

export default function StatusBadge({status}) {
    console.log(status);
    
    
    
    const getStatusText = (status) => {
        switch (status) {
            case 'done':
                return 'Ispunjeno';
            case 'unDone':
                return 'Neispunjeno';
            case 'canceled':
                return 'Otkazano';
            default:
                return 'Nepoznato';
        }
    };
    console.log(getStatusText());
    return (
        <div className={`statusBadge ${status}`}>
            <span className="dot"></span>
            <p className="text">{getStatusText(status)}</p>
        </div>
    )
}