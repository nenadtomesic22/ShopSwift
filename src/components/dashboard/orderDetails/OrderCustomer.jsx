import '../../../styles/orderDetails.css'


export default function OrderCustomer({order}) {
    return(
        <div className="orderCustomer">
            <div className="customer_wrapp">
                <h4>Kupac</h4>
                <div className="customer">
                    <p className="customerText">{order.customer}</p>
                    <p className="customerText">1 porudžbina</p>
                </div>
            </div>
            <div className="contact_details_wrapp">
                <h4>Kontakt detalji</h4>
                <div className="contact_details">
                    <p className="customerText">valkary@gmail.com</p>
                    <p className="customerText">+381643696560</p>
                </div>
            </div>
            <div className="delivery_details_wrapp">
                <h4>Detalji za dostavu</h4>
                <div className="delivery_details">
                    <p className="customerText">Pedja Bulatiović</p>
                    <p className="customerText">JNA 31</p>
                    <p className="customerText">26220 Kovin</p>
                    <p className="customerText">Srbija</p>
                    <p className="customerText">+381643696560</p>
                </div>
            </div>
        </div>
    )
}