"use client";
import React, { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

export default function ChatInputComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input, id: Date.now() };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content: `Hello! How can I assist you today?`,
        id: Date.now() + 1,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center bg-[hsla(0,0%,4%,1)] border-l-0 border-gray-800">
      <div className="md:p-6 flex flex-col justify-around ml-2 w-full max-w-4xl">
        {/* Chat Header */}
        <div className="flex flex-row items-center gap-3 mb-4 md:mb-6">
          <div className="text-blue-400">
            <Sparkles size={20} />
          </div>
          <span className="text-white text-base md:text-lg">
            How can I assist you today?
          </span>
        </div>

        {/* Messages Container */}
        <div className="overflow-y-auto md:space-y-4 mb-4 md:mb-6 px-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400">{/* Empty state */}</div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] md:max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm md:text-base">
                    {message.content}
                  </p>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="relative px-2">
          <div className="relative">
            <textarea
              value={input}
              onChange={handleInputChange}
              placeholder="Send a message..."
              className="w-[80%] h-[120px] bg-[hsla(0,0%,16%,1)] rounded-xl px-3 py-3 md:py-4 pr-12 text-white placeholder-gray-400 focus:outline-none text-sm md:text-base resize-none"
              disabled={isLoading}
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="absolute bottom-8 right-[70px] md:bottom-4 lg:right-28 md:right-[106px] bg-[hsla(0,0%,10%,1)] border border-[hsla(0,0%,15%,1)] hover:bg-gray-600 p-2 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              ) : (
                <ArrowUp size={16} className="text-gray-300 bg-red" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
