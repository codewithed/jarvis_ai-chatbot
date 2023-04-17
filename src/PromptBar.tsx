import send from './assets/send-icon.svg'

export default function PromptBar(){
    return (
        <div className="">
            <input type="text"></input>
            <img src={send}></img>
        </div>
    )
}