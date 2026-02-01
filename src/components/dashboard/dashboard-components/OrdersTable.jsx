import './dashboard.css'

export default function OrdersTable() {
    let badge = 3
    return (
        <div className="ordersTable">
            <h3>Porudžbine za ispuniti <span className='badge'>{badge}</span></h3>
            <div className="card">
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
            <tr>
                <td>#1002</td>
                <td>Sre, 31.01.2024 u 10:20</td>
                <td>Nenad Tomešić</td>
                <td>3 artikla</td>
                <td>3,793.99 RSD</td>
            </tr>
            <tr>
                <td>#1002</td>
                <td>Sre, 31.01.2024 u 10:20</td>
                <td>Nenad Tomešić</td>
                <td>3 artikla</td>
                <td>3,793.99 RSD</td>
            </tr>
            <tr>
                <td>#1002</td>
                <td>Sre, 31.01.2024 u 10:20</td>
                <td>Nenad Tomešić</td>
                <td>3 artikla</td>
                <td>3,793.99 RSD</td>
            </tr>
            <tr>
                <td>#1002</td>
                <td>Sre, 31.01.2024 u 10:20</td>
                <td>Nenad Tomešić</td>
                <td>3 artikla</td>
                <td>3,793.99 RSD</td>
            </tr>
            <tr>
                <td>#1002</td>
                <td>Sre, 31.01.2024 u 10:20</td>
                <td>Nenad Tomešić</td>
                <td>3 artikla</td>
                <td>3,793.99 RSD</td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>
    )
}