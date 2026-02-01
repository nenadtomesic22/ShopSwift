import './dashboard.css'
import Order from '../../ui/Order'

export default function OrdersTable() {
    let badge = 3
    const orders = [
        { id:1002, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1003, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1004, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1005, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1006, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1007, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1008, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1009, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1010, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1011, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1012, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1013, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1014, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1015, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1016, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:1017, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10018, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10019, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10020, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10021, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10022, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10023, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10024, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'},
        { id:10025, date:'Sre, 31.01.2024 u 10:20', customer:'Nenad Tomešić', articles: 3, total:'3,793.99'}
    ]
    return (
        <div className="ordersTable">
            <h3>Porudžbine za ispuniti <span className='badge'>{badge}</span></h3>
            <div className="card">
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
        </div>
        </div>
    )
}