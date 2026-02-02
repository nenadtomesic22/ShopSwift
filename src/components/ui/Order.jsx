import { useNavigate } from "react-router-dom";

export default function Order({ id, to, date, customer, articles, total }) {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(to)}>
                <td>#{id}</td>
                <td>{date}</td>
                <td>{customer}</td>
                <td>{articles} artikla</td>
                <td>{total} RSD</td>
        </tr>
    )
}