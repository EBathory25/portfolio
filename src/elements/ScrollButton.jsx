import React,{useState, useEffect} from 'react';
import Up_Arrow from './svg/up_arrow'

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-button ${isVisible ? 'block fade-in':'fade-out'} mt-4 px-6 py-2 fixed bottom-10 right-10 z-50 bg-dark-blue text-creamy-white rounded-full hover:bg-blue-700`}
    >
      <Up_Arrow/>
    </button>
  );
};


export default ScrollButton