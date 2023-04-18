import send from './assets/send-icon.svg'

export default function PromptBar(){
    return (
<div className="flex items-center justify-center gap-3 p-4">
            <textarea className='w-[70%] h-[50px] rounded-lg drop-shadow-2xl bg-[#444654]'></textarea>
            <button><img src={send} className="h-[25px]"></img></button>
        </div>
    )
}

/*  */

        // <div className="flex items-center w-[90vw] py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"><textarea data-id="5d942b2a-22a3-4d8d-b37b-e6747e94231c" placeholder="Send a message..." className="w-full p-0 pl-2 m-0 bg-transparent border-0 resize-none pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0 max-h-[200px] h-[24px] overflow-y-hidden"></textarea><button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div>