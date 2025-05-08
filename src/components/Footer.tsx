import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/favicon.ico" alt="BaseMCP Favicon" className="h-12 w-12 mr-2" />
            <span className="font-bold text-lg">BaseMCP</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded text-xs font-mono">npm v1.0.13</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <a 
                href="https://github.com/base/base-mcp/blob/master/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                MIT License
              </a>
            </div>
            
            <a 
              href="https://github.com/base/base-mcp?tab=readme-ov-file" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © 2025 BaseMCP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
