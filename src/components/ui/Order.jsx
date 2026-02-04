import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function Order({ id, to, date, customer, articles = [], total, status, delivery, showExtra = false}) {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`${to}/${id}`)}>
                <td>#{id}</td>
                <td>{date}</td>
                <td>{customer.name}</td>
                <td>{articles.length} artikla</td>
                <td>{total} RSD</td>
                {showExtra && <td>{<StatusBadge status={status}/>}</td>}
                {showExtra && <td>{delivery === 0 ? 'PostExpress Besplatna' : `${delivery} RSD`}</td>}
        </tr>
    )
}