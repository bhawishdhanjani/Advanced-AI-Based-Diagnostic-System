import React, { useEffect, useRef } from "react";
import { Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div
      ref={messagesEndRef}
      className="flex max-h-[calc(100vh-192px)] overflow-y-scroll no-scrollbar h-96  flex-1 flex-col"
    >
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-white text-xl">
            You&apos;re all set!
          </h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
