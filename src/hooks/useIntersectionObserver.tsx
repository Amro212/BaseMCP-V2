
import { useEffect, useState, useRef } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = false,
}: IntersectionObserverOptions = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<Element | null>(null);
  
  const frozen = isVisible && triggerOnce;

  useEffect(() => {
    const node = elementRef.current;
    if (!node || frozen) return;
    
    const observerParams = { root, rootMargin, threshold };
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      setIsVisible(entry.isIntersecting);
    }, observerParams);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, frozen]);

  const ref = (node: Element | null) => {
    elementRef.current = node;
  };

  return { ref, entry, isVisible };
}

export default useIntersectionObserver;
