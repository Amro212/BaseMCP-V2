
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

type AnimationVariant = 
  | 'fade-in'
  | 'slide-up' 
  | 'slide-down'
  | 'slide-in-right';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = false
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce,
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isVisible && !hasAnimated && triggerOnce) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated, triggerOnce]);

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-up' ? 20 : animation === 'slide-down' ? -20 : 0,
      x: animation === 'slide-in-right' ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    },
    exit: {
      opacity: 0,
      y: animation === 'slide-up' ? 20 : animation === 'slide-down' ? -20 : 0,
      x: animation === 'slide-in-right' ? 20 : 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  };

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div
        initial="hidden"
        animate={isVisible || hasAnimated ? "visible" : "hidden"}
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateOnScroll;
