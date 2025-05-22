import * as React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIsBaseMCP from '@/components/WhatIsBaseMCP';
import Multilingual from '@/components/Multilingual';
import Features from '@/components/Features';
import TransactionCost from '@/components/TransactionCost';
import CodeExampleSection from '@/components/CodeExampleSection';
import HowItWorks from '@/components/HowItWorks';
import Extensibility from '@/components/Extensibility';
import Security from '@/components/Security';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ParticleBackground from '@/components/ParticleBackground';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Page transition effect */}
      <PageTransition />
      
      {/* Universal particle background - stays fixed across all sections */}
      <ParticleBackground particleCount={75} />
      
      <Navigation />
      <Hero />
      <WhatIsBaseMCP />
      <Multilingual />
      <Features />
      <TransactionCost />
      <CodeExampleSection />
      <HowItWorks />
      <Extensibility />
      <Security />
      <GetStarted />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Index;
