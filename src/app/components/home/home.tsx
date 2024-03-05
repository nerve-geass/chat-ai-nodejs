import { useSession, signIn, signOut } from "next-auth/react"
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Fragment, useRef, useState } from "react";


export const HeroSection = () => {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

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
                    <a className="navbar-brand" href="./index.html">
                        {/* <img src="./dist/media/img/logo-full.png" alt="logo" /> */}
                    </a>
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
                                <a className="nav-link" target="_blank" href="chat.html">Chat</a>
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
                        <a href="#" className="btn btn-primary ml-auto">Buy Now</a>
                    </div>
                </div>
            </nav>

            <section className="py-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 text-center text-lg-left mb-5 mb-lg-0">
                            <div>
                                <h1 className="hero-title">
                                    <strong>Nemi</strong> is a web <span className="text-primary">chat application template</span>.
                                </h1>
                                <p className="lead text-muted mb-5 mb-md-8">
                                    <strong>Nemi</strong> is an HTML template created for developing written, audio and video
                                    communication applications. Build your dream applications with advanced components and features.
                                </p>
                                <div className="btn btn-primary hover-animate mr-2" onClick={() => signIn('auth0')}>
                                    Start for free
                                    <i className="mdi mdi-arrow-right ml-2 small"></i>
                                </div>
                                <a href="chat.html" target="_blank" className="btn btn-light-primary hover-animate">Learn more</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="img-skewed img-skewed-left">
                                <img src="/dist/media/img/landing/hero-image.jpg" className="img-fluid" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-8">
                <div className="container">
                    <div className="row align-items-center justify-content-between py-8">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <img src="./dist/media/svg/f1.svg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2 col-lg-5 text-center text-lg-left mb-5 mb-lg-0">
                            <h2 className="mb-4">Landing pages for your app</h2>
                            <p className="lead mb-4">If you need a landing page for your application, <strong>Tinno</strong> meets your
                                needs. You can quickly create your front page with featured pages and widgets.</p>
                            <a href="chat.html">
                                Learn more
                                <i className="mdi mdi-arrow-right ml-1 small"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between py-8">
                        <div className="col-12 col-lg-6 text-center text-lg-left mb-5 mb-lg-0">
                            <h2 className="mb-4">Rich and impressive design</h2>
                            <p className="lead mb-4"><strong>Tinno</strong> goes beyond standard molds and offers you a good design.
                                Moreover, it has an easily editable code structure.</p>
                            <a href="chat.html">
                                Learn more
                                <i className="mdi mdi-arrow-right ml-1 small"></i>
                            </a>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1">
                            <img
                                src="./dist/media/svg/f2.svg" className="img-fluid"
                                alt="..." />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between py-8">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <img
                                src="./dist/media/svg/f3.svg" className="img-fluid"
                                alt="..." />
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2 col-lg-5 text-center text-lg-left mb-5 mb-lg-0">
                            <h2 className="mb-4">Multipurpose features</h2>
                            <p className="lead mb-4">We've put together what you may need to build your application. Call screens, chat
                                windows, emojis, permanent boxes and more are waiting for you.</p>
                            <a href="chat.html">
                                Learn more
                                <i className="mdi mdi-arrow-right ml-1 small"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between py-8">
                        <div className="col-12 col-lg-6 order-2 order-lg-1 col-lg-5 text-center text-lg-left mb-5 mb-lg-0">
                            <h2 className="mb-4">Fully responsive design</h2>
                            <p className="lead mb-4"><strong>Tinno</strong> has a design that looks great on many devices. It can run
                                smoothly on all new generation browsers.</p>
                            <a href="chat.html">
                                Learn more
                                <i className="mdi mdi-arrow-right ml-1 small"></i>
                            </a>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
                            <img
                                src="./dist/media/svg/f4.svg" className="img-fluid"
                                alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mb-8">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="display-4 mb-3">Awesome Key Features.</h2>
                            <p>With <strong>Tinno</strong>, you have beautiful features.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-bootstrap mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">Built with Bootstrap</h4>
                                    <p>Minible has the pure Bootstrap native look and feels with responsive design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-devices mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">Fully Responsive</h4>
                                    <p>Fully responsive with all devices layout using bootstrap's latest version.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-layers-triple mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">Rich Components</h4>
                                    <p>Lots of components and widgets we have added to so you can quickly setup your pages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-sass mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">SCSS Support</h4>
                                    <p>Minible is supported with SCSS based admin and dashboard template.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-theme-light-dark mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">Dark & Light Layouts</h4>
                                    <p>Choose a perfect layout for your next project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card feature-block">
                                <div className="card-body">
                                    <div className="feature-block-icon">
                                        <i className="mdi mdi-tune mr-2"></i>
                                    </div>
                                    <h4 className="mb-4">Easy Customization</h4>
                                    <p>All the components are reusable and easy to customize it as needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="container">
                    <div className="row mb-8">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="display-4 mb-3">Our Customers Feedback</h2>
                            <p>Those who use the <strong>Tinno</strong> say good things. You can get an idea about
                                <strong>Tinno</strong>
                                by reading the comments.</p>
                        </div>
                    </div>
                    <div className="customers-feedback">
                        <div>
                            <div className="px-3">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                                    <div className="avatar mr-3">
                                        <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                    <div>
                                        <h6 className="font-weight-bold">Walton Newton</h6>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card mb-0 text-center text-md-left">
                                    <div className="card-body">
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                            Ipsum passages, and more recently with desktop publishing software like.</p>
                                        <div className="text-muted small">10 min ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="px-3">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                                    <div className="avatar mr-3">
                                        <img src="./dist/media/img/avatar5.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                    <div>
                                        <h6 className="font-weight-bold">Ashly Shallo</h6>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-muted"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-muted"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card mb-0 text-center text-md-left">
                                    <div className="card-body">
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                            default model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                            their infancy.</p>
                                        <div className="text-muted small">50 min ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="px-3">
                                <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                                    <div className="avatar mr-3">
                                        <img src="./dist/media/img/avatar4.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                    <div>
                                        <h6 className="font-weight-bold">Tess Walpole</h6>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-muted"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card mb-0 text-center text-md-left">
                                    <div className="card-body">
                                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                            necessary, making this the first true generator on the Internet. velit esse cillum
                                            dolore.</p>
                                        <div className="text-muted small">5 day ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="px-3">
                                <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                                    <div className="avatar mr-3">
                                        <img src="./dist/media/img/avatar3.jpg" className="rounded-circle" alt="..." />
                                    </div>
                                    <div>
                                        <h6 className="font-weight-bold">Cherrita Shadrack</h6>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-star text-warning"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card mb-0 text-center text-md-left">
                                    <div className="card-body">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                                        <div className="text-muted small">50 day ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
                                <a href="#" className="btn btn-primary hover-animate">
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
                                <a href="#" className="btn btn-primary hover-animate">
                                    Upgrade Now
                                    <i className="mdi mdi-arrow-right ml-1 small"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-8">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2 className="display-4 mb-3">Frequently Asked Questions</h2>
                            <p>We have gathered your frequently asked questions. So you can solve your problems faster.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <i className="mdi mdi-comment-question-outline mr-2"></i> Can I use this app for my
                                                company?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid.
                                            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt
                                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin
                                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes
                                            anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                            Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard
                                            of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                <i className="mdi mdi-comment-question-outline mr-2"></i> What does this chat app do?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid.
                                            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt
                                            laborum eiusmod.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn collapsed" type="button" data-toggle="collapse"
                                                data-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                <i className="mdi mdi-comment-question-outline mr-2"></i> Can i chat with my friends?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                            squid.
                                            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt
                                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin
                                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes
                                            anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                            Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard
                                            of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-md-1 d-none d-lg-block">
                            <img src="./dist/media/svg/faq.svg" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="mb-5">
                                <p className="text-primary text-uppercase">Newsletter</p>
                                <h2 className="display-4 mb-3">Subscribe Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste
                                    reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
                            </div>

                            <div className="subscribe">
                                <form action="#" method="post">
                                    <input type="email" className="form-control rounded-pill" id="news-email" placeholder="Enter Email" />
                                    <button className="btn btn-primary rounded-pill" type="submit">
                                        Subscribe
                                        <i className="mdi mdi-arrow-right ml-1 small"></i>
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

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
            {/* <!-- Bundle scripts --> */}
            <script src="dist/vendor/bundle.js"></script>

            {/* <!-- Slick --> */}
            <script src="dist/vendor/slick/slick.min.js"></script>

            {/* <!-- Fancybox --> */}
            <script src="dist/vendor/fancybox/jquery.fancybox.min.js"></script>

            {/* <!-- Aos animate --> */}
            {/* <script src="dist/vendor/aos/aos.js"></script> */}

            {/* <!-- Landing page scripts --> */}
            {/* <script src="./dist/js/landing-page.min.js"></script> */}
        </>
    );
};