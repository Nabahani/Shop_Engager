export default function Footer() {

    return (
        <section id="footer">
            <div className="container text-center text-md-start">
                <div className="row justify-content-between align-items-center top-footer">
                    <div className="col-11 col-md-3">
                        <div className="footer-container">
                            <h4 className="footer-title engager-title">engager.</h4>
                            <p className="footer-text">We create digital experiences for brands and companies by using technology.</p>
                        </div>
                    </div>

                    <div className="col-11 col-md-3 mt-5 mt-md-0">
                        <div className="footer-container">
                            <h4 className="footer-title">Main Links</h4>

                            <div className="footer-links">
                                <a href="#">Home</a>
                                <a href="#home">About</a>
                                <a href="#premium">Products</a>
                                <a href="#contact">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 col-md-3 mt-5 mt-md-0">
                        <div className="footer-container">
                            <h4 className="footer-title">Other Links</h4>

                            <div className="footer-links">
                                <a href="#setup">How To Get Started</a>
                                <a href="#setup">How It Works</a>
                                <a href="#home">Featured Clients</a>
                                <a href="#home">FAQs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-footer text-center text-md-start">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-6">
                            <div>
                                <a href="#setup">How It Works</a>
                                <a href="#home">FAQs</a>
                            </div>
                        </div>
                        <div className="col-11 col-md-6 mt-3 mt-md-0">
                            <div className="text-center text-md-end">
                                <span className="copyright">copyright &copy; 2026</span>
                                <span className="engager-span">Engager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}