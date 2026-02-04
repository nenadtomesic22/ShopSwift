import '../../styles/orderDetails.css'
import article from '../../assets/article.png'
import trashcan from '../../assets/trashcan.svg'

export default function Article({name,sku,price,quantity, showExtra = false, editable = false, onQuantityChange, onRemove}) {
    const safeQuantity = quantity ?? 1
    let total = price*safeQuantity
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
                {editable ? (
                    <>
                        <input type="number" min={1} value={safeQuantity} onChange={e => onQuantityChange?.(+e.target.value)} />
                        <div className="col">
                            <p className="total"> RSD {total.toFixed(2)}</p>
                            <button onClick={onRemove} className="remove"><img src={trashcan} alt="" /></button>
                        </div>
                    </>

                ) : (
                    
                    <p className='total'>{showExtra && <span className='articlePrice'>RSD {price.toFixed(2)}</span>}<span className='quantity'> x {safeQuantity} </span> RSD {total.toFixed(2)}</p>
                    
                )}
            </div>
        </div>
    )
}