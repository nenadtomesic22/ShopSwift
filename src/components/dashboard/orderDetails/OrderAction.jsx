import '../../../styles/orderDetails.css'
import articles from '../../../data/articlesList'
import Article from '../../ui/Article'

export default function OrderAction({order}) {
    if (!order) return <NotFound />;

        return (
            <div className="orderAction">
                <div className="articles">
                    {order.articles.map(orderItem => {
                        const article = articles.find(a => a.id === orderItem.id)
                        if (!article) return null

                        return (
                            <Article
                                key={article.id}
                                {...article}
                                quantity={orderItem.quantity}
                            />
                        )
                    })}
                </div>
                <button className="markOrder">Ispuni porudžbinu</button>
            </div>
        )
}
