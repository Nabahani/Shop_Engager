import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function saveMessage(data) {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];

        if (data) {
            messages.push(data);
            localStorage.setItem("messages", JSON.stringify(messages));

            const successEl = document.querySelector(".success-response");
            successEl.style.display = "block";
            return;
        }
    }

    function clearForm() {
        const nameInputEl = document.getElementById("name");
        const emailInputEl = document.getElementById("email");
        const textareaEl = document.getElementById("message");

        nameInputEl.value = "";
        emailInputEl.value = "";
        textareaEl.value = "";
    }

    function onSubmit(data) {
        saveMessage(data);
        clearForm();
    }

    return (
        <section id="contact">
            <div className="container text-center">
                <div className="phone-mark">
                    <i className="bi bi-telephone"></i>
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
                                    <i className="bi bi-geo-alt green"></i>
                                    <div>
                                        <h5>Address</h5>
                                        <p>Yakasai Kano</p>
                                    </div>
                                </div>

                                <div className="wrapper-container">
                                    <i className="bi bi-envelope blue"></i>
                                    <div>
                                        <h5>Email</h5>
                                        <p>info@engager.tech</p>
                                    </div>
                                </div>

                                <div className="wrapper-container">
                                    <i className="bi bi-telephone red"></i>
                                    <div>
                                        <h5>Phone</h5>
                                        <p>+234 702 585 6080</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 col-lg-7">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-12 col-xl-6">
                                    <div className="name-email">
                                        <label htmlFor="name" className="form-label">Name:</label>

                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <i className="bi bi-person person"></i>
                                            </div>
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" autoComplete='off' {...register("name", { required: "Name is required" })} />
                                        </div>

                                        {errors.name && <span className="error">{errors.name.message}</span>}
                                    </div>
                                </div>

                                <div className="col-12 col-xl-6">
                                    <div className="name-email mt-4 mt-xl-0">
                                        <label htmlFor="email" className="form-label">Email:</label>

                                        <div className="input-group">
                                            <div className="input-group-text">
                                                <i className="bi bi-envelope"></i>
                                            </div>
                                            <input type="email" name="email" id="email" className="form-control" autoComplete='off' placeholder="Your Email" {...register("email", { required: "Email is required" })} />
                                        </div>

                                        {errors.email && <span className="error">{errors.email.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="message mt-4">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-control" placeholder="How can we help?" {...register("userMessage", { required: "Message is required" })} rows={4}></textarea>

                                {errors.userMessage && <span className="error">{errors.userMessage.message}</span>}
                            </div>

                            <div className="text-center">
                                <button className="btn" type="submit">
                                    <i className="bi bi-send me-2"></i>
                                    Send Message
                                </button>

                                <p className="success-response">
                                    <span className="icon">✅</span>
                                    Message sent! We'll get back to you soon.
                                </p>

                                <p className="failed-response">
                                    ❌
                                    Network error. Please try again.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}