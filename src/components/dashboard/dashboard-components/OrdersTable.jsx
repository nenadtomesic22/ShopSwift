import './dashboard.css'
import Order from '../../ui/Order'
import ordersList from '../../../data/ordersList.js'

export default function OrdersTable() {
    
    let badge = ordersList.length

    return (
        <div className="ordersTable">
            
            <h3>Porudžbine za ispuniti <span className='badge'>{badge}</span></h3>
            <div className="card">
                {ordersList.length === 0 ? (
                    <p className="emptyState">Trenutno nema porudžbina!</p>
                ) : (
                    <div className="table-wrapper">
                        <table>
                            <thead>
                            <tr>
                                <th>Porudžbina</th>
                                <th>Vreme</th>
                                <th>Kupac</th>
                                <th>Broj artikala</th>
                                <th>Ukupno</th>
                            </tr>
                            </thead>

                            <tbody>
                            {ordersList.map(order => (
                                <Order key={order.id} {...order} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}