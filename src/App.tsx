import React from "react"
import Header from "./Header"
import PromptBar from "./PromptBar"
import Dialog from "./Dialog"


function App() {
  return (
    <div className="flex-col bg-[#161617] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog />
      <PromptBar />
    </div>
  )
}

export default App
