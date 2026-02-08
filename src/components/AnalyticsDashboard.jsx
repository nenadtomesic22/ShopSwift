import {useState} from 'react'
import '../styles/AnalyticsDashboard.css'
import calendar from '../assets/calendar.svg'
import AnalyticsCards from './dashboard/analytics/AnalyticsCards.jsx'
import Modal from './ui/Modal/Modal.jsx'
import Filter from './dashboard/analytics/Filter.jsx'


export default function AnalyticsDashboard () {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="analyticsDashboard">
            <div className="heading_row">
                <h3>Analitika</h3>
                <button id="filter" onClick={e => { e.stopPropagation(); setIsOpen(prev => !prev)}}><img src={calendar} alt="calendar" />Danas</button>
                {isOpen && (
                    <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                        <Filter />
                    </Modal>
                )}
            </div>
            <AnalyticsCards />
        </div>
    )
}