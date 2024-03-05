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
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#newGroup">Add Group</a>
                            <a href="#" className="dropdown-item" data-toggle="modal" data-target="#intiveUsers">Invite users</a>
                        </div>
                    </li>
                    <li>
                        <a className="active" data-intro-js="2" data-left-sidebar="chats" href="#" data-toggle="tooltip"
                            title="Chats" data-placement="right">
                            <span className="badge badge-warning"></span>
                            <i data-feather="message-circle"></i>
                        </a>
                    </li>
                    <li>
                        <a data-left-sidebar="friends" href="#" data-toggle="tooltip"
                            title="Friends" data-placement="right">
                            <span className="badge badge-danger"></span>
                            <i data-feather="user"></i>
                        </a>
                    </li>
                    <li>
                        <a data-left-sidebar="favorites" data-toggle="tooltip" title="Favorites" data-placement="right"
                            href="#">
                            <i data-feather="star"></i>
                        </a>
                    </li>
                    <li className="brackets">
                        <a data-left-sidebar="archived" href="#" data-toggle="tooltip"
                            title="Archived" data-placement="right">
                            <i data-feather="archive"></i>
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
                            <a href="#" className="dropdown-item d-none d-md-block example-app-tour-start">Start Tour</a>
                            <div className="dropdown-divider"></div>
                            <a href="login.html" className="dropdown-item text-danger">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}