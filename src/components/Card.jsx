export default function Card({ card }) {

    return (
        <div className="custom-card h-100">
            <h3 className="custom-card-number">{card.number}</h3>
            <h3 className="custom-card-title">{card.title}</h3>
            <p className="custom-card-description">{card.description}</p>
        </div>
    )
}