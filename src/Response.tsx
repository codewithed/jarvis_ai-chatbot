export default function Response(props :any){
    return (
        <div className="question">
            <img src={responseIcon} className=""></img>
            <p className="question-text">{props.response}</p>
        </div>
    )
}