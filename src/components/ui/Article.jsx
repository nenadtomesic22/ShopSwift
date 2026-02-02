import '../../styles/orderDetails.css'
import article from '../../assets/article.png'

export default function Article({name,sku,price, quantity}) {
    let totalPrice = price*quantity;
    return (
        <div className="article">
            <div className="articleHeading">
                <img src={article} alt="" />
                <div className="col">
                    <h4>{name}</h4>
                    <p>SKU: {sku}</p>
                </div>
            </div>
            <div className="articlePricing">
                <p className='total'><span className='articlePrice'>RSD {price}</span><span className='quantity'> x {quantity} </span> RSD {totalPrice}</p>
            </div>
        </div>
    )
}