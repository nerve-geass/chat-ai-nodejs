export default function UserProfile() {
    return (
        <div className="right-sidebar" id="user-profile">
            <div className="right-sidebar-header with-tab-menu">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                            aria-controls="profile" aria-selected="false">Media</a>
                    </li>
                </ul>
                <a href="#" className="right-sidebar-close">
                    <i className="mdi mdi-window-close"></i>
                </a>
            </div>
            <div className="right-sidebar-content">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="text-center mb-4">
                            <figure className="avatar avatar-xl mb-4">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <h5 className="mb-1">Matteo Reedy</h5>
                            <small className="text-muted font-italic">Last seen: Today</small>
                        </div>
                        <p className="text-muted">Lorem ipsum is a pseudo-Latin text used in web design, typography,
                            layout, and printing in place of English to emphasise design elements over content.
                            It&apos;s also called placeholder (or filler) text. It&apos;s a convenient tool for
                            mock-ups.</p>
                        <div className="mt-4 mb-4">
                            <h6>Phone</h6>
                            <p className="text-muted">(555) 555 55 55</p>
                        </div>
                        <div className="mt-4 mb-4">
                            <h6>City</h6>
                            <p className="text-muted">Germany / Berlin</p>
                        </div>
                        <div className="mt-4 mb-4">
                            <h6>Website</h6>
                            <p>
                                <a href="#">www.franshanscombe.com</a>
                            </p>
                        </div>
                        <div className="mt-4 mb-4">
                            <h6 className="mb-3">Social media accounts</h6>
                            <ul className="list-inline social-links">
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-floating btn-facebook"
                                        data-toggle="tooltip" title="Facebook">
                                        <i className="mdi mdi-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-floating btn-twitter"
                                        data-toggle="tooltip" title="Twitter">
                                        <i className="mdi mdi-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn btn-floating btn-instagram"
                                        data-toggle="tooltip" title="Instagram">
                                        <i className="mdi mdi-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 mb-4">
                            <h6 className="mb-3">Settings</h6>
                            <div className="form-group">
                                <div className="form-item custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch11" onChange={() => {}}/>
                                    <label className="custom-control-label" htmlFor="customSwitch11">Block</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-item custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" checked={false}
                                        id="customSwitch12" onChange={() => {}}/>
                                    <label className="custom-control-label" htmlFor="customSwitch12">Mute</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-item custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch13" onChange={() => {}}/>
                                    <label className="custom-control-label" htmlFor="customSwitch13">Get
                                        notification</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                                    <div>
                                        <figure className="avatar avatar-sm mr-2">
                                            <span className="avatar-title bg-danger rounded-circle">
                                                <i className="mdi mdi-file-pdf-box-outline"></i>
                                            </span>
                                        </figure>
                                        report4221.pdf
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Forward</a>
                                            <a href="#" className="dropdown-item">Download</a>
                                            <a href="#" className="dropdown-item">Delete</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                                    <div>
                                        <figure className="avatar avatar-sm mr-2">
                                            <span className="avatar-title bg-secondary rounded-circle">
                                                <i className="mdi mdi-image"></i>
                                            </span>
                                        </figure>
                                        avatar_image.png
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Forward</a>
                                            <a href="#" className="dropdown-item">Download</a>
                                            <a href="#" className="dropdown-item">Delete</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                                    <div>
                                        <figure className="avatar avatar-sm mr-2">
                                            <span className="avatar-title bg-success rounded-circle">
                                                <i className="mdi mdi-file-excel-box-outline"></i>
                                            </span>
                                        </figure>
                                        excel_report_file2020.xlsx
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Forward</a>
                                            <a href="#" className="dropdown-item">Download</a>
                                            <a href="#" className="dropdown-item">Delete</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3 px-0 d-flex justify-content-between">
                                    <div>
                                        <figure className="avatar avatar-sm mr-2">
                                            <span className="avatar-title bg-info rounded-circle">
                                                <i className="mdi mdi-file-document-outline"></i>
                                            </span>
                                        </figure>
                                        articles342133.txt
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" data-toggle="dropdown">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Forward</a>
                                            <a href="#" className="dropdown-item">Download</a>
                                            <a href="#" className="dropdown-item">Delete</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}