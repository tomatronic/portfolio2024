'use client';
import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateMousePosition);
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const size = isHovering ? 80 : 16;

  return (
    <div
      style={{
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
      }}
    >
      {/* Solid Color Layer */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#BF90F8', // your brand colour here
          borderRadius: '50%',
          transition: 'all 0.3s ease',
        }}
      />
      {/* Invert Layer */}
      {isHovering && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backdropFilter: 'invert(1)',
            WebkitBackdropFilter: 'invert(1)',
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
