import React from "react"
import Header from "./Header"
import Dialog from "./Dialog"
import axios from 'axios';
import PromptBar from "./PromptBar";


function App() {
  type Message = { 
    role : string 
    content: string
    finish_reason?: string
    index?: number
  }

  const [messages, setMessages] = React.useState<Message[]>([])

  const [currentMessage, setCurrentMessage] = React.useState("");

  function sendToChatGPT() {
    const options = {
      url: "http://localhost:3000/api",
      messages: messages
    }
    axios.request(options)
      .then((response) => { 
        // handle response
        const message = response.data.choices[0].message
        setMessages((prevMessage) => ({...prevMessage, message}))
      })
      .catch((error) => {
        console.error(error);
      });
    
  }

  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog messages={messages} />
      <PromptBar value={currentMessage} 
      sendMessage={sendToChatGPT} setCurrentMessage={setCurrentMessage} 
      setMessages={setMessages} messages={messages}/> 
      
    </div>
  )
}

export default App
