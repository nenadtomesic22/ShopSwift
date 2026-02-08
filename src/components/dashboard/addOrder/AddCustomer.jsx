import './AddCustomer.css'

export default function AddCustomer () {
    return (
        <form action="" className="addCustomer">
            <h3>Detalji kupca</h3>
            <div className="row">
                <label htmlFor="name">Ime
                    <input type="text" id="name" placeholder="Unesite ime"/>
                </label>
                <label htmlFor="lastname">Prezime
                    <input type="text" id="lastname" placeholder="Unesite prezime"/>
                </label>
            </div>
            <h3>Detalji kupca</h3>
            <div className="row">
                <label htmlFor="email">Email adresa
                    <input type="email" id="email" placeholder="Unesite email"/>
                </label>
                <label htmlFor="phone">Broj telefona
                    <input type="number" id="phone" placeholder="Unesite broj telefona"/>
                </label>
            </div>
            <h3>Detalji za dostavu</h3>
            <div className="row">
                <label htmlFor="street">Ulica
                    <input type="text" id="street" placeholder="Unesite ulicu"/>
                </label>
                <label htmlFor="city">Grad
                    <input type="text" id="city" placeholder="Unesite grad"/>
                </label>
            </div>
            <div className="row">
                <label htmlFor="postal">Postanski broj
                    <input type="number" id="postal" placeholder="Unesite postanski broj"/>
                </label>
                <label htmlFor="deliveryNumber">Broj za dostavu
                    <input type="number" id="deliveryNumber" placeholder="Unesite broj za dostavu"/>
                </label>
            </div>
        </form>
    )
}