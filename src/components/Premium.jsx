import { useState } from "react"
import PricingCard from "./PricingCard"

export default function Premium() {

    const cardDetails = [
        {
            hint: "Most Popular",
            image: "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvY2tldHxlbnwwfHwwfHx8MA%3D%3D",
            clicks: "17 clicks",
            title: "NFC Stand",
            text: "A premium freestanding NFC stand for your counter.",
            discountPrice: "39,000",
            normalPrice: "69,000",
            key: 1,
            icon: "bi bi-eye"
        },
        {
            hint: "Best Value",
            image: "https://plus.unsplash.com/premium_vector-1714618826963-d90a5121c622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHRuaW5nfGVufDB8fDB8fHww",
            clicks: "15 clicks",
            title: "NFC Business Card",
            text: "Pocket-sized & powerful. Share your profile with a tap.",
            discountPrice: "29,000",
            normalPrice: "49,000",
            key: 2,
            icon: "bi bi-eye"
        },
        {
            hint: "New Arrival",
            image: "https://plus.unsplash.com/premium_vector-1720571463076-ed090258d4a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhbW9uZHxlbnwwfHwwfHx8MA%3D%3D",
            clicks: "10 clicks",
            title: "NFC Plate",
            text: "A slim, premium plate to mount anywhere.",
            discountPrice: "49,000",
            normalPrice: "89,000",
            key: 3,
            icon: "bi bi-eye"
        },
    ];

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