import '../../../styles/OrdersDashboard.css'
import { Link } from 'react-router-dom'
import ordersList from '../../../data/ordersList.js'
import React from 'react'

export default function OrdersStats() {
    const status = ordersList.reduce((acc, order) => {
        order.status === 'unDone' ? acc.unDone++ : acc.done++
        acc.totalArticles += order.articles.length
        return acc
    },
    { unDone: 0, done: 0, totalArticles: 0 }
    );
    return (
        <div className="ordersStats">
            <div className="stats_row">
                <h3>Porudžbine</h3>
                <Link to='/orders/add_order' id='create_order'>Kreiraj porudžbinu</Link>
            </div>
            <div className="stats_row card">
                <div className="stats_col">
                    <p>Broj porudžbina</p>
                    <span id='totalOrders'>{ordersList.length}</span>
                </div>
                <div className="stats_col">
                    <p>Broj poručenih artikala</p>
                    <span id='totalArticles'>{status.totalArticles}</span>
                </div>
                <div className="stats_col">
                    <p>Ispunjene porudžbine</p>
                    <span id='doneOrders'>{status.done}</span>
                </div>
                <div className="stats_col">
                    <p>Neispunjene porudžbine</p>
                    <span id='unDoneOrders'>{status.unDone}</span>
                </div>
                <div className="stats_col">
                    <p>Vraćene porudžbine</p>
                    <span id='returnedOrders'>0</span>
                </div>
            </div>
        </div>
    )
}