import '../../../styles/orderDetails.css'


export default function OrderCustomer({order}) {
    const displayValue = (value, fallback) => value && value !== 0 ? value : fallback
    //order.customer.name ? console.log(order.customer.name) : console.log('Unesi ime kupca');
    
    
    return(
        <div className="orderCustomer">
            <div className="customer_wrapp">
                <h4>Kupac</h4>
                <div className="customer">
                    <p className="customerText">{order.customer.name || 'Unesi ime kupca'}</p>
                    <p className="customerText">1 porudžbina</p>
                </div>
            </div>
            <div className="contact_details_wrapp">
                <h4>Kontakt detalji</h4>
                <div className="contact_details">
                    <p className="customerText">{order.customer.email || 'Unesi email'}</p>
                    <p className="customerText">{order.customer.phone ? `+${order.customer.phone}` : 'Unesi broj telefona'}</p>
                </div>
            </div>
            <div className="delivery_details_wrapp">
                <h4>Detalji za dostavu</h4>
                <div className="delivery_details">
                    <p className="customerText">{order.customer.name || 'Unesi ime kupca'}</p>
                    <p className="customerText">{order.customer.address || 'Unesi adresu'}</p>
                    <p className="customerText">{order.customer.city || 'Unesi postanski broj i grad'}</p>
                    <p className="customerText">{order.customer.country || 'Unesi drzavu'}</p>
                    <p className="customerText">{order.customer.phones || 'Unesi broj telefona'}</p>
                </div>
            </div>
        </div>
    )
}