import '../../../styles/OrdersDashboard.css'
import Order from '../../ui/Order'
import ordersList from '../../../data/ordersList.js'

export default function OrdersDashboardTable() {

    return (
        <div className="ordersDashboardTable">
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
                                <th>Status porudžbine</th>
                                <th>Način dostave</th>
                            </tr>
                            </thead>

                            <tbody>
                            {ordersList.map(order => (
                                <Order key={order.id} {...order} showExtra/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}