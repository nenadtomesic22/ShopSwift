import '../../styles/orderDetails.css'
import method from '../../assets/method.svg'

export default function Summary({itemsCount, subtotal}) {
    const pdv = subtotal * 0.2
    const delivery = 0
    const total = subtotal + pdv + delivery
    return (
        <div className="orderSummary">
            <a className='method'><img src={method} alt="method"/>Plaćanje pouzećem</a>
            <div className="summaryCard">
                <div className="row">
                    <div className='label'>
                        <span>Predračun</span>
                        <span>{itemsCount} proizvoda</span>
                    </div>
                    <span className="price">RSD {subtotal}</span>
                </div>

                <div className="row">
                    <div className="label">
                        <span>Dostava</span>
                        <span>PostExpress Besplatna</span>
                    </div>
                    <span className="price">RSD {delivery}</span>
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
        </div>
    )
}