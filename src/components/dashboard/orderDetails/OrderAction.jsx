import { useParams } from 'react-router-dom'
import '../../../styles/orderDetails.css'
import articles from '../../../data/articlesList'
import ordersList from '../../../data/ordersList.js'
import Article from '../../ui/Article'

export default function orderAction() {
    const { orderId } = useParams()
    const order = ordersList.find(order => order.id === Number(orderId));

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
