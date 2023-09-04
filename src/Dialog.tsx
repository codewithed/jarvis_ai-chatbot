import React from "react";
import Message from "./Message";

type Message = { 
    role : string 
    content: string
}

interface DialogProps {
    messages: Message[];
}

export default function Dialog({messages} :DialogProps){
    const messageComponents = messages.map((message: Message) => {
    return(
    <Message 
    key = {crypto.randomUUID()}
    role={message.role}
    content={message.content} 
    bgColor={message.role === 'user' ? "bg-[#343541]" : "bg-[#444654]"}/>
 )})
    return (
        <div className="flex-grow  min-h-[76vh] bg-[#262627] overflow-auto gap-1">
            {messageComponents}
        </div>
    )
}