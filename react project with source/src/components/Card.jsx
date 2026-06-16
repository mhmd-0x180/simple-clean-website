import React, { useRef, useEffect } from 'react';

const Card = ({ title, children,className }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    
    <div ref={cardRef} className={`bg-gradient-to-br from-surface-light to-background-light dark:from-surface dark:to-background border border-border-light dark:border-border 
                                  rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out mouse-driven-border ${className}`}>
      <div className="text-xl font-semibold mb-4 text-color-primary duration-300 ">{title}</div>
      <div className="text-color-secondary">{children}</div>
    </div>
  );
};

export default Card;
