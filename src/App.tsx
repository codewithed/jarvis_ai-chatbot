import React from "react"
import Header from "./Header"
import Dialog from "./Dialog"
import axios from 'axios';
import PromptBar from "./PromptBar";


function App() {
  type Message = { 
    role: string 
    content: string
  }

  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isLoading, setIsLoading] = React.useState(false)

  function sendToChatGPT(messagesToSend) {
    const options = {
      method: 'POST',
      url: "https://jarvis-server2.onrender.com/api",
      data: {
        messages: messagesToSend,
      },
      headers: {
        "Content-type": "application/json",
      },
    }
    axios.request(options)
      .then((response) => { 
        // handle response
      const message : Message = response.data
       setMessages((prevMessages) => ([...prevMessages, message]))
       //
       setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
      }); 
  }

  function getMessages() {
    return messages
  }

  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog messages={messages}/>
      <PromptBar
      sendMessage={sendToChatGPT} 
      messages={messages}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      setMessages={setMessages}/>  
    </div>
  )
}

export default App

