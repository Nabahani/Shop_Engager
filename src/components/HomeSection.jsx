export default function HomeSection() {

    return (
        <section id="home">
            <div className="container">
                <div className="page">
                    <div className="rated">
                        <i className="bi bi-star-fill"></i>
                        <span className="rated-span">TOP RATED NFC PRODUCT</span>
                    </div>

                    <div className="home-details">
                        <h1 className="home-title">
                            Double your monthly <br />
                            <span>Google Reviews</span>
                        </h1>
                        <p>One-time payment. No monthly fees. Collect reviews in 3 seconds and rank at the top of Google Searches effortlessly.</p>
                    </div>

                    <div className="custom-check-mark">
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-6">
                                <div className="check-mark">
                                    <i className="bi bi-check2-circle me-1"></i>
                                    30-Day Money-Back Guarantee
                                </div>
                            </div>
                            <div className="col-11 col-md-6">
                                <div className="check-mark">
                                    <i className="bi bi-check2-circle me-1"></i>
                                    Free Worldwide Shipping
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}