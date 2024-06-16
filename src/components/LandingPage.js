

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const LandingPage = () => {
  const movies = useSelector((state) => state.movies.movies || []);
  // const recentlyAddedMovies = movies.slice(0, 5); 
  const recentlyAddedMovies = Array.isArray(movies) ? movies.slice(0, 5) : [];


  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % recentlyAddedMovies.length);
        setFade(false);
      }, 1000); 
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [recentlyAddedMovies.length]);

  const backgroundImage = recentlyAddedMovies[backgroundIndex]?.imageUrl || 'https://source.unsplash.com/random/1600x900';

  return (
    <div className='pt-16'>
      <div className={`relative  h-screen bg-cover bg-center transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 pt-40 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-white font-bold mb-4">Welcome to Filmpire</h1>
          <p className="text-xl text-gray-200 mb-8">Your ultimate movie watchlist manager</p>
          <Link to="/watchlist" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300">
            Explore Watchlist
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl text-white font-bold mb-4">Recently Added Movies</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {recentlyAddedMovies.map((movie) => (
            <div key={movie._id} className="flex-shrink-0 w-64">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
