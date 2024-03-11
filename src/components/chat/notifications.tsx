export default function Notifications() {
    return (
        <div className="right-sidebar" id="notifications">
            <div className="right-sidebar-header">
                <span className="right-sidebar-title">Notifications</span>
                <a data-right-sidebar="settings" title="Settings" href="#">
                    <i className="mdi mdi-cog"></i>
                </a>
                <a href="#" className="right-sidebar-close">
                    <i className="mdi mdi-close"></i>
                </a>
            </div>
            <div className="right-sidebar-content">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                        <div className="d-flex">
                            <figure className="avatar avatar-state-warning mr-3">
                                <span className="avatar-title bg-info-bright text-info rounded-circle">
                                    <i className="mdi mdi-server"></i>
                                </span>
                            </figure>
                            <div>
                                <div>You joined a group</div>
                                <span className="text-muted small">
                                    <i className="mdi mdi-clock-outline small mr-1"></i> Today
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Unread</a>
                                <a href="#" className="dropdown-item">Detail</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                        <div className="d-flex">
                            <figure className="avatar avatar-state-warning mr-3">
                                <span className="avatar-title bg-warning-bright text-warning rounded-circle">
                                    <i className="mdi mdi-server"></i>
                                </span>
                            </figure>
                            <div>
                                <div>Storage is running low!</div>
                                <span className="text-muted small">
                                    <i className="mdi mdi-clock-outline small mr-1"></i> Today
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Unread</a>
                                <a href="#" className="dropdown-item">Detail</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                        <div className="d-flex">
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-secondary-bright text-secondary rounded-circle">
                                    <i className="mdi mdi-file-document-outline"></i>
                                </span>
                            </figure>
                            <div>
                                <div>1 person sent a file</div>
                                <span className="text-muted small">
                                    <i className="mdi mdi-clock-outline small mr-1"></i> 50 min ago
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Unread</a>
                                <a href="#" className="dropdown-item">Detail</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                        <div className="d-flex">
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-success-bright text-success rounded-circle">
                                    <i className="mdi mdi-download"></i>
                                </span>
                            </figure>
                            <div>
                                <div>Reports ready to download</div>
                                <span className="text-muted small">
                                    <i className="mdi mdi-clock-outline small mr-1"></i> 5 hour ago
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Unread</a>
                                <a href="#" className="dropdown-item">Detail</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                        <div className="d-flex">
                            <figure className="avatar mr-3">
                                <span className="avatar-title bg-info-bright text-info rounded-circle">
                                    <i className="mdi mdi-lock"></i>
                                </span>
                            </figure>
                            <div>
                                <div>2 steps verification</div>
                                <span className="text-muted small">
                                    <i className="mdi mdi-clock-outline small mr-1"></i> Yesterday
                                </span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">Unread</a>
                                <a href="#" className="dropdown-item">Detail</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}