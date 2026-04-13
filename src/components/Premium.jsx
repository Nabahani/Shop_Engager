import { useContext } from "react";
import PricingCard from "./PricingCard"
import { ProductContext } from "../context/ProductContext";

export default function Premium() {

    const { productCards } = useContext(ProductContext);

    const cardDetails = productCards();

    return (
        <section id="premium">
            <div className="container text-center">
                <div className="rated">
                    <i className="bi bi-lightning-charge"></i>
                    <span className="rated-span">PREMIUM NFC PRODUCTS
                    </span>
                </div>

                <h2 className="title">Our Premium Collection</h2>
                <p className="subtitle">Real-time inventory of our signature NFC collection.</p>

                <div className="pricing-container">
                    {
                        cardDetails.map((card) => (
                            <PricingCard card={card} key={card.key} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}