import React from "react"
import Header from "./Header"
import Send from './assets/send-icon.svg'
import Dialog from "./Dialog"
import axios from 'axios';
import PromptBar from "./PromptBar";



function App() {
  const [messages, setMessages] = React.useState([])

  const [currentMessage, setCurrentMessage] = React.useState("");

  function sendToChatGPT() {
    // setting the api endpoint url
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // setting request data
    const data = {
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 50
    }

    // Making the API request
    axios.post(apiUrl, data, { headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'
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

  React.useEffect(() => {console.log(import.meta.env.VITE_KEY)} )
  // a function that renders messages everytime messages state changes
  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog />
      <PromptBar value={currentMessage} 
      sendMessage={sendToChatGPT} setCurrentMessage={setCurrentMessage} 
      setMessages={setMessages} messages={messages}/>
    </div>
  )
}

export default App
