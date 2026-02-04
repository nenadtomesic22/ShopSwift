import NotFound from '../../../pages/NotFound'
import '../../../styles/orderDetails.css'
import articles from '../../../data/articlesList'
import Article from '../../ui/Article'
import MarkButton from '../../ui/MarkButton';

export default function OrderAction({order}) {
    
    if (!order || !order.articles) return <NotFound />
    
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
                                showExtra
                            />
                        )
                    })}
                </div>
                <MarkButton orderStatus={order.status}/>
            </div>
        )
}
