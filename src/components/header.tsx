'use client'

import { signOut } from "next-auth/react";
import LoginButton from "./login-button";
import { usePathname } from 'next/navigation'

export default function HeaderNav() {

    const pathname = usePathname()

    return <>
        <nav className="navbar fixed-top bg-white navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand" style={{ display: 'flex' }}>
                    <div>
                        <LoginButton />
                    </div>

                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${pathname === "/" ? "active" : ""} `}>
                            <a className="nav-link" href="./">Home</a>
                        </li>
                        <li className={`nav-item ${pathname.indexOf("/chat") > -1 ? "active" : ""} `}>
                            <a className="nav-link" href="/chat">Chat</a>
                        </li>
                        {/* <li className="nav-item">
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
                        </li> */}
                    </ul>
                    <a onClick={() => signOut()} className="btn btn-primary ml-auto">Log out</a>
                </div>
            </div>
        </nav></>
}