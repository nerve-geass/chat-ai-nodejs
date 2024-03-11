import { AiGirlfriend } from "@/models/ai-girlfriend"
import { useRouter } from "next/navigation"

export const SideBar = ({modelChat} : {modelChat: string}) =>  {

    const models = AiGirlfriend

    const router = useRouter()

    return (<>
        <div id="chats" className="left-sidebar open">
            <div className="left-sidebar-content">
                <ul className="list-group list-group-flush">
                    {models.map(model =>
                        <li className={`list-group-item ${modelChat===model.name ? 'active' : ''}`} key={model.name} onClick={() => router.replace(`/chat?chatId=${model.name}`)}>
                            <div>
                                <figure className="avatar mr-3">
                                    <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                                </figure>
                            </div>
                            <div className="users-list-body ml-3">
                                <div>
                                    <h5>{model.name}</h5>
                                    <p>{model.description}</p>
                                </div>
                                <div className="users-list-action">
                                    <div className="action-toggle">
                                        <div className="dropdown">
                                            <a data-toggle="dropdown" href="#">
                                                <i className="mdi mdi-dots-horizontal"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">Open</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#" className="dropdown-item text-danger example-delete-chat">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
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