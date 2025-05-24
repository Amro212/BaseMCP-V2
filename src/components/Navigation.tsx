import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const { scrollY } = useScroll();
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        style={{ opacity: navBackgroundOpacity }}
      />
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              window.history.pushState('', document.title, window.location.pathname);
            }}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyver-cyan to-cyver-purple animate-glow-pulse"></div>
            <span className="text-xl font-bold tracking-tight">BaseMCP</span>
          </a>
        </div>
        <nav>
          <ul className="flex items-center space-x-8">
            <li className="hidden sm:block">
              <a href="#features" className="text-sm group relative">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Features</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyver-cyan to-cyver-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#examples" className="text-sm group relative">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Examples</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyver-cyan to-cyver-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#how-it-works" className="text-sm group relative">
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">How It Works</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyver-cyan to-cyver-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-muted/50 border-muted hover:shadow-lg hover:shadow-cyver-cyan/20 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/base/base-mcp?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline-block">GitHub</span>
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
