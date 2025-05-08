import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import Terminal from './Terminal';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => {
  const installCode = `npm install base-mcp`;
  const initCode = `npx base-mcp --init`;
  const usageCode = `import { BaseMCP } from 'base-mcp';

const baseMCP = new BaseMCP({
  baseUrl: 'https://api.base.org',
  apiKey: process.env.BASEMCP_API_KEY
});

// Now you can use baseMCP to interact with the blockchain
const balance = await baseMCP.getBalance('0x123...');`;

  return (
    <section id="get-started" className="py-24 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-shimmer animate-text-shimmer rounded-lg opacity-35 blur-sm"></span>
              <span className="relative z-10">Get Started</span>
            </span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Start building with BaseMCP in minutes
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">1. Install the package</h3>
                <Terminal code={installCode} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">2. Initialize your project</h3>
                <Terminal code={initCode} />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">3. Start using BaseMCP</h3>
              <Terminal code={usageCode} />
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  <Button className="w-full bg-cyver-cyan hover:bg-blue-600 hover:shadow-lg hover:shadow-cyver-cyan/20 text-white transition-all duration-300" asChild>
                    <a href="https://docs.base.org/use-cases/defi-your-app" target="_blank" rel="noopener noreferrer" className="w-full">
                      Read the Docs
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-muted hover:border-cyver-purple/30 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/base/base-mcp?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                      Explore GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
