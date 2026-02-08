import '../../../styles/orderDetails.css'
import unesi from '../../../assets/unesi.svg'
import { useRef } from 'react'
import Modal from '../../ui/Modal/Modal'
import AddCustomer from '../addOrder/AddCustomer.jsx'


export default function OrderCustomer({order}) {
    const addCustomerRef = useRef(null)
    
    
    return(
        <div className="orderCustomer">
            <div className="customer_wrapp">
                <div className="heading_row">
                    <h4>Kupac</h4>
                    {!order.customer.name && <button onClick={() => addCustomerRef.current?.showModal()}>Unesi<img src={unesi} alt="unesi"/></button>}
                    <Modal id='addCustomerPopover' modalRef={addCustomerRef}>
                        <AddCustomer />
                    </Modal>
                </div>
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