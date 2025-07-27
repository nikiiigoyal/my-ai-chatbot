import React, { useState } from "react";
import {
  ArrowUp,
  Sparkles,
  X,
  Plus,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Paperclip,
} from "lucide-react";

const ChatTab = ({ id, title, isActive, onClose, onClick }) => (
  <div
    className={`flex items-center gap-2 px-4 py-2 rounded-t-lg cursor-pointer border-b-2 ${
      isActive
        ? "bg-[hsla(0,0%,8%,1)] border-blue-500 text-white"
        : "bg-[hsla(0,0%,4%,1)] border-transparent text-gray-400 hover:text-gray-300"
    }`}
    onClick={onClick}
  >
    <span className="text-sm">{title}</span>
    {id !== "main" && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose(id);
        }}
        className="ml-2 hover:bg-gray-600 rounded p-1"
      >
        <X size={12} />
      </button>
    )}
  </div>
);

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
    <div className="flex flex-col max-w-[80%]">
      {!isUser && (
        <div className="flex items-center gap-2 mb-2">
          <div className="text-blue-400">
            <Sparkles size={16} />
          </div>
          <span className="text-gray-300 text-sm">Assistant</span>
        </div>
      )}

      <div
        className={`p-4 rounded-lg ${
          isUser
            ? "bg-blue-600 text-white ml-auto"
            : "bg-[hsla(0,0%,8%,1)] text-gray-100 border border-[hsla(0,0%,15%,1)]"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm">{message}</p>
      </div>

      {!isUser && (
        <div className="flex items-center gap-2 mt-2">
          <button className="p-1 hover:bg-gray-700 rounded">
            <Copy size={14} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ThumbsUp size={14} className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ThumbsDown size={14} className="text-gray-400" />
          </button>
        </div>
      )}
    </div>
  </div>
);

const ChatWindow = ({
  tabId,
  messages,
  input,
  onInputChange,
  onSubmit,
  isLoading,
}) => (
  <div className="flex flex-col h-full">
    {/* Messages Container */}
    <div className="flex-1 overflow-y-auto px-6 py-4">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-blue-400">
              <Sparkles size={24} />
            </div>
            <span className="text-white text-xl">
              Hello! How can I assist you today?
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.content}
              isUser={message.role === "user"}
            />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[hsla(0,0%,8%,1)] border border-[hsla(0,0%,15%,1)] p-4 rounded-lg">
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
      )}
    </div>

    {/* Input Section */}
    <div className="px-6 pb-6">
      <div className="relative">
        <div className="relative">
          <textarea
            value={input}
            onChange={onInputChange}
            placeholder="Send a message..."
            className="w-full bg-[hsla(0,0%,12%,1)] border border-[hsla(0,0%,20%,1)] rounded-xl px-4 py-4 pr-20 pl-12 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-[hsla(0,0%,30%,1)] text-sm min-h-[60px] max-h-[200px]"
            disabled={isLoading}
            rows={1}
            style={{ height: "auto" }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 200) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e);
              }
            }}
          />

          <button
            type="button"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-600 rounded"
          >
            <Paperclip size={16} className="text-gray-400" />
          </button>

          <button
            onClick={onSubmit}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[hsla(0,0%,16%,1)] border border-[hsla(0,0%,25%,1)] hover:bg-[hsla(0,0%,20%,1)] p-2 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <ArrowUp size={16} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function ChatTabsComponent() {
  const [tabs, setTabs] = useState([
    { id: "main", title: "Chat", messages: [], input: "", isLoading: false },
  ]);
  const [activeTab, setActiveTab] = useState("main");

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Create new tab if typing in main tab and it's empty
    if (
      activeTab === "main" &&
      activeTabData.messages.length === 0 &&
      value.trim()
    ) {
      const newTabId = `chat-${Date.now()}`;
      const newTab = {
        id: newTabId,
        title: `Chat ${tabs.length}`,
        messages: [],
        input: value,
        isLoading: false,
      };

      setTabs((prev) => [...prev, newTab]);
      setActiveTab(newTabId);
      return;
    }

    setTabs((prev) =>
      prev.map((tab) => (tab.id === activeTab ? { ...tab, input: value } : tab))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTab = tabs.find((tab) => tab.id === activeTab);
    if (!currentTab.input.trim() || currentTab.isLoading) return;

    const userMessage = { role: "user", content: currentTab.input };

    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === activeTab
          ? {
              ...tab,
              messages: [...tab.messages, userMessage],
              input: "",
              isLoading: true,
            }
          : tab
      )
    );

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content: `Hello! How can I assist you today?`,
      };

      setTabs((prev) =>
        prev.map((tab) =>
          tab.id === activeTab
            ? {
                ...tab,
                messages: [...tab.messages, aiMessage],
                isLoading: false,
              }
            : tab
        )
      );
    }, 1000);
  };

  const closeTab = (tabId) => {
    if (tabId === "main") return;

    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));

    if (activeTab === tabId) {
      setActiveTab("main");
    }
  };

  const addNewTab = () => {
    const newTabId = `chat-${Date.now()}`;
    const newTab = {
      id: newTabId,
      title: `Chat ${tabs.length}`,
      messages: [],
      input: "",
      isLoading: false,
    };

    setTabs((prev) => [...prev, newTab]);
    setActiveTab(newTabId);
  };

  return (
    <div className="flex flex-col h-screen bg-[hsla(0,0%,4%,1)] text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[hsla(0,0%,6%,1)] border-b border-[hsla(0,0%,15%,1)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <select className="bg-[hsla(0,0%,12%,1)] border border-[hsla(0,0%,20%,1)] rounded px-3 py-1 text-sm text-white">
            <option>Chat model</option>
          </select>

          <select className="bg-[hsla(0,0%,12%,1)] border border-[hsla(0,0%,20%,1)] rounded px-3 py-1 text-sm text-white">
            <option>🔒 Private</option>
          </select>
        </div>

        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
          Deploy with Vercel
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-end bg-[hsla(0,0%,4%,1)] px-4 border-b border-[hsla(0,0%,15%,1)]">
        {tabs.map((tab) => (
          <ChatTab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={activeTab === tab.id}
            onClose={closeTab}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}

        <button
          onClick={addNewTab}
          className="flex items-center justify-center w-8 h-8 ml-2 hover:bg-gray-700 rounded-t-lg"
        >
          <Plus size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-hidden">
        <ChatWindow
          tabId={activeTab}
          messages={activeTabData.messages}
          input={activeTabData.input}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={activeTabData.isLoading}
        />
      </div>
    </div>
  );
}
