export default function CancelOrder({orderStatus}) {
    if (orderStatus !== 'done' && orderStatus !== 'unDone') {
    return null;
  }
    return (
        <button className="delete">Otkaži porudžbinu</button>
    )
    
}

