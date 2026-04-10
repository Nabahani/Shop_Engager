import Card from "./Card"

export default function SetUp() {
    const cardItems = [
        {
            number: 1,
            title: "Scan the QR code",
            description: "When you receive your premium Engager plate, simply scan the setup QR code."
        },
        {
            number: 2,
            title: "Activate it",
            description: "You'll be directed to our secure portal. Enter the unique activation code printed on the back to link your business."
        },
        {
            number: 3,
            title: "You're ready!",
            description: "Customers just tap their phone on the plate to instantly leave you 5-star Google Reviews. It's really that simple!"
        },
    ]

    return (
        <section id="setup">
            <div className="container">
                <h2 className="title">Set it up in 20 seconds</h2>
                <p className="subtitle">Get more Google reviews in just 3 steps. Unlimited use, guaranteed.</p>

                <div className="row justify-content-center g-5 mt-5">
                    {
                        cardItems.map((card) => (
                            <div className="col-11 col-lg-4" key={card.number}>
                                <Card card={card} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}