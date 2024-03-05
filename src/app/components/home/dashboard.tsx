import { signOut, useSession } from "next-auth/react"
import LoginButton from "../login-button";
import { loadStripe } from "@stripe/stripe-js";

const proItemId = process.env.NEXT_PUBLIC_PRO_SUBSCRIPTION!
const premiumItemId = process.env.NEXT_PUBLIC_PREMIUM_SUBSCRIPTION!

export const Dashboard = () => {

    const { data: session } = useSession()

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    const createCheckOutSession = async (itemId: String) => {
        // setLoading(true);
        const stripe = await stripePromise;
        const checkoutSession = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                itemId
            }),
        });
        if (!stripe || stripe === null) {
            alert("Something wrong with payment, retry later");
        }

        const sessionId = (await checkoutSession.json()).id

        console.log(sessionId)

        //TODO:  save sessionId to userId into database!!!!!!!!!!
        const result = await stripe!.redirectToCheckout({
            sessionId,
        });

        if (result.error) {
            alert(result.error.message);
        }
        // setLoading(false);
    };
    return (
        <>
            {/* <!-- Favicon --> */}
            <link rel="icon" href="./dist/media/img/favicon.png" type="image/png" />

            {/* <!-- Google Nunito font --> */}
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap" rel="stylesheet" />

            {/* <!-- Material design icons --> */}
            <link href="./dist/icons/materialicons/css/materialdesignicons.min.css" rel="stylesheet" />

            {/* <!-- Bundle styles --> */}
            <link rel="stylesheet" href="dist/vendor/bundle.css" />

            {/* <!-- Slick --> */}
            <link rel="stylesheet" href="dist/vendor/slick/slick-theme.css" />
            <link rel="stylesheet" href="dist/vendor/slick/slick.css" />

            {/* <!-- Fancybox --> */}
            <link rel="stylesheet" href="dist/vendor/fancybox/jquery.fancybox.min.css" type="text/css" />

            {/* <!-- Aos animate --> */}
            {/* <link rel="stylesheet" href="dist/vendor/aos/aos.css" type="text/css" /> */}

            {/* <!-- Landing page styles --> */}
            <link rel="stylesheet" href="./dist/css/landing-page.min.css"></link>
            <nav className="navbar fixed-top bg-white navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <LoginButton />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="./index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/chat">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./features.html">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Auth</a>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./login.html">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./register.html">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./reset-password.html">Reset Password</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./lock-screen.html">Lock Screen</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./phone-code.html">Phone Code</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="./pricing.html">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./contact.html">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="./email-template.html">Email Template</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a onClick={() => signOut()} className="btn btn-primary ml-auto">Log out</a>
                    </div>
                </div>
            </nav>

            <section className="py-8">
                <div className="container">
                    <div className="row mb-8">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="display-4 mb-3">Pricing</h2>
                            <p>You can start using the application by selecting any package.</p>
                        </div>
                    </div>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <span className="display-4 mr-3">Free</span>
                                    <span className="text-muted">1 month free</span>
                                </div>
                                <div className="mb-4">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Video chat</del>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Voice chat
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            To be able to invite users
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Unlimited file exchange</del>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Creating a group</del>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Chat without limit
                                        </li>
                                        <li className="list-group-item px-0 del">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Team work</del>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="btn btn-primary hover-animate">
                                    Start Trial
                                    <i className="mdi mdi-arrow-right ml-1 small"></i>
                                </a>
                            </div>
                        </div>
                        <div className="card pricing-scale">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <span className="display-4 mr-3">$19</span>
                                    <span className="text-muted">Monthly</span>
                                </div>
                                <div className="mb-4">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Video chat</del>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Voice chat
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            To be able to invite users
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-close text-danger mr-2"></i>
                                            <del>Unlimited file exchange</del>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Creating a group
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Chat without limit
                                        </li>
                                        <li className="list-group-item px-0 del">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Team work
                                        </li>
                                    </ul>
                                </div>
                                <a onClick={() => createCheckOutSession(proItemId)} className="btn btn-primary hover-animate">
                                    Upgrade Now
                                    <i className="mdi mdi-arrow-right ml-1 small"></i>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <span className="display-4 mr-3">$99</span>
                                    <span className="text-muted">Monthly</span>
                                </div>
                                <div className="mb-4">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Video chat
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Voice chat
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            To be able to invite users
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Unlimited file exchange
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Creating a group
                                        </li>
                                        <li className="list-group-item px-0">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Chat without limit
                                        </li>
                                        <li className="list-group-item px-0 del">
                                            <i className="mdi mdi-check text-success mr-2"></i>
                                            Team work
                                        </li>
                                    </ul>
                                </div>
                                <a onClick={() => createCheckOutSession(premiumItemId)} className="btn btn-primary hover-animate">
                                    Upgrade Now
                                    <i className="mdi mdi-arrow-right ml-1 small"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="footer-logo">
                                {/* <img src="./dist/media/img/logo-full.png" alt="logo" /> */}
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
                                eros.</p>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h5>Contact Us</h5>
                            <ul>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Term &amp; Condition</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h5>Our Products</h5>
                            <ul>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Payment Methods</a></li>
                                <li><a href="#">Privacy &amp; Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5>Contact Us</h5>
                            <div className="mb-4">
                                <div className="mb-2">+49 9999999999</div>
                                <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis
                                    eros.
                                </div>
                            </div>
                            <div className="footer-social">
                                <h5>Follow Us</h5>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn btn-facebook btn-floating btn-sm">
                                            <i className="mdi mdi-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn btn-twitter btn-floating btn-sm">
                                            <i className="mdi mdi-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn btn-google btn-floating btn-sm">
                                            <i className="mdi mdi-google"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn btn-linkedin btn-floating btn-sm">
                                            <i className="mdi mdi-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        © 2020 Tinno. All Rights Reserved By <a target="_blank" href="https://themeforest.com/user/laborasyon">Laborasyon</a>
                    </div>
                </div>
            </footer>
        </>
    );
};