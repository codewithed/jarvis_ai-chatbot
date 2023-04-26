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
    // setting the api endpoint url
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = "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"

    // setting request data
    const data = {
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 50
    }

    // Making the API request
    axios.post(apiUrl, data, { headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY
    }})
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
