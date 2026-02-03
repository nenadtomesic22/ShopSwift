import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import backwardsArrow from '../../assets/backwards.svg'
import StatusBadge from '../../components/ui/StatusBadge';
import ordersList from '../../data/ordersList.js'
import articles from '../../data/articlesList.js'
import OrderAction from '../../components/dashboard/orderDetails/OrderAction';
import OrderSummary from '../../components/dashboard/orderDetails/OrderSummary';
import OrderCustomer from '../../components/dashboard/orderDetails/OrderCustomer';
import '../../styles/orderDetails.css'

export default function OrderDetails() {
    
    const navigate = useNavigate();
    

    

    return (
        <div className="orderDetails">
            <div className="orderHeadings">
                <div className="orderInfo">
                    <div className="row">
                        <img src={backwardsArrow} alt="arrow" onClick={() => navigate('/orders')}/>
                        <h3>#</h3>
                        
                    </div>
                    <p id='orderTime'>Vreme porudžbine: </p>
                </div>
                
                <button className="remove">Obriši</button>
            </div>
            <div className="orderGrid">
                <div className="left">
                    
                    
                </div>
                <div className="right">
                    
                </div>
            </div>

        </div>
    )
}




