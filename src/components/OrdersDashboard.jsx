import OrdersStats from './dashboard/orders/OrdersStats'
import OrdersDashboardTable from './dashboard/orders/OrdersDashboardTable'

export default function OrdersDashboard() {
    return (
        <div className="dashboard_container">
            <OrdersStats />
            <OrdersDashboardTable />
        </div>
    )
}