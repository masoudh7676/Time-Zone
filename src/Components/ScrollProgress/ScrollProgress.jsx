import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollPercent(scrolled > 100 ? 100 : scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollPercent === 0) {
    return null;
  }

  return (
    <div className="fixed top-19 xl:top-27 left-0 w-full  text-white text-center font-bold py-1 z-120 select-none text-sm">
      <p className='w-15 h-15 bg-[#ff003c] mx-auto p-2 text-center rounded-4xl'>{Math.round(scrollPercent)}% viewed</p>
    </div>
  );
};

export default ScrollProgress;
