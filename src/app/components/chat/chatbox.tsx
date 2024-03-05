export default function ChatBox() {
    return (
        <div className="chat">
            <div className="chat-preloader d-none">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="no-message-container">
                <div className="row mb-5">
                    <div className="col-md-4 offset-4">
                        <img src="./dist/media/svg/chat_empty.svg" className="img-fluid" alt="image" />
                    </div>
                </div>
                <p className="lead">Choose a chat or start a <a href="#" data-left-sidebar="friends">new chat</a>.</p>
            </div>
            <div className="chat-header">
                <div className="chat-header-user">
                    <figure className="avatar avatar-state-success">
                        <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                    </figure>
                    <div>
                        <h5>Maribel Mallon</h5>
                        <small className="text-success">Online</small>
                    </div>
                </div>
                <div className="chat-header-action">
                    <ul className="list-inline" data-intro-js="7">
                        <li className="list-inline-item d-inline d-lg-none">
                            <a href="#" className="btn btn-danger btn-floating example-chat-close">
                                <i className="mdi mdi-arrow-left"></i>
                            </a>
                        </li>
                        <li className="list-inline-item" data-toggle="tooltip" title="Voice call">
                            <a href="#" className="btn btn-info btn-floating" data-right-sidebar="notifications">
                                <i className="mdi mdi-bell-outline"></i>
                            </a>
                        </li>
                        <li className="list-inline-item" data-toggle="tooltip" title="Voice call">
                            <a href="#" className="btn btn-success btn-floating voice-call-request">
                                <i className="mdi mdi-phone"></i>
                            </a>
                        </li>
                        <li className="list-inline-item" data-toggle="tooltip" title="Video call">
                            <a href="#" className="btn btn-warning btn-floating video-call-request">
                                <i className="mdi mdi-video-outline"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="btn btn-dark btn-floating" data-toggle="dropdown">
                                <i className="mdi mdi-dots-horizontal"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" data-right-sidebar="user-profile" className="dropdown-item">Profile</a>
                                <a href="#" className="dropdown-item example-close-selected-chat">Close chat</a>
                                <a href="#" className="dropdown-item">Add to archive</a>
                                <a href="#" className="dropdown-item example-delete-chat">Delete</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item text-danger example-block-user">Block</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="chat-body">
                <div className="messages">
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">10:12 PM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">Hello, Blondy Neeson 😃</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-content">
                            <div className="message-text">How do you feel today? I want to ask you something.</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Matteo Reedy</h5>
                                <div className="time">01:20 PM <i className="mdi mdi-check-all text-info ml-1"></i></div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">
                                Hello 😃
                                <br />
                                <br />
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator on the Internet. It uses a dictionary of
                                over 200 Latin words, combined with a handful of model sentence structures, to generate
                                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                from repetition, injected humour, or non-characteristic words etc.
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">10:43 AM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <audio controls>
                                <source src="https://www.w3schools.com/tags/horse.ogg" type="audio/ogg" />
                                <source src="https://www.w3schools.com/tags/horse.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Matteo Reedy</h5>
                                <div className="time">
                                    10:43 AM
                                    <i className="mdi mdi-check-all text-info ml-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="message-content">
                            <audio controls>
                                <source src="https://www.w3schools.com/tags/horse.ogg" type="audio/ogg" />
                                <source src="https://www.w3schools.com/tags/horse.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-content">
                            <div className="message-text">You are good ❤❤</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">11:59 PM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">I want to send you a file.</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-content message-file">
                            <div className="message-text d-flex">
                                <div className="file-icon">
                                    <i className="mdi mdi-file-pdf-box-outline"></i>
                                </div>
                                <div>
                                    <div>test-filename.pdf <small className="text-muted small">(50KB)</small></div>
                                    <ul className="list-inline mt-2">
                                        <li className="list-inline-item mb-0">
                                            <a href="#" className="btn btn-sm btn-light-success btn-floating" title="View">
                                                <i className="mdi mdi-link"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mb-0">
                                            <a href="#" className="btn btn-sm btn-light-success btn-floating"
                                                title="Download">
                                                <i className="mdi mdi-download"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item messages-divider sticky-top" data-label="Yesterday"></div>
                    <div className="message-item out">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Matteo Reedy</h5>
                                <div className="time">07:45 AM <i className="mdi mdi-check-all text-info ml-1"></i></div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">Thank you so much. These files are very important to me. I guess
                                you didn't make any changes
                                to these files. So I need the original versions of these files. Thank you very much
                                again.
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">07:15 AM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">I'm about to send the other file now.</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Matteo Reedy</h5>
                                <div className="time">07:45 AM <i className="mdi mdi-check-all text-info ml-1"></i></div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div>
                                <div className="message-content-images">
                                    <a href="./dist/media/img/image1.jpg" data-fancybox="images">
                                        <img src="./dist/media/img/image1.jpg" alt="image" />
                                    </a>
                                    <a href="./dist/media/img/image2.jpg" data-fancybox="images">
                                        <img src="./dist/media/img/image2.jpg" alt="image" />
                                    </a>
                                    <a href="./dist/media/img/image3.jpg" data-fancybox="images">
                                        <img src="./dist/media/img/image3.jpg" alt="image" />
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">08:00 AM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">I thank you. We are glad to help you. 😃</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar9.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Matteo Reedy</h5>
                                <div className="time">09:23 AM <i className="mdi mdi-check-all text-info ml-1"></i></div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                                exercitationem inventore
                                quaerat quos repellendus sunt? Assumenda dolor earum optio quis?
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item out">
                        <div className="message-content">
                            <div className="message-text">😃 😃 ❤ ❤</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">08:00 AM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="video-block">
                                <a data-fancybox
                                    href="https://www.youtube.com/watch?v=c5nhWy7Zoxg&list=PLmUBwxvdqHq-2La24tH5J55DwBdUwZnoI&ab_channel=FrameStockFootages">
                                    <i className="mdi mdi-play-circle-outline"></i>
                                </a>
                            </div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item messages-divider" data-label="1 message unread"></div>
                    <div className="message-item in">
                        <div className="message-avatar">
                            <figure className="avatar avatar-sm">
                                <img src="./dist/media/img/avatar6.jpg" className="rounded-circle" alt="image" />
                            </figure>
                            <div>
                                <h5>Maribel Mallon</h5>
                                <div className="time">11:05 AM</div>
                            </div>
                        </div>
                        <div className="message-content">
                            <div className="message-text">I sent you all the files. Good luck with 😃</div>
                            <div className="dropdown">
                                <a href="#" data-toggle="dropdown">
                                    <i className="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Reply</a>
                                    <a href="#" className="dropdown-item">Forward</a>
                                    <a href="#" className="dropdown-item">Copy</a>
                                    <a href="#" className="dropdown-item">Starred</a>
                                    <a href="#" className="dropdown-item example-delete-message">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-item in in-typing">
                        <div className="message-content">
                            <div className="message-text">
                                <div className="writing-animation">
                                    <div className="writing-animation-line"></div>
                                    <div className="writing-animation-line"></div>
                                    <div className="writing-animation-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-footer" data-intro-js="6">
                <form className="d-flex">
                    <div className="dropdown">
                        <button className="btn btn-light-info btn-floating mr-3" data-toggle="dropdown" title="Emoji"
                            type="button">
                            <i className="mdi mdi-face"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-big p-0">
                            <div className="dropdown-menu-search">
                                <input type="text" className="form-control" placeholder="Search emoji" />
                            </div>
                            <div className="emojis chat-emojis">
                                <ul>
                                    <li>😁</li>
                                    <li>😂</li>
                                    <li>😃</li>
                                    <li>😄</li>
                                    <li>😅</li>
                                    <li>😆</li>
                                    <li>😉</li>
                                    <li>😊</li>
                                    <li>😋</li>
                                    <li>😌</li>
                                    <li>😍</li>
                                    <li>😏</li>
                                    <li>😒</li>
                                    <li>😓</li>
                                    <li>😔</li>
                                    <li>😖</li>
                                    <li>😘</li>
                                    <li>😝</li>
                                    <li>😠</li>
                                    <li>😢</li>
                                    <li>🙅</li>
                                    <li>🙆</li>
                                    <li>🙇</li>
                                    <li>🙈</li>
                                    <li>🙉</li>
                                    <li>🙊</li>
                                    <li>🙋</li>
                                    <li>🙌</li>
                                    <li>🙍</li>
                                    <li>🙎</li>
                                    <li>🙏</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-light-info btn-floating mr-3" data-toggle="dropdown" title="Emoji"
                            type="button">
                            <i className="mdi mdi-plus"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Location</a>
                            <a href="#" className="dropdown-item">Attach</a>
                            <a href="#" className="dropdown-item">Document</a>
                            <a href="#" className="dropdown-item">File</a>
                            <a href="#" className="dropdown-item">Video</a>
                        </div>
                    </div>
                    <input type="text" className="form-control form-control-main" placeholder="Write a message." />
                    <div>
                        <button className="btn btn-primary ml-2 btn-floating" type="submit">
                            <i className="mdi mdi-send"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}