import '../../../styles/orderDetails.css'
import method from '../../../assets/method.svg'

export default function OrderSummary() {
    return (
        <div className="orderSummary">
            <a className='method'><img src={method} alt="method"/>Plaćanje pouzećem</a>
            <div className="summaryCard">
                <div className="row">
                    <div className='label'>
                        <span>Predračun</span>
                        <span>2 proizvoda</span>
                    </div>
                    <span class="price">RSD 2,785.00</span>
                </div>

                <div className="row">
                    <div className="label">
                        <span>Dostava</span>
                        <span>PostExpress Besplatna</span>
                    </div>
                    <span className="price">RSD 0.00</span>
                </div>

                <div className="row">
                    <div className="label">
                        <span>PDV</span>
                        <span>20% (uračunato)</span>
                    </div>
                    <span className="price">RSD 131.50</span>
                </div>

                <hr />

                <div className="row total">
                    <div className="label">
                        <span>Ukupno</span>
                        <span></span>
                    </div>
                    <span className="price">RSD 2,785.00</span>
                </div>
                </div>
        </div>
    )
}