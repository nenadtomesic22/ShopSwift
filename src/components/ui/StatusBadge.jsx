export default function StatusBadge({status}) {
    const isDone = Boolean(status)
    return (
        <div className={`statusBadge ${isDone ? 'done' : 'pending'}`}>
            <span className="dot"></span>
            <p>{isDone ? 'Ispunjeno' : 'Neispunjeno'}</p>
        </div>
    )
}