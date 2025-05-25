import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { User, Bot, CheckCircle, Clock } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'agent' | 'system';
  content: string;
  timestamp?: string;
  status?: 'pending' | 'complete';
  txHash?: string;
}

const CodeExampleSection: React.FC = () => {
  const [activeChat, setActiveChat] = useState(0);

  const chatExamples = [
    {
      title: "Deploy Smart Contract",
      messages: [
        {
          type: 'user' as const,
          content: "I need to deploy an ERC20 token contract for my project called CyberToken with symbol CYBR",
          timestamp: "2:34 PM"
        },
        {
          type: 'agent' as const,
          content: "I'll help you deploy an ERC20 token contract. Let me set that up with the following parameters:\n• Name: CyberToken\n• Symbol: CYBR\n• Decimals: 18\n• Initial Supply: 1,000,000 tokens",
          timestamp: "2:34 PM"
        },
        {
          type: 'system' as const,
          content: "🔄 Deploying contract to Base network...",
          status: 'pending' as const,
          timestamp: "2:34 PM"
        },
        {
          type: 'system' as const,
          content: "✅ Contract deployed successfully!\nAddress: 0x3a9d7cA44F3DE8BF0eD79AA32f42F5921105845F\nTransaction: 0x4a3b2c1d0e5f6789abc...",
          status: 'complete' as const,
          timestamp: "2:35 PM",
          txHash: "0x4a3b2c1d0e5f6789abc"
        }
      ]
    },
    {
      title: "Transfer Crypto",
      messages: [
        {
          type: 'user' as const,
          content: "Transfer 0.05 ETH to wallet address 0xABC123def456ghi789jkl012mno345pqr678stu",
          timestamp: "3:12 PM"
        },
        {
          type: 'agent' as const,
          content: "I'll process that ETH transfer for you. Let me confirm the details:\n• Amount: 0.05 ETH\n• To: 0xABC123...678stu\n• Network: Base",
          timestamp: "3:12 PM"
        },
        {
          type: 'system' as const,
          content: "🔄 Initiating transfer...",
          status: 'pending' as const,
          timestamp: "3:12 PM"
        },
        {
          type: 'system' as const,
          content: "✅ Transfer completed!\nAmount: 0.05 ETH sent\nTransaction: 0x7f8e9d2c3b4a5e6f\nGas fee: $0.002",
          status: 'complete' as const,
          timestamp: "3:12 PM",
          txHash: "0x7f8e9d2c3b4a5e6f"
        }
      ]
    },
    {
      title: "NFT Transfer",
      messages: [
        {
          type: 'user' as const,
          content: "I want to transfer my CryptoPunk #1234 to my friend's wallet 0x987fgh654dcb321ijk890lmn567opq234rst890",
          timestamp: "4:45 PM"
        },
        {
          type: 'agent' as const,
          content: "I'll help you transfer your CryptoPunk NFT. Let me verify the details:\n• Collection: CryptoPunks\n• Token ID: #1234\n• To: 0x987fgh...rst890",
          timestamp: "4:45 PM"
        },
        {
          type: 'system' as const,
          content: "🔄 Processing NFT transfer...",
          status: 'pending' as const,
          timestamp: "4:45 PM"
        },
        {
          type: 'system' as const,
          content: "✅ NFT transferred successfully!\nCryptoPunk #1234 → 0x987fgh...rst890\nTransaction: 0x9a8b7c6d5e4f3g2h\nGas fee: $0.001",
          status: 'complete' as const,
          timestamp: "4:46 PM",
          txHash: "0x9a8b7c6d5e4f3g2h"
        }
      ]
    }
  ];

  const ChatBubble = ({ message, isUser }: { message: ChatMessage; isUser: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
          <img 
            src="/logos/claude.ico" 
            alt="Claude" 
            className="w-5 h-5"
          />
        </div>
      )}
      
      <div className={`max-w-[75%] ${isUser ? 'order-1' : ''}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-[#2563eb] text-white ml-auto'
              : message.type === 'system'
              ? 'bg-[#1a1a1a] border border-[#2a2a2a] text-[#a1a1a1]'
              : 'bg-[#1a1a1a] border border-[#2a2a2a] text-[#e5e5e5]'
          }`}
        >
          {message.type === 'system' && message.status === 'pending' && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 animate-spin text-[#6366f1]" />
              <span>{message.content}</span>
            </div>
          )}
          {message.type === 'system' && message.status === 'complete' && (
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-[#10b981] mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <div className="whitespace-pre-line">{message.content}</div>
                {message.txHash && (
                  <div className="text-xs text-[#6366f1] hover:text-[#818cf8] cursor-pointer">
                    View on BaseScan →
                  </div>
                )}
              </div>
            </div>
          )}
          {message.type !== 'system' && (
            <div className="whitespace-pre-line leading-relaxed">{message.content}</div>
          )}
        </div>
        <div className="text-xs text-[#6b7280] mt-1.5 px-2">
          {message.timestamp}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#2563eb] flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="examples" className="relative py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-shimmer animate-text-shimmer rounded-lg opacity-35 blur-sm"></span>
              <span className="relative z-10">Live Examples</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            See how AI agents use BaseMCP to execute blockchain operations through natural conversation
          </p>
        </AnimateOnScroll>

        {/* Chat Selection Tabs */}
        <AnimateOnScroll delay={200}>
          <div className="flex justify-center mb-8">
            <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-[#2a2a2a]">
              {chatExamples.map((chat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveChat(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeChat === index
                      ? 'bg-[#2563eb] text-white shadow-lg'
                      : 'text-[#a1a1a1] hover:text-[#e5e5e5] hover:bg-[#2a2a2a]'
                  }`}
                >
                  {chat.title}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Chat Interface */}
        <AnimateOnScroll delay={300}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
                  </div>
                  <div className="font-medium text-[#e5e5e5] flex items-center gap-2">
                    <img src="/logos/claude.ico" alt="Claude" className="w-4 h-4" />
                    Claude - {chatExamples[activeChat].title}
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-xs text-[#6b7280]">
                    <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                    Connected to Base Network
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[450px] max-h-[500px] overflow-y-auto bg-[#0f0f0f]">
                {chatExamples[activeChat].messages.map((message, index) => (
                  <ChatBubble
                    key={index}
                    message={message}
                    isUser={message.type === 'user'}
                  />
                ))}
              </div>

              {/* Chat Input (Static for demo) */}
              <div className="border-t border-[#2a2a2a] p-4 bg-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[#6b7280] text-sm">
                    Type your message to Claude...
                  </div>
                  <button className="px-4 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg text-sm font-medium transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CodeExampleSection;
