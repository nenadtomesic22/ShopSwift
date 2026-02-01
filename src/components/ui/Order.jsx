export default function Order({ id, date, customer, articles, total }) {
    return (
        <tr>
            <td>#{id}</td>
            <td>{date}</td>
            <td>{customer}</td>
            <td>{articles} artikla</td>
            <td>{total} RSD</td>
        </tr>
    )
}