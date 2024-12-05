"use client";

import { Message, useChat } from "ai/react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

const ChatWrapper = () => {
  const { messages, handleInputChange, input, handleSubmit, setInput } =
    useChat({
      api: "/api/chat",
    });
  return (
    <div className="absolute top-0 w-full">
      <div className="relative min-h-screen pt-[64px] bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2 ">
        <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
          <Messages messages={messages} />
        </div>
        <ChatInput
          handleInputChange={handleInputChange}
          input={input}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default ChatWrapper;
