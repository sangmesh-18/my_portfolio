import React, { useEffect, useState, useRef } from 'react';
import './cursor.css';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursorPosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const animate = (timestamp) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth easing for natural movement
        const ease = 0.15;
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        if (cursorRef.current) {
          cursorRef.current.style.left = `${cursorX}px`;
          cursorRef.current.style.top = `${cursorY}px`;
        }
      }
      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
    />
  );
};

export default CustomCursor;

