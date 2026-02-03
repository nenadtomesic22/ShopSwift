import StatsCard from '../dashboard/dashboard-components/StatsCard'
import OrdersTable from '../dashboard/dashboard-components/OrdersTable'
import ordersList from '../../data/ordersList.js'

export default function Dashboard({badge = 0}) {
    ordersList.map(orderItem => {
        orderItem.status === false ? badge+= 1 : badge+= 0;
    }); 
    
    return (
        <div className="dashboard_container">
            <StatsCard/>
            <OrdersTable badge={badge}/>
        </div>
    )
}