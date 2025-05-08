import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'; // Import a Prism CSS theme
import 'prismjs/components/prism-javascript'; // Import JavaScript language support
import 'prismjs/components/prism-typescript'; // Import TypeScript language support
import 'prismjs/components/prism-jsx'; // Import JSX language support
import 'prismjs/components/prism-tsx'; // Import TSX language support
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

interface TerminalProps {
  code: string;
  className?: string;
  animate?: boolean;
  delay?: number; // This will be used as the Typewriter's delay before starting
  language?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  code,
  className,
  animate = true,
  delay = 0, // Default delay for Typewriter
  language = 'tsx',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-trigger animation if it scrolls out and back in
    threshold: 0.1, // Start animation when 10% of the terminal is visible
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && animate) {
      // We can use this to trigger actions once when it becomes visible,
      // but Typewriter's onInit is better for starting its animation.
      // If we want to *only* animate the first time, setHasAnimated(true) here.
      // For now, we allow re-animation if `triggerOnce` is false.
    }
  }, [inView, hasAnimated, animate]);

  const getHighlightedCode = (codeString: string): string => {
    if (Prism.languages[language]) {
      return Prism.highlight(codeString, Prism.languages[language], language);
    }
    // Fallback for unsupported languages or if Prism component not loaded
    // Basic HTML escaping for non-highlighted code
    return codeString
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const highlightedCode = getHighlightedCode(code);

  return (
    <motion.div 
      ref={ref} // Attach the ref here
      className={cn("terminal relative group", className, `language-${language}`)}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <div className="terminal-dots">
        <div className="terminal-dot dot-red"></div>
        <div className="terminal-dot dot-yellow"></div>
        <div className="terminal-dot dot-green"></div>
      </div>
      
      <div className="terminal-content">
        <pre className="font-mono text-sm sm:text-base overflow-auto text-cyan-100">
          {(animate && inView) || !animate ? (
            animate ? (
              <Typewriter
                key={inView ? 'in-view' : 'out-of-view'} // Re-initialize when inView changes
                onInit={(typewriter) => {
                  if (inView) { // Start animation only if in view
                    typewriter
                      .pauseFor(delay)
                      .typeString(highlightedCode)
                      .start();
                  } else {
                    // Optional: If it goes out of view, you might want to clear or pause
                    // For simplicity, Typewriter usually handles its own cleanup on unmount/re-key
                  }
                }}
                options={{
                  delay: 12, // Typing speed for individual characters (reduced from 30)
                  loop: false,
                }}
              />
            ) : (
              // If not animating, render the highlighted code directly
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            )
          ) : (
            // Placeholder or initial static content before animation if needed
            // For now, render an empty code tag or just the cursor to maintain layout
            <code dangerouslySetInnerHTML={{ __html: '<span class="inline-block w-2 h-5 bg-cyan-400 animate-blink-caret"></span>' }} />
          )}
        </pre>
      </div>
    </motion.div>
  );
};

export default Terminal;
