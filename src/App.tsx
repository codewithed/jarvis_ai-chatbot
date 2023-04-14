import React from "react"
import Header from "./Header"
import ConversationPanel from "./ConversationPanel"
import PromptBar from "./PromptBar"
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <ConversationPanel />
      <PromptBar />
    </div>
  )
}

export default App
