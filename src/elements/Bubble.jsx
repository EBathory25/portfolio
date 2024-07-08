import {useRef, useEffect, useState} from 'react';
import Line from './svg/Line';


const Bubble = ({ children, direction, bubbleDelay }) => {
  const bubbleRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (bubbleRef.current) {
      observer.observe(bubbleRef.current);
    }

    return () => {
      if (bubbleRef.current) {
        observer.unobserve(bubbleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      bubbleRef.current.classList.add('animate-bubble');
      console.log( bubbleRef.current.classList)
    } else {
      bubbleRef.current.classList.remove('animate-bubble');
    }
  }, [isIntersecting]);

    return (
      <div ref={bubbleRef} className={`bubble-container bg-transparent shadow-lg justify-center items-center text-center  rounded-lg p-4 text-left font-medium md:w-64 w-96` }>
         <div className={`hidden md:block`}>
        <Line direction={direction} />
        </div>
        <div >
        {children}
      </div>
        
      </div>
    );
  };
  

  export default Bubble