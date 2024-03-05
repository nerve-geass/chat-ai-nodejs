export default function Disconnected() {
    return (
        <div className="modal fade" id="disconnected" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-zoom" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row mb-5">
                            <div className="col-md-6 offset-3">
                                <img src="./dist/media/svg/undraw_warning_cyit.svg" className="img-fluid" alt="image" />
                            </div>
                        </div>
                        <p className="lead text-center">Application disconnected</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-primary">Reconnect</button>
                        <a href="login.html" className="btn btn-link">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}