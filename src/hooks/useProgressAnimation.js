import { useEffect, useRef, useState } from 'react';

export const useProgressAnimation = (targetValues, delayMap = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState(
    Object.keys(targetValues).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate values with staggered timing
          Object.entries(delayMap).forEach(([key, delay]) => {
            setTimeout(() => {
              setValues(prev => ({ ...prev, [key]: targetValues[key] }));
            }, delay);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValues, delayMap]);

  return { ref, isVisible, values };
};
