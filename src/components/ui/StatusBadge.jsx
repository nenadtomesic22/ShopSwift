import './StatusBadge.css'

export default function StatusBadge({status}) {
    const isDone = Boolean(status)
    return (
        <div className={`statusBadge ${isDone ? 'done' : 'pending'}`}>
            <span className="dot"></span>
            <p className="text">{isDone ? 'Ispunjeno' : 'Neispunjeno'}</p>
        </div>
    )
}