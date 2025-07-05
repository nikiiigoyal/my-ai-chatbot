"use client";

import { useChat } from "ai/react";
import { ArrowUp, Sparkles } from "lucide-react";

export default function ChatDemo() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
    <div className="flex flex-col h-full bg-gray-850 border-l-2 border-gray-800">
      <div className="rounded-2xl p-4 md:p-6 mx-auto w-full h-full flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="text-blue-400">
            <Sparkles size={20} />
          </div>
          <span className="text-white text-base md:text-lg">
            How can I assist you today?
          </span>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto space-y-3 md:space-y-4 mb-4 md:mb-6 px-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-8">
              <p>Start a conversation with AI!</p>
            </div>
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
        <form onSubmit={handleSubmit} className="relative px-2">
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Send a message..."
            className="w-full bg-gray-800 rounded-xl px-4 py-3 md:py-4 pr-12 text-white placeholder-gray-400 resize-none h-20 md:h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            disabled={isLoading}
            rows={3}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute bottom-3 md:bottom-4 right-4 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            ) : (
              <ArrowUp size={16} className="text-gray-300" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
