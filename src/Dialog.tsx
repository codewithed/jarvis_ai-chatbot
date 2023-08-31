import React from "react";
import Message from "./Message";

type Message = { 
    role : string 
    content: string
    finish_reason?: string
    index?: number
}

interface DialogProps {
    messages: Message[];
}

export default function Dialog({messages} :DialogProps){
    return (
        <div className="flex-grow  min-h-[76vh] bg-[#262627] overflow-auto gap-1">
            {Array.from(messages).map((message: Message) => message.content !== "" && <Message 
                key = {crypto.randomUUID()}
                content={message.content} 
                bgColor={message.role === 'user' ? "bg-[#343541]" : "bg-[#444654]"}/>
             )}
        </div>
    )
}