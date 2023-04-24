import ChatAvatar from './assets/chatGPT-icon.svg'
import UserAvatar from './assets/user-avatar.png'


export default function Response(props :any){
    return (
        <div className={`flex text-[whitesmoke] ${props.bgColor}`}>
            <img src={props.role === 'question' ? UserAvatar : ChatAvatar} className=""></img>
            <p className="question-text">{props.content}</p>
        </div>
    )
}