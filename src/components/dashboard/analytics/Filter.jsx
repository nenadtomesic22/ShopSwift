import './Filter.css'

export default function Filter() {
    return (
        <div className="filter">
            <ul>
                <li><a href="#">Danas</a></li>
                <li><a href="#">Juce</a></li>
            </ul>
            <ul>
                <li><a href="#">Ovaj mesec</a></li>
                <li><a href="#">Ova godina</a></li>
            </ul>
            <ul>
                <li><a href="#">Poslednjih 7 dana</a></li>
                <li><a href="#">Poslednjih 30 dana</a></li>
                <li><a href="#">Poslednjih 90 dana</a></li>
                <li><a href="#">Poslednjih 365 dana</a></li>
            </ul>
        </div>
    )
}