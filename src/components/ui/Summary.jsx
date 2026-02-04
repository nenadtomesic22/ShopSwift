import '../../styles/orderDetails.css'
import method from '../../assets/method.svg'

export default function Summary({itemsCount, subtotal, delivery, showExtra = false}) {
    const pdv = subtotal * 0.2
    const total = subtotal + delivery
    return (
        <div className="orderSummary">
            <a className='method'><img src={method} alt="method"/>Plaćanje pouzećem</a>
            <div className="summaryCard">
                <div className="row">
                    <div className='label'>
                        <span>Predračun</span>
                        <span>{itemsCount} proizvoda</span>
                    </div>
                    <span className="price">RSD {subtotal.toFixed(2)}</span>
                </div>

                <div className="row">
                    <div className="label">
                        <span>Dostava</span>
                        <span>PostExpress Besplatna</span>
                    </div>
                    <span className="price">RSD {delivery.toFixed(2)}</span>
                </div>

                <div className="row">
                    <div className="label">
                        <span>PDV</span>
                        <span>20% (uračunato)</span>
                    </div>
                    <span className="price">RSD {pdv.toFixed(2)}</span>
                </div>

                <hr />

                <div className="row total">
                    <div className="label">
                        <span>Ukupno</span>
                        <span></span>
                    </div>
                    <span className="price">RSD {total.toFixed(2)}</span>
                </div>
            </div>
            {showExtra && <button id='confirm_order'>Potvrdi porudžbinu</button>}
        </div>
    )
}