import './dashboard.css'
import Order from '../../ui/Order'

export default function OrdersTable() {
    let badge = 3
    const orders = [
        { id:1002, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1003, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1004, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1005, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1006, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1007, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1008, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1009, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1010, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1011, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1012, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1013, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1014, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1015, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1016, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1017, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10018, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10019, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10020, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10021, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10022, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10023, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10024, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10025, to:'#', date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'}
    ]
    return (
        <div className="ordersTable">
            <h3>Porudžbine za ispuniti <span className='badge'>{badge}</span></h3>
            <div className="card">
                {orders.length === 0 ? (
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
                            {orders.map(order => (
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