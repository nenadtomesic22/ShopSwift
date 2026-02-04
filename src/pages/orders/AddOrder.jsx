import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import backwardsArrow from '../../assets/backwards.svg'
import OrderProductsSection from '../../components/dashboard/addOrder/OrderProductsSection';
import OrderSummary from '../../components/dashboard/orderDetails/OrderSummary';
import OrderCustomer from '../../components/dashboard/orderDetails/OrderCustomer';
import '../../styles/orderDetails.css'
import {createEmptyOrder} from '../../data/orderTemplate'

export default function OrderDetails() {
    const navigate = useNavigate();
    const order = createEmptyOrder();
    
    
    

    return (
        <div className="orderDetails">
            <div className="orderHeadings">
                <div className="orderInfo">
                    <div className="row">
                        <img src={backwardsArrow} alt="arrow" onClick={() => navigate('/orders')}/>
                        <h3>Kreiraj porudzbinu</h3>
                        
                    </div>
                </div>
            </div>
            <div className="orderGrid">
                <div className="left">
                    <OrderProductsSection/>
                    <OrderSummary order={order} showExtra/>
                </div>
                <div className="right">
                    <OrderCustomer order={order}/>
                </div>
            </div>

        </div>
    )
}




