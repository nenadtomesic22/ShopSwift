import {useState , useRef} from 'react'
import '../styles/AnalyticsDashboard.css'
import calendar from '../assets/calendar.svg'
import AnalyticsCards from './dashboard/analytics/AnalyticsCards.jsx'
import Popover from './ui/Popover/Popover.jsx'
import Filter from './dashboard/analytics/Filter.jsx'


export default function AnalyticsDashboard () {
    const buttonRef = useRef(null)
    
    return (
        <div className="analyticsDashboard">
            <div className="heading_row">
                <h3>Analitika</h3>
                <button id="filter" ref={buttonRef} popoverTarget="filterPopover" popoverTargetAction="click"><img src={calendar} alt="calendar" />Danas</button>
                <Popover id="filterPopover" triggerRef={buttonRef}>
                    <Filter />
                </Popover>
            </div>
            <AnalyticsCards />
        </div>
    )
}