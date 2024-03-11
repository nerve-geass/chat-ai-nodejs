import { useEffect } from "react"
import {v4 as uuidv4} from 'uuid';

export type ConversationType = {
    type: 'out' | 'in'
    text: string
    avatar: string
    name: string
}


export const ChatBox = ({ conversation }: { conversation: ConversationType[] | undefined }) => {
    useEffect(() => {
        let scrollHeight = document.getElementById("chat-body")?.scrollHeight!
        let chatBody = document.getElementById("chat-body")
        if (chatBody) chatBody.scrollTop = scrollHeight
    }, conversation)

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
            <div className="chat-body" id="chat-body">
                <div className="messages">
                    {conversation?.map(message =>
                        <div className={`message-item ${message.type}`} key={uuidv4()} >
                            <div className="message-avatar">
                                <figure className="avatar avatar-sm">
                                    <img src={message.avatar} className="rounded-circle" alt="image" />
                                </figure>
                                <div className="align-middle">
                                    <h5>{message.name}</h5>
                                </div>
                            </div>
                            <div className="message-content">
                                <div className="message-text">{message.text}</div>
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
                    )}

                    {/* <div className="message-item in">
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
            </div> */}
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