export default function CreateButton({orderStatus = false}) {
    
    return (
        <button className="createOrder">
            {orderStatus ? 'Označi kao neispunjeno' : 'Označi kao ispunjeno'}
        </button>
    )
    
}