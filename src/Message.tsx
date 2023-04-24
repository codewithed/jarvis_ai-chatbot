import ChatAvatar from './assets/chatGPT-icon.svg'
import UserAvatar from './assets/user-avatar.png'


export default function Response(props :any){
    return (
        <div className={`flex text-[whitesmoke] ${props.bgColor} shadow-lg p-1`}>
            <img src={props.role === 'question' ? UserAvatar : ChatAvatar} className=""></img>
            <p className="p-2 question-text">{props.content}</p>
        </div>
    )
}