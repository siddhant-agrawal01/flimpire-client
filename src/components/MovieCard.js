
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between h-full">
      <div>
        <img src={movie.imageUrl} alt={movie.title} className="w-full h-48 object-cover rounded-lg mb-4 sm:h-32 md:h-48" />
        <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
        <p className="text-gray-400">{movie.description}</p>
      </div>
      <div className="mt-auto">
        <Link
to={`/details/${movie._id}`} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 block mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
