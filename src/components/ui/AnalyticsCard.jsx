export default function AnalyticsCard ({heading, icon, children}) {
    return (
        <div className="analyticsCard">
            <div className="heading">
                <h3>{heading}</h3>
                    <a>
                        <img src={icon} alt={icon} />
                    </a>
            </div>
            {children}
        </div>
    )
}