import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Bot, Database, Code, Zap, Globe, Shield } from 'lucide-react';

const WhatIsBaseMCP: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll delay={100}>
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-shimmer animate-text-shimmer rounded-lg opacity-35 blur-sm"></span>
              <span className="relative z-10">What is BaseMCP?</span>
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimateOnScroll delay={300} className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-cyver-cyan/10 rounded-lg">
                    <Bot className="h-5 w-5 text-cyver-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      MCP Server for AI Agents
                    </h3>
                    <p className="text-muted-foreground">
                      BaseMCP is an MCP server that extends any AI's onchain capabilities, enabling them to interact directly with blockchain networks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-cyver-purple/10 rounded-lg">
                    <Database className="h-5 w-5 text-cyver-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Complete Blockchain Toolkit
                    </h3>
                    <p className="text-muted-foreground">
                      Interact with wallets, contracts, tokens, and real-world APIs through a unified interface designed for AI agents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-cyver-cyan/10 rounded-lg">
                    <Code className="h-5 w-5 text-cyver-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Built on Modern Infrastructure
                    </h3>
                    <p className="text-muted-foreground">
                      Leverages Base Network, AgentKit, and Coinbase to provide secure, reliable onchain execution for AI tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300} className="order-1 lg:order-2">
            <div className="relative">
              {/* Animated graphic - Fixed animation */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-card rounded-full border-4 border-cyver-cyan flex items-center justify-center z-10 animate-glow-pulse hover:scale-105 transition-transform duration-500" style={{ animationDuration: '3s' }}>
                  <span className="font-bold text-lg">BaseMCP</span>
                </div>

                {/* Outer ring - with float animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                  <div className="w-full h-full border-2 border-dashed border-cyver-purple/30 rounded-full animate-float" style={{ animationDuration: '8s' }}></div>
                </div>

                {/* Node 1: AI */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-card p-3 rounded-full border-2 border-cyver-cyan shadow-lg shadow-cyver-cyan/20 z-20 animate-float hover:scale-110 transition-transform duration-300" style={{ animationDuration: '10s' }}>
                  <Bot className="h-8 w-8" />
                </div>

                {/* Node 2: Blockchain */}
                <div className="absolute bottom-20 left-20 bg-card p-3 rounded-full border-2 border-cyver-purple shadow-lg shadow-cyver-purple/20 z-20 animate-float hover:scale-110 transition-transform duration-300" style={{ animationDuration: '10s', animationDelay: '-4s' }}>
                  <Database className="h-8 w-8" />
                </div>

                {/* Node 3: Coinbase */}
                <div className="absolute bottom-20 right-20 bg-card p-3 rounded-full border-2 border-cyver-cyan shadow-lg shadow-cyver-cyan/20 z-20 animate-float hover:scale-110 transition-transform duration-300" style={{ animationDuration: '10s', animationDelay: '-8s' }}>
                  <Code className="h-8 w-8" />
                </div>

                {/* Connecting lines */}
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <line x1="115" y1="20" x2="100" y2="88" stroke="url(#cyan-gradient)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="50" y1="140" x2="88" y2="100" stroke="url(#purple-gradient)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="145" y1="140" x2="112" y2="100" stroke="url(#cyan-gradient)" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="100" y1="76" x2="100" y2="36" stroke="url(#cyan-gradient)" strokeWidth="2" strokeDasharray="4,4" />
                    <defs>
                      <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#9b87f5" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Base-inspired three-column benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <AnimateOnScroll delay={400}>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-cyver-cyan/10 rounded-full">
                  <Zap className="h-8 w-8 text-cyver-cyan" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Built for Speed</h3>
              <p className="text-muted-foreground">
                Sub-cent transaction costs and instant execution help AI agents operate efficiently at scale.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={500}>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-cyver-purple/10 rounded-full">
                  <Globe className="h-8 w-8 text-cyver-purple" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Global Reach</h3>
              <p className="text-muted-foreground">
                Connect AI agents to the Base ecosystem with onramps in 190+ countries and millions of users.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={600}>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-cyver-cyan/10 rounded-full">
                  <Shield className="h-8 w-8 text-cyver-cyan" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Built on Ethereum L2, powered by Base Network, and backed by Coinbase's infrastructure.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBaseMCP; 