import React from 'react';
import FeatureCard from './FeatureCard';
import AnimateOnScroll from './AnimateOnScroll';
import { Wallet, FileCode, Brain, Image, Coins, CreditCard, Puzzle, MessageSquare, Link } from 'lucide-react';

const Features: React.FC = () => {
  const buildFeatures = [
    {
      icon: <FileCode />,
      title: "Smart Contracts",
      description: "Deploy and interact with smart contracts directly from AI agents.",
      category: "Build"
    },
    {
      icon: <Puzzle />,
      title: "Modular Tools",
      description: "Build custom actions and extend functionality for your use case.",
      category: "Build"
    },
    {
      icon: <Brain />,
      title: "Claude & Cursor Integration",
      description: "Seamless integration with popular AI agents and tools.",
      category: "Build"
    }
  ];

  const exploreFeatures = [
    {
      icon: <Wallet />,
      title: "Wallet Operations",
      description: "Manage crypto balances and execute transfers seamlessly.",
      category: "Explore"
    },
    {
      icon: <Image />,
      title: "NFT Management",
      description: "Handle ERC721/1155 tokens and collections with ease.",
      category: "Explore"
    },
    {
      icon: <Coins />,
      title: "Morpho Lending Vaults",
      description: "Interact with DeFi protocols for lending and earning yield.",
      category: "Explore"
    }
  ];

  const additionalFeatures = [
    {
      icon: <CreditCard />,
      title: "Coinbase Onramp Flow",
      description: "Direct integration with Coinbase for fiat onramps.",
      category: "Integrate"
    },
    {
      icon: <MessageSquare />,
      title: "Farcaster Username Resolution",
      description: "Resolve blockchain addresses from Farcaster social handles.",
      category: "Integrate"
    },
    {
      icon: <Link />,
      title: "Buy OpenRouter Credits",
      description: "Purchase API credits for OpenRouter AI services.",
      category: "Integrate"
    }
  ];

  const allFeatures = [...buildFeatures, ...exploreFeatures, ...additionalFeatures];

  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-center">
              We are bringing the world onchain to{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyver-cyan to-cyver-purple bg-clip-text text-transparent">
                  empower agents
                </span>
              </span>
              .
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              BaseMCP provides AI agents with comprehensive blockchain capabilities through a unified interface
            </p>
          </AnimateOnScroll>

          {/* Build Section */}
          <AnimateOnScroll delay={100}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-cyver-cyan to-cyver-cyan bg-clip-text text-transparent">
                  Build
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buildFeatures.map((feature, index) => (
                  <AnimateOnScroll key={feature.title} delay={150 + index * 50}>
                    <FeatureCard 
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Explore Section */}
          <AnimateOnScroll delay={200}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-cyver-purple to-cyver-purple bg-clip-text text-transparent">
                  Explore
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exploreFeatures.map((feature, index) => (
                  <AnimateOnScroll key={feature.title} delay={250 + index * 50}>
                    <FeatureCard 
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Integrate Section */}
          <AnimateOnScroll delay={300}>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-cyver-cyan to-cyver-purple bg-clip-text text-transparent">
                  Integrate
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalFeatures.map((feature, index) => (
                  <AnimateOnScroll key={feature.title} delay={350 + index * 50}>
                    <FeatureCard 
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Features;
