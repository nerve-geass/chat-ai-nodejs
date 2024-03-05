export default function Settings() {
    return (
        <div className="right-sidebar" id="settings">
            <div className="right-sidebar-header">
                <span className="right-sidebar-title">Settings</span>
                <a href="#" className="right-sidebar-close">
                    <i className="mdi mdi-window-close"></i>
                </a>
            </div>
            <div className="right-sidebar-content">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3 px-0">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" checked id="customSwitch14" onChange={() => {}}/>
                            <label className="custom-control-label" htmlFor="customSwitch14">Allow connected contacts</label>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" checked id="customSwitch15" onChange={() => {}}/>
                            <label className="custom-control-label" htmlFor="customSwitch15">Confirm message requests</label>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" checked id="customSwitch16" onChange={() => {}}/>
                            <label className="custom-control-label" htmlFor="customSwitch16">Profile privacy</label>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch17" onChange={() => {}}/>
                            <label className="custom-control-label" htmlFor="customSwitch17">Developer mode options</label>
                        </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" checked id="customSwitch18" onChange={() => {}}/>
                            <label className="custom-control-label" htmlFor="customSwitch18">Two-step security
                                verification</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}