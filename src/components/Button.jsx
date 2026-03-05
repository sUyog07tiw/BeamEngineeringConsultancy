import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', size = 'md', to, href, className = '', ...props }) => {
  const variants = {
    primary: 'bg-blue text-white hover:bg-blue-dark',
    secondary: 'bg-white text-blue border-2 border-blue hover:bg-blue-light/10',
    outline: 'bg-transparent text-blue border-2 border-blue hover:bg-blue hover:text-white',
    minimal: 'bg-transparent text-blue hover:bg-blue-light/10 border-none',
  };
  const sizes = { sm: 'px-6 py-3 text-sm', md: 'px-10 py-4 text-lg', lg: 'px-14 py-6 text-xl' };
  const base = `inline-block font-medium tracking-widest uppercase transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={base} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base} {...props}>{children}</a>;
  return <button className={base} {...props}>{children}</button>;
};

export default Button;