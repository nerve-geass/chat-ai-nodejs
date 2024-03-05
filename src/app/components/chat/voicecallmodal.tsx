export default function VoiceCallModal() {
    return (
        <>
            <div className="modal fade" id="voiceCallRequest" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content call-request">
                        <div className="modal-body">
                            <figure className="avatar avatar-xl">
                                <img src="./dist/media/img/avatar4.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <h4 className="my-4">Brietta Blogg <span className="text-success">calling...</span></h4>
                            <div className="call-action-button">
                                <button type="button" className="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <i className="mdi mdi-phone-cancel"></i>
                                </button>
                                <button type="button" className="btn btn-success btn-pulse btn-floating btn-lg voice-call-accept">
                                    <i className="mdi mdi-phone-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./ voice call modal --> */}

            {/* <!-- voice call modal --> */}
            <div className="modal voice-call fade" id="voiceCall" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body" style={{ background: "url(./dist/media/img/avatar2.jpg)" }}>
                            <figure className="avatar mb-4 avatar-state-success avatar-xl">
                                <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div className="mb-2 font-weight-bold lead">Brietta Blogg</div>
                            <div className="mb-4 chat-stopwatch">00:00:00</div>
                            <div className="call-action-button">
                                <button type="button" className="btn btn-pulse btn-floating btn-lg mute-event" data-toggle="tooltip"
                                    title="Turn on / off sound">
                                    <i data-feather="volume-2"></i>
                                </button>
                                <button type="button" className="btn btn-danger btn-floating btn-lg" data-toggle="tooltip"
                                    title="Stop talking" data-dismiss="modal">
                                    <i className="mdi mdi-close"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./ voice call modal --> */}

            {/* <!-- voice call modal --> */}
            <div className="modal fade" id="videoCallRequest" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content call-request">
                        <div className="modal-body">
                            <figure className="avatar avatar-xl">
                                <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <h4 className="my-4">Brietta Blogg <span className="text-success">calling...</span></h4>
                            <div className="call-action-button">
                                <button type="button" className="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                    <i className="mdi mdi-video-minus-outline"></i>
                                </button>
                                <button type="button"
                                    className="btn btn-success btn-pulse btn-floating btn-lg video-call-request-accept">
                                    <i className="mdi mdi-video-check-outline"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./ voice call modal --> */}

            {/* <!-- video call modal --> */}
            <div className="modal call fade" id="videoCall" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body" style={{ background: "url(./dist/media/img/video-call.jpg)" }}>
                            <div className="call-time chat-stopwatch">00:00:00</div>
                            <div className="call-action">
                                <div className="call-action-button">
                                    <button type="button" className="btn btn-pulse btn-floating btn-lg mute-event" data-toggle="tooltip"
                                        data-placement="right" title="Turn on / off sound">
                                        <i data-feather="volume-2"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-floating btn-lg" data-toggle="tooltip"
                                        data-placement="right" title="Stop talking" data-dismiss="modal">
                                        <i className="mdi mdi-close"></i>
                                    </button>
                                </div>
                                <div className="call-users">
                                    <figure className="avatar" data-toggle="tooltip" data-placement="left" title="Margaretta Worvell">
                                        <img src="./dist/media/img/avatar2.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                    <figure className="avatar" data-toggle="tooltip" data-placement="left" title="Matteo Reedy">
                                        <span className="avatar-title bg-info rounded-circle">M</span>
                                    </figure>
                                    <figure className="avatar" data-toggle="tooltip" data-placement="left" title="Townsend Seary">
                                        <img src="./dist/media/img/avatar1.jpg" className="rounded-circle" alt="image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}