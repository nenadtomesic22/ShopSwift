import '../../styles/orderDetails.css'
import article from '../../assets/article.png'

export default function Article() {
    return (
        <div className="article">
            <div className="articleHeading">
                <img src={article} alt="" />
                <div className="col">
                    <h4>CUGOPOL - Set katica</h4>
                    <p>SKU: 0232</p>
                </div>
            </div>
            <div className="articlePricing">
                <p className='total'><span className='articlePrice'>RSD 790</span><span className='quantity'> x 1 </span> RSD 790</p>
            </div>
        </div>
    )
}