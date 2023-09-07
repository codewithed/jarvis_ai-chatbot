import React from "react";
import Message from "./Message";

type Message = {
  role: string;
  content: string;
  finish_reason?: string;
  index?: number;
}


export default function Dialog({ messages }: any) {
  return (
    <div className="flex-grow h-[75vh] bg-[#262627] overflow-scroll gap-1">
      {messages?.map((message: Message, index: number) =>
        message.content !== "" ? (
          <Message
            key={index} // Generate a unique key for each message
            role={message.role}
            content={message.content}
            bgColor={message.role === 'user' ? "bg-[#444654]" : "bg-[#343541]"}
          />
        ) : null
      )}
    </div>
  );
}
