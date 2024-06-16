
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { fetchMovies } from "../features/movies/moviesSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.movies.find((movie) => movie._id === id));

  const [rating, setRating] = useState(movie?.rating || 0);
  const [review, setReview] = useState(movie?.review || "");

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/movies/${id}`);
      dispatch(fetchMovies());
      navigate("/watchlist");
    } catch (err) {
      console.error(err);
    }
  };

  const handleWatchedToggle = async () => {
    try {
      await axios.put(`/api/movies/${id}`, { watched: !movie.watched });
      dispatch(fetchMovies());
    } catch (err) {
      console.error(err);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/movies/${id}`, { rating, review });
      dispatch(fetchMovies());
    } catch (err) {
      console.error(err);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto pt-20">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">{movie.title}</h1>
        <img src={movie.imageUrl} alt={movie.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-300 mb-4">{movie.description}</p>
        <p className="text-gray-400 mb-4">Release Year: {movie.releaseYear}</p>
        <p className="text-gray-400 mb-4">Genre: {movie.genre}</p>
        <p className="text-gray-400 mb-4">Watched: {movie.watched ? "Yes" : "No"}</p>
        <button
          onClick={handleWatchedToggle}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300 mb-4"
        >
          Mark as {movie.watched ? "Unwatched" : "Watched"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 mb-4 ml-4"
        >
          Delete Movie
        </button>
        <Link to={`/edit/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 mb-4 ml-4">
          Edit Movie
        </Link>
        <form onSubmit={handleReviewSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-white mb-1">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              min="1"
              max="5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieDetails;
