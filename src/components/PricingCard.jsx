export default function PricingCard({ card }) {

    return (
        <div className="pricing-card text-start h-100">
            {/* <i class={card.icon}></i> */}
            <div className="pricing-image-container">
                <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%" }} />
                <p className="hint-top">{card.hint}</p>
                <p className="click-bottom">
                    <i className={card.icon}></i>
                    {card.clicks}
                </p>
            </div>

            <div className="details-container">
                <p className="rating-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    (1,204)
                </p>
                <h4 className="pricing-title">{card.title}</h4>
                <p className="pricing-text">{card.text}</p>

                <div className="bottom-container">
                    <div className="prices">
                        <p className="big-price">&#8358;{card.discountPrice}</p>
                        <p className="small-price">&#8358;{card.normalPrice}</p>
                    </div>

                    <div className="text-center">
                        <button className="custom-button">
                            <i className="bi bi-cart2"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}