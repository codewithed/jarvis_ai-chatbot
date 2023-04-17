import ChatAvatar from './assets/chatGPT-icon.svg'
import UserAvatar from './assets/user-avatar.png'

type messageProps = {
    type: string
    body: string
}

export default function Response(props :messageProps){
    return (
        <div className="question">
            <img src={props.type === 'question' ? UserAvatar : ChatAvatar} className=""></img>
            <p className="question-text">{props.body}</p>
        </div>
    )
}