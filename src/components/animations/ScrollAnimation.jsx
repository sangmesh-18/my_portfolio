import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './animations.css';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  threshold = 0.3,
  once = true 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, once });

  return (
    <div
      ref={ref}
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

