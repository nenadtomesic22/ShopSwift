import AnalyticsCard from '../../ui/AnalyticsCard'
import promet from '../../../assets/promet.svg'
import porudzbine from '../../../assets/porudzbine.svg'
import posete from '../../../assets/posete.svg'
import prosek from '../../../assets/prosek.svg'
import bestseller from '../../../assets/bestseller.svg'
import chart from '../../../assets/chart.svg'

export default function AnalyticsCards () {
    return (
        <div className="analyticsCards">
            <AnalyticsCard heading={'Ukupan promet'} icon={promet}> 
                <span>RSD 0.00</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Broj porudzbina'} icon={porudzbine}>
                <span>0</span>
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
                        <a href="#">ime-proizvoda-1</a>
                        <p>6</p>
                    </li>
                    <li>
                        <a href="#">ime-proizvoda-2</a>
                        <p>3</p>
                    </li>
                    <li>
                        <a href="#">ime-proizvoda-3</a>
                        <p>2</p>
                    </li>
                    <li>
                        <a href="#">ime-proizvoda-4</a>
                        <p>1</p>
                    </li>
                    <li>
                        <a href="#">ime-proizvoda-5</a>
                        <p>1</p>
                    </li>
                </ul>
            </AnalyticsCard>
            <AnalyticsCard heading={'Posete web stranici'} icon={posete}>
                <span>15</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'AOV'} icon={prosek}>
                <span>0</span>
            </AnalyticsCard>
        </div>
    )
}