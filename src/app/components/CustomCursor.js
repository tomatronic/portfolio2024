'use client';
import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      *, *:before, *:after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updateMousePosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      const dx = mouseRef.current.x - cursorRef.current.x;
      const dy = mouseRef.current.y - cursorRef.current.y;
      const ease = 0.3;

      cursorRef.current.x += dx * ease;
      cursorRef.current.y += dy * ease;

      setMousePosition({
        x: cursorRef.current.x,
        y: cursorRef.current.y
      });

      animationRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', updateMousePosition);
    animateCursor();

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        width: '16px',
        height: '16px',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
        backgroundColor: '#BF90F8',
      }}
    />
  );
};

export default CustomCursor;