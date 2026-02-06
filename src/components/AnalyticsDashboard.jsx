import '../styles/AnalyticsDashboard.css'
import calendar from '../assets/calendar.svg'
import AnalyticsCards from '../components/analytics/AnalyticsCards.jsx'


export default function AnalyticsDashboard () {
    return (
        <div className="analyticsDashboard">
            <div className="heading_row">
                <h3>Analitika</h3>
                <button id="filter"><img src={calendar} alt="calendar" />Danas</button>
            </div>
            <AnalyticsCards />
        </div>
    )
}