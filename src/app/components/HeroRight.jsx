"use client";
import { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

const ChatDemo = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col justify-center h-full px-8 lg:px-16 bg-gray-850 border-l-2 border-gray-800">
      <div className="rounded-2xl p-6 mx-auto w-full">
        {/* Chat Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="text-blue-400">
            <Sparkles size={20} />
          </div>
          <span className="text-white text-lg">
            How can I assist you today?
          </span>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Send a message..."
            className="w-full bg-gray-800 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-400 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute bottom-4 right-4 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors duration-200">
            <ArrowUp size={16} className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatDemo;
