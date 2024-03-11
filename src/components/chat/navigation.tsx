import { signOut } from "next-auth/react";

export default function ChatNavigation() {
    return (
        <nav className="navigation">
            <div className="nav-group">
                <ul>
                    <li className="logo">
                        <a href="#">
                            <img src="./dist/media/img/logo.png" alt="logo" />
                        </a>
                    </li>
                    <li className="navigation-action-button dropright" title="New" data-placement="right">
                        <a href="#" data-intro-js="1" data-toggle="dropdown">
                            <i className="mdi mdi-plus"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item" data-left-sidebar="friends">Start Chat</a>
                        </div>
                    </li>
                    <li>
                        <a className="active" data-intro-js="2" data-left-sidebar="chats" href="#" data-toggle="tooltip"
                            title="Chats" data-placement="right">
                            <span className="badge badge-warning"></span>
                            <i data-feather="message-circle"></i>
                        </a>
                    </li>
                    <li className="d-none d-lg-block" data-toggle="tooltip" title="Settings" data-placement="right">
                        <a href="#" data-toggle="modal" data-right-sidebar="settings">
                            <i data-feather="settings"></i>
                        </a>
                    </li>
                    <li data-toggle="tooltip" title="User menu" data-placement="right">
                        <a href="./login.html" data-intro-js="3" data-toggle="dropdown">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#editProfile">Edit
                                profile</a>
                            <a href="#" className="dropdown-item" data-right-sidebar="user-profile">Profile</a>
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#settingsModal">Settings</a>
                            <div className="dropdown-divider"></div>
                            <a onClick={() => signOut()} className="dropdown-item text-danger">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}