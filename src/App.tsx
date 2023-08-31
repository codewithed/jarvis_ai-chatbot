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

  const [messages, setMessages] = React.useState([])

  const [currentMessage, setCurrentMessage] = React.useState("");

  function sendToChatGPT() {
    const options = {
      method: 'POST',
      url: "http://localhost:3000/api",
      data: {
        messages: messages,
      },
      headers: {
        "Content-type": "application/json",
      },
    }
    axios.request(options)
      .then((response) => { 
        // handle response
        const message = response
        setMessages((prevMessages) => ({...prevMessages, message}))
        console.log(messages)
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

