import ChatAvatar from './assets/chatGPT-icon.svg'
import React from 'react'

type MessageProps = {
    bgColor: string
    role: string
    content: string
}

export default function Message(props :MessageProps){
    return (
        <div className={`flex text-[whitesmoke] ${props.bgColor} shadow-lg p-2`}>
            {props.role === 'assistant' && <img src={ChatAvatar} className=""></img>}
            <p className="p-2 question-text">{props.content}</p>
        </div>
    )
}