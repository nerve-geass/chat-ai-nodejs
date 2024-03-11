export default function SideBar() {
    return (<>
        <div id="chats" className="left-sidebar open">
            <div className="left-sidebar-content">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item active">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Maribel Mallon</h5>
                                <p>I sent you all the files. Good luck with 😃</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">11:05 AM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile" className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-intro-js="5" className="list-group-item unread-chat">
                        <figure className="avatar avatar-state-success mr-3">
                            <span className="avatar-title bg-secondary rounded-circle">T</span>
                        </figure>
                        <div className="users-list-body">
                            <div>
                                <h5>Townsend Seary</h5>
                                <p>What's up, how are you?</p>
                            </div>
                            <div className="users-list-action">
                                <div className="new-message-count">3</div>
                                <small>03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile" className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item unread-chat">
                        <figure className="avatar avatar-state-warning mr-3">
                            <img src="./dist/media/img/avatar4.jpg" className="rounded-circle" alt="image" />
                        </figure>
                        <div className="users-list-body">
                            <div>
                                <h5>Forest Kroch</h5>
                                <p>
                                    <i className="mdi mdi-camera mr-1"></i> Photo
                                </p>
                            </div>
                            <div className="users-list-action">
                                <div className="new-message-count">1</div>
                                <small>Yesterday</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile" className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Margaretta Worvell</h5>
                                <p>
                                    <i className="mdi mdi-check-all text-info mr-1"></i> I need you today. Can you
                                    come with me?
                                </p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile" className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <figure className="avatar mr-3">
                            <span className="avatar-title bg-warning bg-success rounded-circle">
                                <i className="mdi mdi-account-group-outline"></i>
                            </span>
                        </figure>
                        <div className="users-list-body">
                            <div>
                                <h5>😍 Business Group</h5>
                                <p><strong>Maher Ruslandi: </strong>Hello!!!</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">Yesterday</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Leave group</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-warning mr-3">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Jennica Kindred</h5>
                                <p>
                                    <i className="mdi mdi-video-outline mr-1"></i>
                                    Video
                                </p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-info rounded-circle">M</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Marvin Rohan</h5>
                                <p>
                                    <i className="mdi mdi-microphone mr-1"></i>
                                    Sent audio file
                                </p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">Yesterday</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar7.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Townsend Seary</h5>
                                <p>Where are you?</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-secondary rounded-circle">G</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Gibb Ivanchin</h5>
                                <p>I want to visit them.</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar1.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Harald Kowalski</h5>
                                <p>Reports are ready.</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-success rounded-circle">A</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Afton McGilvra</h5>
                                <p>I do not know where is it. Don't ask me, please.</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Alexandr Donnelly</h5>
                                <p>Can anyone enter the meeting?</p>
                            </div>
                            <div className="users-list-action">
                                <small className="text-muted">03:41 PM</small>
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <a href="#" className="dropdown-item">Add to archive</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- Friends left sidebar --> */}
        <div id="friends" className="left-sidebar">
            <div className="left-sidebar-header">
                <form>
                    <h4 className="mb-4">Friends</h4>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn" type="button">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Search friends" />
                    </div>
                </form>
            </div>
            <div className="left-sidebar-content">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Harrietta Souten</h5>
                                <p>Dental Hygienist</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-warning mr-3">
                                <span className="avatar-title bg-success rounded-circle">A</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Aline McShee</h5>
                                <p>Marketing Assistant</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-success mr-3">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Brietta Blogg</h5>
                                <p>Actuary</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-success mr-3">
                                <img src="./dist/media/img/avatar3.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Karl Hubane</h5>
                                <p>Chemical Engineer</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Jillana Tows</h5>
                                <p>Project Manager</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-success mr-3">
                                <span className="avatar-title bg-info rounded-circle">AD</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Alina Derington</h5>
                                <p>Nurse</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-secondary mr-3">
                                <span className="avatar-title bg-warning rounded-circle">S</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Stevy Kermeen</h5>
                                <p>Associate Professor</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar1.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Stevy Kermeen</h5>
                                <p>Senior Quality Engineer</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar mr-3">
                                <img src="./dist/media/img/avatar5.jpg" className="rounded-circle" alt="image" />
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Gloriane Shimmans</h5>
                                <p>Web Designer</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <figure className="avatar avatar-state-warning mr-3">
                                <span className="avatar-title bg-secondary rounded-circle">B</span>
                            </figure>
                        </div>
                        <div className="users-list-body">
                            <div>
                                <h5>Bernhard Perrett</h5>
                                <p>Software Engineer</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">New chat</a>
                                            <a href="#" data-right-sidebar="user-profile"
                                                className="dropdown-item">Profile</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Block</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="modal fade" id="intiveUsers" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                <div className="modal-content">
                    <div className="modal-header">  
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="mdi mdi-close"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="mb-4">
                            <div className="form-group">
                                <label htmlFor="invite_emails" className="col-form-label">Email address</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" id="invite_emails" placeholder="Email address" />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-success">
                                            <i className="mdi mdi-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="invite_topic" className="col-form-label">Invitation topic</label>
                                <input type="text" className="form-control" id="invite_topic" placeholder="Topic" />
                            </div>
                        </form>
                        <div className="d-flex justify-content-between">
                            <span>Users</span>
                            <span className="text-muted small">Total 3 users</span>
                        </div>
                        <hr />
                        <div>
                            <ul className="list-group list-group-unlined">
                                <li className="list-group-item px-0 d-flex">
                                    <figure className="avatar mr-3">
                                        <img src="./dist/media/img/avatar4.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <div>
                                        <div>Amanda Harvey</div>
                                        <div className="small text-muted">amanda@example.com</div>
                                    </div>
                                    <a className="text-danger ml-auto" data-toggle="tooltip" title="Delete" href="#">
                                        <i className="mdi mdi-delete-outline"></i>
                                    </a>
                                </li>
                                <li className="list-group-item px-0 d-flex">
                                    <figure className="avatar mr-3">
                                        <span className="avatar-title bg-info rounded-circle">D</span>
                                    </figure>
                                    <div>
                                        <div>David Harrison</div>
                                        <div className="small text-muted">david@example.com</div>
                                    </div>
                                    <a className="text-danger ml-auto" data-toggle="tooltip" title="Delete" href="#">
                                        <i className="mdi mdi-delete-outline"></i>
                                    </a>
                                </li>
                                <li className="list-group-item px-0 d-flex">
                                    <figure className="avatar mr-3">
                                        <img src="./dist/media/img/avatar10.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <div>
                                        <div>Ella Lauda</div>
                                        <div className="small text-muted">Markvt@example.com</div>
                                    </div>
                                    <a className="text-danger ml-auto" data-toggle="tooltip" title="Delete" href="#">
                                        <i className="mdi mdi-delete-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ./ Friends left sidebar --> */}

        {/* <!-- Favorites left sidebar --> */}
        <div id="favorites" className="left-sidebar">
            <div className="left-sidebar-header">
                <form>
                    <h4 className="mb-4">Favorites</h4>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn" type="button">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Search favorites" />
                    </div>
                </form>
            </div>
            <div className="left-sidebar-content">
                <ul className="list-group list-group-flush users-list">
                    <li className="list-group-item">
                        <div className="users-list-body">
                            <div>
                                <h5>Jennica Kindred</h5>
                                <p>I know how important this file is to you. You can trust me ;</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Remove favorites</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="users-list-body">
                            <div>
                                <h5>Marvin Rohan</h5>
                                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Remove favorites</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="users-list-body">
                            <div>
                                <h5>Frans Hanscombe</h5>
                                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Remove favorites</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="users-list-body">
                            <div>
                                <h5>Karl Hubane</h5>
                                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Remove favorites</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- ./ Favorites left sidebar --> */}

        {/* <!-- Archived left sidebar --> */}
        <div id="archived" className="left-sidebar">
            <div className="left-sidebar-header">
                <form>
                    <h4 className="mb-4">Archived</h4>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn" type="button">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Search archived" />
                    </div>
                </form>
            </div>
            <div className="left-sidebar-content">
                <ul className="list-group list-group-flush users-list">
                    <li className="list-group-item">
                        <figure className="avatar mr-3">
                            <span className="avatar-title bg-danger rounded-circle">M</span>
                        </figure>
                        <div className="users-list-body">
                            <div>
                                <h5>Mercedes Pllu</h5>
                                <p>I know how important this file is to you. You can trust me ;)</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Restore</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <figure className="avatar mr-3">
                            <span className="avatar-title bg-secondary rounded-circle">R</span>
                        </figure>
                        <div className="users-list-body">
                            <div>
                                <h5>Rochelle Golley</h5>
                                <p>Lorem ipsum dolor sitsdc sdcsdc sdcsdcs</p>
                            </div>
                            <div className="users-list-action">
                                <div className="action-toggle">
                                    <div className="dropdown">
                                        <a data-toggle="dropdown" href="#">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Open</a>
                                            <a href="#" className="dropdown-item">Restore</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-danger">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- ./ Archived left sidebar --> */}
    </>

    )
}