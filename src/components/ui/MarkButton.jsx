export default function MarkButton({orderStatus}) {
    if (orderStatus !== 'done' && orderStatus !== 'unDone') {
    return null;
  }
    return (
        <button className="markOrder">
            {orderStatus === 'done' ? 'Označi kao neispunjeno' : 'Označi kao ispunjeno'}
        </button>
    )
    
}

