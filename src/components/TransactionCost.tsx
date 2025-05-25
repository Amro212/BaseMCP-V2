import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const TransactionCost: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">
                  <span className="text-foreground">Transactions</span>
                  <br />
                  <span className="text-foreground">below</span>
                  <br />
                  <motion.span 
                    className="relative inline-block bg-gradient-to-r from-cyver-cyan to-cyver-purple bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    one cent
                    <span 
                      className="absolute text-xs font-normal -right-1 top-4" 
                      style={{ color: 'rgb(138, 152, 172)' }}
                    >
                      *
                    </span>
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-cyver-cyan/20 to-cyver-purple/20 rounded-lg blur-sm opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </h2>
                
                <motion.p 
                  className="text-xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  AI agents can execute millions of operations without breaking the bank. 
                  BaseMCP leverages Base Network's ultra-low fees to enable cost-effective automation.
                </motion.p>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-cyver-cyan">$0.001</div>
                  <div className="text-sm text-muted-foreground">Average transaction cost</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-cyver-purple">&lt;1s</div>
                  <div className="text-sm text-muted-foreground">Transaction finality</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-cyver-cyan">24/7</div>
                  <div className="text-sm text-muted-foreground">AI agent availability</div>
                </div>
              </motion.div>

              <motion.div 
                className="text-xs text-muted-foreground mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                *Based on current Base Network gas fees. Actual costs may vary depending on network congestion.
              </motion.div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default TransactionCost; 