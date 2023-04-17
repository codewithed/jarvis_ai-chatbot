import ChatAvatar from './assets/chatGPT-icon.svg'
export default function Header(){
    return (
        <div className="header">
            <h1>edGPT <img src={ChatAvatar} className='inline'></img></h1>
        </div>
    )
}