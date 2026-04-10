export default function Contact() {

    return (
        <section id="contact">
            <div className="container text-center">
                <div className="phone-mark">
                    <i class="bi bi-telephone"></i>
                    Get In Touch
                </div>

                <h2 className="title">Contact Us</h2>

                <p className="subheading">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                <div className="row g-5 mt-4 text-start justify-content-center">
                    <div className="col-11 col-lg-5">
                        <div className="address-container">
                            <h3 className="office-title">Our Office</h3>

                            <div className="info">
                                <div className="wrapper-container">
                                    <i class="bi bi-geo-alt green"></i>
                                    <div>
                                        <h5>Address</h5>
                                        <p>Yakasai Kano</p>
                                    </div>
                                </div>

                                <div className="wrapper-container">
                                    <i class="bi bi-envelope blue"></i>
                                    <div>
                                        <h5>Email</h5>
                                        <p>info@engager.tech</p>
                                    </div>
                                </div>

                                <div className="wrapper-container">
                                    <i class="bi bi-telephone red"></i>
                                    <div>
                                        <h5>Phone</h5>
                                        <p>+234 702 585 6080</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 col-lg-7">
                        <form className="form">
                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <div className="name-email">
                                        <label htmlFor="name" className="form-label">Name:</label>

                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <i class="bi bi-person person"></i>
                                            </div>
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-xl-6">
                                    <div className="name-email mt-4 mt-xl-0">
                                        <label htmlFor="email" className="form-label">Email:</label>

                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="message mt-4">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-control" placeholder="How can we help?" rows={4}></textarea>
                            </div>

                            <div className="text-center">
                                <button className="btn" type="submit">
                                    <i class="bi bi-send me-2"></i>
                                    Send Message
                                </button>

                                <p className="response">
                                    <span className="icon">✅</span>
                                    Message sent! We'll get back to you soon.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}