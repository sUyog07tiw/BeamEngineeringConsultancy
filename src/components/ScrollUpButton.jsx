import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 600);
    window.addEventBusListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-black text-white transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:bg-gray-900`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollUpButton;