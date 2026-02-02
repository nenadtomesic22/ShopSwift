import '../../../styles/OrdersDashboard.css'
import React from 'react'

export default function OrdersStats() {
    return (
        <div className="ordersStats">
            <div className="stats_row">
                <h3>Porudžbine</h3>
                <button id='create_order'>Kreiraj porudžbinu</button>
            </div>
            <div className="stats_row card">
                <div className="stats_col">
                    <p>Broj porudžbina</p>
                    <span id='visits'>0</span>
                </div>
                <div className="stats_col">
                    <p>Broj poručenih artikala</p>
                    <span id='traffic'>0</span>
                </div>
                <div className="stats_col">
                    <p>Ispunjene porudžbine</p>
                    <span id='sales'>0</span>
                </div>
                <div className="stats_col">
                    <p>Neispunjene porudžbine</p>
                    <span id='conversion'>0</span>
                </div>
                <div className="stats_col">
                    <p>Vraćene porudžbine</p>
                    <span id='conversion'>0</span>
                </div>
            </div>
        </div>
    )
}