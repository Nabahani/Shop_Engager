import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const { id } = useParams();
    const { getProductById } = useContext(ProductContext);
    const product = getProductById(Number(id));
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    function clearForm() {
        const nameInputEl = document.getElementById("name");
        const emailInputEl = document.getElementById("email");
        const businessInputEl = document.getElementById("business");

        nameInputEl.value = "";
        emailInputEl.value = "";
        businessInputEl.value = "";
    }

    function onSubmit() {
        const responseEL = document.querySelector(".good-response");
        responseEL.style.display = "block";
        clearForm();
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <section className="checkout">
            <div className="container">
                <button className="back-btn" onClick={() => goBack()}>
                    <i className="bi bi-arrow-left"></i>
                    Back
                </button>

                <h2 className="order-title">Complete Your Order</h2>

                <div className="row justify-content-center g-5">
                    <div className="col-11 col-lg-6">
                        <div className="left-container">
                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <h4 className="order-subtitle">Your Information</h4>

                                    <label htmlFor="name" className="order-label form-label">Full Name:</label>

                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <i className="bi bi-person person"></i>
                                        </div>

                                        <input type="text" name="name" id="name" className="form-control" autoComplete="off" {...register("name", { required: "Name is required" })} />
                                    </div>
                                    {errors.name && <span className="error">{errors.name.message}</span>}

                                    <label htmlFor="email" className="order-label form-label">Email Address:</label>

                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <i className="bi bi-envelope"></i>
                                        </div>

                                        <input type="text" name="email" id="email" className="form-control" autoComplete="off" {...register("email", { required: "Email is required" })} />
                                    </div>
                                    {errors.email && <span className="error">{errors.email.message}</span>}
                                </div>

                                <div className="order-design-section">
                                    <h4 className="order-subtitle">Design Personalization</h4>

                                    <label htmlFor="business" className="order-label form-label">Display Title / Business Name:</label>
                                    <input type="text" name="business" id="business" className="form-control" autoComplete="off" {...register("business", { required: "Business name is required" })} />
                                    {errors.business && <span className="error">{errors.business.message}</span>}

                                    <label htmlFor="slogan" className="order-label form-label">Slogan (Optional):</label>
                                    <input type="text" name="slogan" id="slogan" className="form-control" autoComplete="off" />

                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="color" className="order-label form-label">Background Color:</label>
                                            <input type="color" name="color" id="color" className="form-control" autoComplete="off" />
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <label htmlFor="logo" className="order-label form-label">Upload Logo/Photo:</label>
                                            <input type="file" name="logo" id="logo" className="form-control" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="order-btn">📋 Place Order & Get Invoice</button>

                                <p className="success-response good-response">
                                    <span className="icon">✅</span>
                                    Message sent! We'll get back to you soon.
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="col-11 col-lg-6">
                        <div className="summary">
                            <div className="order-top-container">
                                <h4 className="order-subtitle">Order Summary</h4>

                                <div className="order-image-details">
                                    <div className="order-image-container">
                                        <img src={product.image} alt={product.title} />
                                    </div>

                                    <div className="image-details">
                                        <h4 className="order-subtitle custom-font mb-0">{product.title}</h4>
                                        <p className="order-label mt-0">Includes full customization</p>
                                    </div>
                                </div>

                                <div className="order-flex-container">
                                    <p className="order-label mt-0">Subtotal</p>
                                    <p className="order-label mt-0 custom-weight">&#8358;{product.discountPrice}</p>
                                </div>

                                <div className="order-flex-container">
                                    <p className="order-label mt-0">Shipping</p>
                                    <p className="order-label mt-0 custom-weight">Free</p>
                                </div>
                            </div>

                            <div className="order-bottom-container">
                                <div className="order-flex-container">
                                    <p className="total">Total</p>
                                    <p className="total">&#8358;{product.discountPrice}</p>
                                </div>

                                <div className="green-container">
                                    <h5 className="how-it-works">📋 How it works:</h5>

                                    <ol>
                                        <li>Place your order - we'll email you an invoice</li>
                                        <li>Choose to <span className="bold-text">Pay Now</span> or <span className="bold-text">Pay Later</span></li>
                                        <li>After payment, you'll receive a receipt via email</li>
                                    </ol>
                                </div>

                                <p className="encrypted-checkout">
                                    <i className="bi bi-window"></i>
                                    Secure Encrypted checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;