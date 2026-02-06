import AnalyticsCard from '../ui/AnalyticsCard'
import promet from '../../assets/promet.svg'
import porudzbine from '../../assets/porudzbine.svg'
import posete from '../../assets/posete.svg'
import prosek from '../../assets/prosek.svg'
import bestseller from '../../assets/bestseller.svg'
import chart from '../../assets/chart.svg'

export default function AnalyticsCards () {
    return (
        <div className="analyticsCards">
            <AnalyticsCard heading={'Ukupan promet'} icon={promet}> 
                <span>RSD 0</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Broj porudzbina'} icon={porudzbine}>
                <span>0</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Procenat konverzija'} icon={chart}>
                <span>0%</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'Najprodavaniji proizvodi'} icon={bestseller}></AnalyticsCard>
            <AnalyticsCard heading={'Posete web stranici'} icon={posete}>
                <span>15</span>
            </AnalyticsCard>
            <AnalyticsCard heading={'AOV'} icon={prosek}>
                <span>0</span>
            </AnalyticsCard>
        </div>
    )
}