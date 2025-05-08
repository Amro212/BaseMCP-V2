import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Terminal from './Terminal';
import AgentBelt from './AgentBelt';
import { ArrowRight, Github } from 'lucide-react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x - rect.width / 2);
      mouseY.set(y - rect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const heroCode = `// Initialize BaseMCP server
import { startServer } from 'base-mcp';

startServer({
  port: 3000,
  apiKey: process.env.BASEMCP_API_KEY,
  network: 'mainnet',
  plugins: ['wallet', 'contracts', 'nft']
});

console.log('BaseMCP server running on port 3000');`;

  const rotateX = useTransform(smoothMouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-200, 200], [-5, 5]);

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 py-16 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-cyver-cyan to-cyver-purple bg-clip-text text-transparent shimmer relative z-10">
                BaseMCP is for every agent.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyver-cyan/20 to-cyver-purple/20 filter blur-xl opacity-40 animate-pulse"></div>
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-cyver-cyan/20 rounded-full px-4 py-2 hover:border-cyver-cyan/40 transition-all duration-300">
                <div className="w-3 h-3 bg-cyver-cyan rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-cyver-cyan">Built for Base Network</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bringing AI agents onchain to <span className="text-cyver-cyan font-semibold">unleash creativity</span>. 
              Deploy contracts, manage wallets, transfer NFTs, and more — directly onchain via Base and Coinbase.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full mb-10"
            >
              <AgentBelt />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="gap-2 bg-cyver-cyan hover:bg-blue-600 hover:shadow-lg hover:shadow-cyver-cyan/20 text-white transition-all duration-300 px-8 py-3 text-lg"
                  asChild
                >
                  <a href="https://github.com/base/base-mcp?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    Start Building
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline" 
                  className="gap-2 hover:border-cyver-purple/30 hover:bg-muted transition-all duration-300 px-8 py-3 text-lg border-2"
                  asChild
                >
                  <a href="https://www.npmjs.com/package/base-mcp" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Install via NPM
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 relative"
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyver-cyan to-cyver-purple rounded-lg blur opacity-30 animate-glow-pulse"></div>
            <Terminal code={heroCode} className="relative" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
