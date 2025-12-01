import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', size = 'md', to, href, className = '', ...props }) => {
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-white text-black border-2 border-black hover:bg-gray-100',
    outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
  };
  const sizes = { sm: 'px-6 py-3 text-sm', md: 'px-10 py-4 text-lg', lg: 'px-14 py-6 text-xl' };
  const base = `inline-block font-medium tracking-widest uppercase transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={base} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base} {...props}>{children}</a>;
  return <button className={base} {...props}>{children}</button>;
};

export default Button;