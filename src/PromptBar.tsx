import Send from './assets/send-icon.svg'

export default function PromptBar(props: any) {
    return (
        <div className="flex-col items-center justify-center gap-3 p-4">
        <textarea className='w-[70%] h-[50px] rounded-lg drop-shadow-2xl bg-[#444654]' value={props.value} onChange={(e) => props.onChange(e.target.value)}></textarea>
            <button onClick={props.onClick}><img src={Send} className="h-[25px]"></img></button>
          <p className="p-1 text-center text-sm text-[whitesmoke]">Made with ❤️ by <a href="https://github.com/codewithed">@codewithed</a></p>
      </div>
    )
}