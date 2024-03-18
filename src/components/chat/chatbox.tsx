import { AiGirlfriend, AiGirlfriendType } from "@/models/ai-girlfriend"
import { useChatAIUtils } from "@/utils/chat-ai"
import { useConversation } from "@/utils/useConversation"
import useUser from "@/utils/useUser"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export type ConversationType = {
    type: 'out' | 'in'
    text: string | null
    image: string | null
    avatar: string
    name: string
}


export const ChatBox = ({ session, conversationId }: { session: Session, conversationId: string | null }) => {
    const { data: user, isLoading: isLoadingUser } = useUser(session.user?.email!)
    const router = useRouter()

    const { getConversation, newConversation, saveMessage } = useConversation()

    const [data, setData] = useState<ConversationType[]>([])
    const [model, setModel] = useState<AiGirlfriendType | null>(null)
    const [message, setMessage] = useState<string>("")
    const [isLoading, setLoading] = useState(true)

    const chooseGirlfriend = (modelName: string) => {
        setModel(AiGirlfriend.find(model => model.name = modelName)!)
    }

    const updateChatBody = () => {
        let scrollHeight = document.getElementById("chat-body")?.scrollHeight!
        let chatBody = document.getElementById("chat-body")
        if (chatBody) chatBody.scrollTop = scrollHeight
    }

    console.log({conversationId, model})

    useEffect(() => {
        if (user && conversationId) {
            getConversation(user.id, conversationId)
                .then((data) => {
                    updateChatBody()
                    setData(data.conversation)
                    setModel(AiGirlfriend.filter(model => model.name === data.modelId)[0])
                    setLoading(false)
                })
        }
    }, [user, conversationId])

    const { generateImageAi: generateImageCallback, chatCompletion } = useChatAIUtils(user)

    const handleGenerateImage = () => {
        console.log("chiedo immagine a model " + model!.model)

        generateImageCallback(model!)
    }

    const handlePlayVoice = (userText: string) => {
        console.log(userText)
    }

    const handleMessage = async (event: any) => {
        event.preventDefault()
        setLoading(true)

        const outMessage: ConversationType = {
            type: "out",
            text: message,
            image: null,
            avatar: "/dist/media/img/avatar6.jpg",
            name: "me"
        }

        const messageConversationId = conversationId ? conversationId : (await newConversation(user.id, model!.name)).conversationId

        if (!(await saveMessage(user.id, outMessage, model!.name, messageConversationId))) return false

        data?.push(outMessage)

        setMessage("")

        const response = await chatCompletion(data!, model!)

        if (!(await saveMessage(user.id, response, model!.name, messageConversationId))) return false

        data?.push(response)
        updateChatBody()
        setLoading(false)
        router.push(`/chat?chatId=${conversationId}`)
    }

    return (
        <div className="chat">
            {isLoading ? <div className="chat-preloader d-none">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : null}
            <div className="no-message-container">
                <div className="row mb-5">
                    <div className="col-md-4 offset-4">
                        <img src="./dist/media/svg/chat_empty.svg" className="img-fluid" alt="image" />
                    </div>
                </div>
                <p className="lead">Choose a chat or start a <a href="#" data-left-sidebar="friends">new chat</a>.</p>
            </div>
            <div className="chat-body" id="chat-body">
                <div className="messages" style={{ maxWidth: 900, maxHeight: 450, scrollbarWidth: "none", overflow: "scroll" }}>
                    {!data || data.length === 0
                        ? <>
                            <small>Fai il primo passo e scrivi un messaggio.</small>

                            {model
                                ? null
                                : <>
                                    <small>Chatta con:</small>
                                    {AiGirlfriend.map(girlfriend => {
                                        return <button className="btn btn-primary mb-2" key={girlfriend.name} onClick={() => chooseGirlfriend(girlfriend.name)}>{girlfriend.name}</button>
                                    })
                                    }
                                </>}
                        </>
                        : data?.map(message =>
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
                                    <div className="message-text" style={{ scrollbarWidth: "none", overflow: "scroll" }}>{message.text}</div>
                                </div>
                                <div>
                                    {message.type === 'in' ? <i style={{ cursor: 'pointer' }} onClick={() => handlePlayVoice(message.text!)} className="mdi mdi-volume-high">
                                        <small>Play voice</small
                                        ></i> : null}
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
                {model ?
                    <form className="d-flex" onSubmit={handleMessage}>
                        <button className="btn btn-light-info mr-3" style={{ width: 214, height: 60, padding: "22px 36px" }} onClick={() => handleGenerateImage()}
                            type="button">
                            Chiedi una foto
                        </button>
                        <input type="text" id="messageInputChat"
                            className="form-control form-control-main"
                            placeholder="Write a message."
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)} />
                        <div>
                            <button className="btn btn-primary ml-2 btn-floating" type="submit">
                                <i className="mdi mdi-send"></i>
                            </button>
                        </div>
                    </form>
                    : null}
            </div>
        </div>
    )
}