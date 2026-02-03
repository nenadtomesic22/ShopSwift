import Summary from '../../ui/Summary'
import articles from '../../../data/articlesList.js'

export default function OrderSummary({order}) {
    const itemsCount = order.articles.reduce(
    (sum, item) => sum + item.quantity,
    0
    )
    
    let subtotal = 0;
    
    {order.articles.map(orderItem => {
        const article = articles.find(a => a.id === orderItem.id)
        subtotal = subtotal + article.price * orderItem.quantity;
        if (!article) return null
    })}
    
    return (
        <Summary
            key={order.id}
            itemsCount={itemsCount}
            subtotal={subtotal}
            delivery={order.delivery}
        />
    )
}