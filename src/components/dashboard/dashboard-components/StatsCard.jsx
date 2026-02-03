import './dashboard.css'
import React from 'react'
import DateTime from '../../ui/DateTime'
import ordersList from '../../../data/ordersList.js'

export default function StatsCard() {
    return (
        <div className="statsCard">
            <div className="stats_row">
                <DateTime />
                <div className="welcome">
                    <span>Dobrodošli,</span>
                    <p id='user'>Jasmina</p>
                </div>
            </div>
            <div className="stats_row card">
                <div className="stats_col">
                    <p>Posete web prodavnici</p>
                    <span id='visits'>0</span>
                </div>
                <div className="stats_col">
                    <p>Današnji promet</p>
                    <span id='traffic'>RSD 0.00</span>
                </div>
                <div className="stats_col">
                    <p>Broj porudžbina</p>
                    <span id='sales'>{ordersList.length}</span>
                </div>
                <div className="stats_col">
                    <p>Procenat konverzija</p>
                    <span id='conversion'>0%</span>
                </div>
            </div>
        </div>
    )
}