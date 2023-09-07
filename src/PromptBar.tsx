import Send from './assets/send-icon.svg'
import React from 'react';

export default function PromptBar(props: any) {
    const [currentMessage, setCurrentMessage] = React.useState("")
    
    function handleSendMessage() {
        const newUserMessage = {role: 'user', content: currentMessage}
        const updatedMessages = [...props.messages, newUserMessage]
        props.setMessages(updatedMessages)
        props.sendMessage(updatedMessages)
        setCurrentMessage("")    
    };

    return (   
        <div className="flex-col p-4">
            <div className='w-[100%] flex justify-center'>
                <div className='flex items-center justify-center gap-3 bg-[#444654] rounded-lg drop-shadow-2xl p-2 w-[fit-content]'>
                    <textarea className='min-w-[70vw] h-[50px] bg-transparent text-[whitesmoke] overflow-y-hidden'
                    // set currentMessage to e.target.value
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}></textarea>
                    <button onClick={() => {
                        if (props.isLoading == false) {
                            handleSendMessage()
                            props.setIsLoading(true)
                        }    
                    }                        
                    }>
                        <img src={Send} className="h-[20px]"></img>
                    </button>
                </div>
            </div>
          <p className="p-3 text-center text-sm text-[whitesmoke]">Made with ❤️ by <a href="https://github.com/codewithed">@codewithed</a></p>
        </div>
    )
}