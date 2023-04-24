import Message from "./Message";

type Message = { 
    role : string 
    content: string
    finish_reason?: string
    index?: number
}

export default function Dialog(props: any){
    return (
        <div className="flex-grow  min-h-[76vh] bg-[#262627] overflow-auto">
            {props.messages.map((message: Message) => {message.content !== "" && <Message 
                key = {crypto.randomUUID()}
                content={message.content} 
                bgColor={message.role === 'user' ? "bg-[#343541]" : "bg-[#444654]"}/>}
             )}
        </div>
    )
}