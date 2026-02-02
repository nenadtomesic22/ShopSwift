import '../../../styles/orderDetails.css'

import Article from '../../ui/Article'

export default function orderAction() {
    return(
        <div className="orderAction">
            <div className="articles">
                <Article />
                <Article />
                <Article />
            </div>
            <button className="markOrder">Ispuni porudžbinu</button>
        </div>
    )
}