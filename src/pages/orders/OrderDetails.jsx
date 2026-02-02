import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import backwardsArrow from '../../assets/backwards.svg'
import StatusBadge from '../../components/ui/StatusBadge';
import ordersList from '../../data/ordersList.js'
import articles from '../../data/articlesList.js'
import OrderAction from '../../components/dashboard/orderDetails/OrderAction';
import OrderCustomer from '../../components/dashboard/orderDetails/OrderCustomer';
import '../../styles/orderDetails.css'

export default function OrderDetails() {
    const { orderId } = useParams()
    const navigate = useNavigate();
    const order = ordersList.find(order => order.id === Number(orderId));

    if (!order) return <NotFound />;

    const orderArticles = order.articles.map(orderItem => {
  const article = articles.find(a => a.id === orderItem.id);
  return {
    ...article,
    quantity: orderItem.quantity
  };
});
console.log(orderArticles[0]);


    
    

    return (
        <div className="orderDetails">
            <div className="orderHeadings">
                <div className="orderInfo">
                    <div className="row">
                        <img src={backwardsArrow} alt="arrow" onClick={() => navigate('/orders')}/>
                        <h3>#{orderId}</h3>
                        <StatusBadge status={order.status}></StatusBadge>
                    </div>
                    <p>Poslednje ažuriranje: Sreda 31.01.2024 u 10:20</p>
                </div>
                
                <button className="remove">Obriši</button>
            </div>
            <div className="orderGrid">
                <div className="left">
                    <OrderAction />
                </div>
                <div className="right">
                    <OrderCustomer />
                </div>
            </div>

        </div>
    )
}




