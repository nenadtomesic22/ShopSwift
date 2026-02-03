export default function MarkButton({orderStatus = false}) {
    
    return (
        <button className="markOrder">
            {orderStatus ? 'Označi kao neispunjeno' : 'Označi kao ispunjeno'}
        </button>
    )
    
}