import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageTransition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the transition after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main gradient overlay */}
      <motion.div
        className="fixed inset-0 z-50"
        initial={{ 
          background: "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
        }}
        animate={{ 
          background: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)"
        }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
      />
      
      {/* Secondary shadow layer for depth */}
      <motion.div
        className="fixed inset-0 z-40"
        initial={{ 
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 20%, rgba(0,0,0,1) 80%)"
        }}
        animate={{ 
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%)"
        }}
        transition={{ 
          duration: 1.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
      />

      {/* Loading indicator */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white"
        >
          <div className="w-8 h-8 border border-cyver-cyan/40 rounded-full animate-pulse">
            <div className="w-full h-full border border-cyver-cyan rounded-full animate-ping"></div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PageTransition; 