import ChatAvatar from './assets/chatGPT-icon.svg'
import UserAvatar from './assets/user-avatar.png'

type messageProps = {
    role: string
    content: string
}

export default function Response(props :messageProps){
    return (
        <div className="question">
            <img src={props.role === 'question' ? UserAvatar : ChatAvatar} className=""></img>
            <p className="question-text">{props.content}</p>
        </div>
    )
}