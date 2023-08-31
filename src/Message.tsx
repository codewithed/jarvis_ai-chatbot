import ChatAvatar from './assets/chatGPT-icon.svg'
import UserAvatar from './assets/user-avatar.png'
import React from 'react'


export default function Response(props :any){
    return (
        <div className={`flex text-[whitesmoke] ${props.bgColor} shadow-lg p-1`}>
            <img src={props.role === 'user' ? UserAvatar : ChatAvatar} className=""></img>
            <p className="p-2 question-text">{props.content}</p>
        </div>
    )
}