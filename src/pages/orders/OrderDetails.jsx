import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import backwardsArrow from '../../assets/backwards.svg'
import StatusBadge from '../../components/ui/StatusBadge';
import ordersList from '../../data/ordersList.js'
import CancelOrder from '../../components/ui/CancelOrder.jsx'
import OrderAction from '../../components/dashboard/orderDetails/OrderAction';
import OrderSummary from '../../components/dashboard/orderDetails/OrderSummary';
import OrderCustomer from '../../components/dashboard/orderDetails/OrderCustomer';
import '../../styles/orderDetails.css'

export default function OrderDetails() {
    const { orderId } = useParams()
    const navigate = useNavigate();
    const order = ordersList.find(order => order.id === Number(orderId));

    if (!order) return <NotFound />;

    return (
        <div className="orderDetails">
            <div className="orderHeadings">
                <div className="orderInfo">
                    <div className="row">
                        <img src={backwardsArrow} alt="arrow" onClick={() => navigate('/orders')}/>
                        <h3>#{orderId}</h3>
                        <StatusBadge status={order.status}></StatusBadge>
                    </div>
                    <p id='orderTime'>Vreme porudžbine: {order.date}</p>
                </div>
                
                <CancelOrder orderStatus={order.status}/>
            </div>
            <div className="orderGrid">
                <div className="left">
                    <OrderAction order={order}/>
                    <OrderSummary order={order}/>
                </div>
                <div className="right">
                    <OrderCustomer order={order}/>
                </div>
            </div>

        </div>
    )
}




