import React, { useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const steps = [
    {
      id: 1,
      title: "AI Input",
      description: "User prompts Claude or any AI agent with a blockchain task"
    },
    {
      id: 2,
      title: "Tool Selection",
      description: "BaseMCP identifies the appropriate onchain tool for the task"
    },
    {
      id: 3,
      title: "Blockchain Action",
      description: "Tool executes the requested action on the Base network securely"
    },
    {
      id: 4,
      title: "Response & Feedback",
      description: "Returns clear results and transaction confirmation to the user"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative py-24 bg-gradient-to-b from-background to-card/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-shimmer animate-text-shimmer rounded-lg opacity-35 blur-sm"></span>
              <span className="relative z-10">How It Works</span>
            </span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            The Model Context Protocol (MCP) server bridges AI agents with blockchain functionality
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline center line with animated growth */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div 
              className="h-full w-full bg-gradient-to-b from-cyver-cyan to-cyver-purple"
              style={{ 
                height: lineHeight, 
                backgroundSize: "200% 200%"
              }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <AnimateOnScroll 
                key={step.id} 
                delay={index * 150}
                className="relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Circle indicator on timeline - Fixed hover styling */}
                  <div 
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-card border-2 border-cyver-cyan shadow-lg shadow-cyver-cyan/20 items-center justify-center z-10 hover:border-cyver-purple transition-colors duration-300"
                  >
                    <span className="text-xs font-medium">{step.id}</span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <motion.div 
                      className={`bg-card rounded-lg border border-muted p-6 shadow-lg shadow-cyver-cyan/5 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-cyver-cyan">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block flex-1" />
                </div>
                
                {/* Connect arrows between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-2 md:hidden">
                    <ArrowRight className="h-6 w-6 text-cyver-cyan animate-pulse" />
                  </div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
