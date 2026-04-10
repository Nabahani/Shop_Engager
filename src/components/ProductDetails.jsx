export default function ProductDetails() {

    return (
        <section id="product-details">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="three-js">
                            Hello
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 text-center text-lg-start order-1 order-lg-2">
                        <div>
                            <h2 className="title">Product Details</h2>

                            <div className="product-container">
                                <div className="flex-container">
                                    <div>
                                        <i className="bi bi-box"></i>
                                    </div>

                                    <div className="subtitle">
                                        <h4>High-Quality Plexiglass</h4>
                                        <p>Dimensions: 4.7" x 4.7" (12x12cm), Thickness: 0.1" (3mm). Crystal clear glossy finish that looks incredible in any store or salon.</p>
                                    </div>
                                </div>

                                <div className="flex-container">
                                    <div>
                                        <i className="bi bi-phone second"></i>
                                    </div>

                                    <div className="subtitle">
                                        <h4>NFC Built-In</h4>
                                        <p>Equipped with the latest contactless NFC technology. Note: Mounting directly onto thick metal surfaces may interfere with the NFC waves.</p>
                                    </div>
                                </div>

                                <div className="flex-container">
                                    <div>
                                        <i className="bi bi-check2-square third"></i>
                                    </div>

                                    <div className="subtitle">
                                        <h4>Easy Mounting</h4>
                                        <p>Supplied with strong double-sided adhesive located on the back for immediate placement on a counter stand, wall, or window.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}