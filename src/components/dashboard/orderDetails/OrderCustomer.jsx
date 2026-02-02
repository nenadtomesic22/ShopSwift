import '../../../styles/orderDetails.css'


export default function OrderCustomer() {
    return(
        <div className="orderCustomer">
            <div className="customer_wrapp">
                <h4>Kupac</h4>
                <div className="customer">
                    <p>Pedja Bulatiović</p>
                    <p>1 porudžbina</p>
                </div>
            </div>
            <div className="contact_details_wrapp">
                <h4>Kontakt detalji</h4>
                <div className="contact_details">
                    <p>valkary@gmail.com</p>
                    <p>+381643696560</p>
                </div>
            </div>
            <div className="delivery_details_wrapp">
                <h4>Detalji za dostavu</h4>
                <div className="delivery_details">
                    <p>Pedja Bulatiović</p>
                    <p>JNA 31</p>
                    <p>26220 Kovin</p>
                    <p>Srbija</p>
                    <p>+381643696560</p>
                </div>
            </div>
        </div>
    )
}