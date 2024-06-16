import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="container mx-auto pt-24 ">
      <h1 className="text-4xl font-bold text-white mb-6">My Watchlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
