import React from 'react';
import { motion } from 'framer-motion';

const Multilingual: React.FC = () => {
  const messages = [
    "BaseMCP is for every agent",
    "BaseMCP لجميع وكلاء الذكاء الاصطناعي", 
    "BaseMCP es para cada agente",
    "BaseMCP适合每个代理",
    "BaseMCP è per ogni agente",
    "BaseMCP est pour chaque agent",
    "BaseMCP ni kwa kila wakala",
    "BaseMCP yɛ ma agent biara",
    "BaseMCP nye ame sia ame tɔ",
    "BaseMCP är för varje agent",
    "BaseMCP สำหรับทุกเอเจนต์",
    "BaseMCP для каждого агента",
    "BaseMCP für jeden Agenten",
    "BaseMCP her ajan için",
    "బేస్‌ఎంసిపి ప్రతి ఏజెంట్ కోసం",
    "हर एजेंट के लिए बेसएमसीपी",
    "BaseMCP é para todo agente",
    "BaseMCP bụ maka onye ọ bụla",
    "BaseMCP jest dla każdego agenta",
    "BaseMCP is voor elke agent"
  ];

  return (
    <section className="py-18 bg-card/20 border-y border-border/50 overflow-hidden">
      <div className="relative py-4">
        {/* First ticker row */}
        <motion.div
          className="flex whitespace-nowrap text-4xl md:text-5xl font-bold mb-1 leading-tight"
          style={{ lineHeight: '1' }}
          animate={{
            x: [0, -1920]
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {messages.concat(messages).map((message, index) => (
            <span
              key={index}
              className="mx-8 bg-gradient-to-r from-cyver-cyan via-cyver-purple to-cyver-cyan bg-clip-text text-transparent inline-block py-2"
            >
              {message} -
            </span>
          ))}
        </motion.div>

        {/* Second ticker row (reverse direction) */}
        <motion.div
          className="flex whitespace-nowrap text-4xl md:text-5xl font-bold opacity-60 leading-tight"
          style={{ lineHeight: '1.3' }}
          animate={{
            x: [-1920, 0]
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {messages.concat(messages).map((message, index) => (
            <span
              key={index}
              className="mx-8 bg-gradient-to-r from-cyver-purple via-cyver-cyan to-cyver-purple bg-clip-text text-transparent inline-block py-2"
            >
              {message} -
            </span>
          ))}
        </motion.div>

        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Multilingual; 