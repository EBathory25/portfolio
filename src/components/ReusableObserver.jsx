import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useOntersectionObserver';

const ReusableObserver = ({ className,addClass, removeClass, children,style, onClick }) => {
  const elementRef = useRef();
  const isIntersecting = useIntersectionObserver(elementRef);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isIntersecting ? addClass : removeClass}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ReusableObserver;