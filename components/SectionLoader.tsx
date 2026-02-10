import React, { useState, useEffect, useRef, Suspense } from 'react';

interface SectionLoaderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  minHeight?: string;
  threshold?: number;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({ 
  children, 
  id, 
  className = "", 
  minHeight = "50vh", // Default minimum height to prevent layout shifts
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Load content when element is 200px away from viewport or intersecting
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before the element comes into view
        threshold: threshold
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [threshold]);

  return (
    <div 
      ref={containerRef} 
      id={id} 
      className={className} 
      style={{ minHeight: isVisible ? 'auto' : minHeight }}
    >
      {isVisible ? (
        <Suspense 
          fallback={
            <div className="flex justify-center items-center w-full h-full py-32 opacity-50">
              <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
            </div>
          }
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default SectionLoader;