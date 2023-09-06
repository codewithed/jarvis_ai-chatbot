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

  function sendToChatGPT(messagesToSend) {
    const options = {
      method: 'POST',
      url: "http://localhost:3000/api",
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
      setMessages={setMessages}/>  
    </div>
  )
}

export default App

