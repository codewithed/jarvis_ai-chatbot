import React from "react"
import Header from "./Header"
import Send from './assets/send-icon.svg'
import Dialog from "./Dialog"
import axios from 'axios';
import PromptBar from "./PromptBar";
import Message from "./Message";



function App() {
  type Message = { 
    role : string
    user: string
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

  let messageComponents: any = []
  // a function that renders messages everytime messages state changes
  React.useEffect(() => {
  messageComponents = messages.map(message => 
  <Message 
    content={message.content} 
    bgColor={message.role === 'user' ? "bg-[#343541]" : "bg-[#444654]"}/>)
  },[messages])


  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog {...messageComponents} />
      <PromptBar value={currentMessage} 
      sendMessage={sendToChatGPT} setCurrentMessage={setCurrentMessage} 
      setMessages={setMessages} messages={messages}/>
    </div>
  )
}

export default App
