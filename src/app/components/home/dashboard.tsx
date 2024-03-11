import { signOut, useSession } from "next-auth/react"
import LoginButton from "../login-button"
import { loadStripe } from "@stripe/stripe-js"
import useUser, { UserType } from "@/app/utils/useUser"
import path from "path"
import HeaderNav from "../header"

const proItemId = process.env.NEXT_PUBLIC_PRO_SUBSCRIPTION!
const premiumItemId = process.env.NEXT_PUBLIC_PREMIUM_SUBSCRIPTION!

export const Dashboard = () => {
    const { data: userSession } = useSession()

    if (!userSession?.user?.email)
        return <div>Something went wrong</div>

    const { isError, isLoading, data: profile } = useUser(userSession?.user?.email)

    if (isError)
        return <div>Something went wrong</div>

    if (isLoading) {
        return (
            <>Loading</>
            // <div className="preloader">
            //     <img src="./dist/media/img/logo-2x.png" alt="logo" />
            //     <p className="lead font-weight-bold text-muted my-5">Loading Tinno Chat App ...</p>
            //     <div className="spinner-border" role="status">
            //         <span className="sr-only">Loading...</span>
            //     </div>
            // </div>
        )
    }

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
        })
        if (!stripe || stripe === null) {
            alert("Something wrong with payment, retry later")
        }

        const sessionId = (await checkoutSession.json()).id

        try {

            const saveSession = await fetch("/api/users/" + userSession?.user?.email! + "/payment/session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sessionId: sessionId
                }),
            })

            if (saveSession.status != 200) {
                console.error(saveSession)
                alert(saveSession)
            }

            const result = await stripe!.redirectToCheckout({
                sessionId,
            });

            if (result.error) {
                alert(result.error.message)
            }
        } catch (error) {
            alert(error)
        }

        // setLoading(false);
    }

    return (
        <>
            <HeaderNav />

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