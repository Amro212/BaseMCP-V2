
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Security: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <motion.div 
            className="relative rounded-lg border border-destructive/30 bg-card p-8 overflow-hidden"
            whileHover={{ boxShadow: "0 0 30px rgba(255, 86, 86, 0.15)" }}
            animate={{ 
              boxShadow: ["0 0 10px rgba(255, 86, 86, 0.1)", "0 0 20px rgba(255, 86, 86, 0.2)", "0 0 10px rgba(255, 86, 86, 0.1)"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-destructive/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <motion.div 
                className="flex-shrink-0 p-3 bg-destructive/10 rounded-full"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <ShieldAlert className="h-8 w-8 text-destructive" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Security Reminder</span>
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  This is real onchain execution. Keep your seed phrase safe and always verify transactions before signing them.
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Never share your private keys with anyone, including AI agents</li>
                  <li>Always verify transaction details before approval</li>
                  <li>Use a hardware wallet for high-value transactions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Security;
