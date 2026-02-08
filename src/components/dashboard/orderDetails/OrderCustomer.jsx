import '../../../styles/orderDetails.css'


export default function OrderCustomer({order}) {
    const displayValue = (value, fallback) => value && value !== 0 ? value : fallback
    //order.customer.name ? console.log(order.customer.name) : console.log('Unesi ime kupca');
    
    
    return(
        <div className="orderCustomer">
            <div className="customer_wrapp">
                <h4>Kupac</h4>
                <div className="customer">
                    <p className="customerText">{order.customer?.name || 'Prazno'}</p>
                </div>
            </div>
            <div className="contact_details_wrapp">
                <h4>Kontakt detalji</h4>
                <div className="contact_details">
                    <p className="customerText">{order.customer?.email || 'Prazno'}</p>
                    {order.customer?.phone && (<p className="customerText">+{order.customer.phone}</p>)}
                </div>
            </div>
            <div className="delivery_details_wrapp">
                <h4>Detalji za dostavu</h4>
                <div className="delivery_details">
                    <p className="customerText">{order.customer.name || 'Prazno'}</p>
                    {order.customer?.address && (<p className="customerText">{order.customer.address}</p>)}
                    {order.customer?.city && (<p className="customerText">{order.customer.city}</p>)}
                    {order.customer?.country && (<p className="customerText">{order.customer.country}</p>)}
                    {order.customer?.phone && ( <p className="customerText">+{order.customer.phone}</p>)}
                </div>
            </div>
        </div>
    )
}