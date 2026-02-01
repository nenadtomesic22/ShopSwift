import StatsCard from '../dashboard/dashboard-components/StatsCard'
import OrdersTable from '../dashboard/dashboard-components/OrdersTable'

export default function Dashboard() {
    return (
        <div className="dashboard_container">
            <StatsCard />
            <OrdersTable />
        </div>
    )
}