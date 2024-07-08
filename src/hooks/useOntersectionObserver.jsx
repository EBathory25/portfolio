import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, options = { threshold: 0.1 }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        options
      );
  
      const currentRef = ref.current;
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [ref, options]);
  
    return isIntersecting;
  };
  
  export default useIntersectionObserver;