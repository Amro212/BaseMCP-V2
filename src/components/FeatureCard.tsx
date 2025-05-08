
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  return (
    <motion.div 
      className={cn(
        "group relative bg-card rounded-lg p-6 transition-all duration-300",
        "hover:shadow-lg hover:shadow-cyver-cyan/20",
        "border border-muted hover:border-cyver-cyan/30",
        className
      )}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyver-cyan/5 to-cyver-purple/5 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="mb-4 text-3xl text-cyver-cyan group-hover:text-cyver-purple transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
      
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyver-cyan to-cyver-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default FeatureCard;
