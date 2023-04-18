import React from "react"
import Header from "./Header"
import PromptBar from "./PromptBar"
import Dialog from "./Dialog"


function App() {
  return (
    <div className="flex-col bg-[#343541] min-h-screen min-w-[100vw]">
      <Header />
      <Dialog />
      <PromptBar />
      <p className="p-1 text-center text-[whitesmoke]">Made with ❤️ by <a href="https://github.com/codewithed">@codewithed</a></p>
    </div>
  )
}

export default App
