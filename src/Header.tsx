import ChatAvatar from './assets/chatGPT-icon.svg'
export default function Header(){
    return (
        <div className="flex items-baseline justify-center">
            <h1 className='text-center text-[whitesmoke] text-2xl p-4'>edGPT <img src={ChatAvatar} className='inline w-8'></img></h1>
        </div>
    )
} 