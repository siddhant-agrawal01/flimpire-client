


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 py-4 transition duration-300 ${isScrolled ? 'bg-gray-950 bg-opacity-75 backdrop-blur-md' : 'bg-gray-950'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/" className="text-3xl font-bold">Filmpire</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/add" className="hover:text-gray-400">Add Movie</Link>
          <Link to="/watchlist" className="hover:text-gray-400">Watchlist</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-950`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/add" className="block hover:text-gray-400">Add Movie</Link>
          <Link to="/watchlist" className="block hover:text-gray-400">Watchlist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
