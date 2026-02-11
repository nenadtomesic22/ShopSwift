import AnalyticsCard from '../../ui/AnalyticsCard'
import promet from '../../../assets/promet.svg'
import porudzbine from '../../../assets/porudzbine.svg'
import posete from '../../../assets/posete.svg'
import prosek from '../../../assets/prosek.svg'
import bestseller from '../../../assets/bestseller.svg'
import chart from '../../../assets/chart.svg'
import ordersList from '../../../data/ordersList.js'
import articlesList from '../../../data/articlesList.js'

export default function AnalyticsCards () {
    const total = ordersList.reduce(
    (sum, order) => sum + order.total,
    0
    )
    
    function getSortedArticlesBySales(ordersList) {
        const counter = {};

        ordersList.forEach(order => {
            order.articles.forEach(item => {
            const id = item.id;
            const article = articlesList.find(a => a.id === id);
            if (!counter[id]) {
                counter[id] = {
                article_id: item.id,
                article: article,
                total: 0
                };
            }

            counter[id].total += item.quantity;
            });
        });

        return Object.values(counter)
            .sort((a, b) => b.total - a.total);
        }


    const sorteditems = getSortedArticlesBySales(ordersList);
    
    return (
        <div className="analyticsCards">
            <AnalyticsCard heading={'Ukupan promet'} icon={promet}> 
                <span>RSD {total.toFixed(2)}</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Broj porudzbina'} icon={porudzbine}>
                <span>{ordersList.length}</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Procenat konverzija'} icon={chart}>
                <span>0%</span>
                <ul className='conversions'>
                    <li>
                        <h4>Dodato u korpu</h4>
                        <div>
                            <span>0 puta</span>
                            <span>0.00%</span>
                        </div>
                    </li>
                    <li>
                        <h4>Stiglo do checkout-a</h4>
                        <div>
                            <span>0 puta</span>
                            <span>0.00%</span>
                        </div>
                    </li>
                    <li>
                        <h4>Obavilo porudzbinu</h4>
                        <div>
                            <span>0 puta</span>
                            <span>0.00%</span>
                        </div>
                    </li>
                </ul>
            </AnalyticsCard>
            <AnalyticsCard heading={'Najprodavaniji proizvodi'} icon={bestseller}>
                <ul className='bestseller'>
                    <li>
                        <a href="#">{sorteditems[0].article.name}</a>
                        <p>6</p>
                    </li>
                    <li>
                        <a href="#">{sorteditems[1].article.name}</a>
                        <p>3</p>
                    </li>
                    <li>
                        <a href="#">{sorteditems[2].article.name}</a>
                        <p>2</p>
                    </li>
                    <li>
                        <a href="#">{sorteditems[3].article.name}</a>
                        <p>1</p>
                    </li>
                    <li>
                        <a href="#">{sorteditems[4].article.name}</a>
                        <p>1</p>
                    </li>
                </ul>
            </AnalyticsCard>
            <AnalyticsCard heading={'Posete web stranici'} icon={posete}>
                <span>0</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'AOV'} icon={prosek}>
                <span>RSD {(total / ordersList.length).toFixed(2)}</span>
            </AnalyticsCard>
        </div>
    )
}