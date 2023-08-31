import Send from './assets/send-icon.svg'
import React from 'react';

export default function PromptBar(props: any) {
    let messages = props.messages
    return (   
        <div className="flex-col p-4">
            <div className='w-[100%] flex justify-center'>
            <div className='flex items-center justify-center gap-3 bg-[#444654] rounded-lg drop-shadow-2xl p-2 w-[fit-content]'>
            <textarea className='min-w-[70vw] h-[50px] bg-transparent text-[whitesmoke] overflow-y-hidden'
            value={props.value}
            // set props.value to e.target.value
            // set props.SetCurrentMessage to value
            onChange={(e) => props.setCurrentMessage(e.target.value)}></textarea>
            <button onClick={() => {
                props.setMessages((messages) => [...messages, {role: "user", content: props.value}]);
                props.sendMessage()
                props.setCurrentMessage("")
            }}>
                <img src={Send} className="h-[20px]"></img>
            </button>
            </div>
            </div>
          <p className="p-3 text-center text-sm text-[whitesmoke]">Made with ❤️ by <a href="https://github.com/codewithed">@codewithed</a></p>
        </div>
    )
}