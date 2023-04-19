import React from "react"
import Header from "./Header"
import PromptBar from "./PromptBar"
import Dialog from "./Dialog"

type message = {
  role: string;
  content: string;
}

const [messages, setMessages] = React.useState([
  {
    "role": "user",
    "content": "What is AI?",
  }
])

async function giveMessagesToChatGPT(){
  const systemMessage: message = {
    role: "system",
    content: "You are a helpful AI assistant called Jarvis. Explain all concepts in a clear way"
  }
  
  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,
      ...messages]
  }
  
  await fetch("https://api.openai.com/v1/chat/completions",{
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.api_key,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  })
}


function App() {
  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog />
      <PromptBar />
      <p className="p-1 text-center text-sm text-[whitesmoke]">Made with ❤️ by <a href="https://github.com/codewithed">@codewithed</a></p>
    </div>
  )
}

export default App
