


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchMovies } from "../features/movies/moviesSlice";

const EditMovie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);
  const movie = movies.find((movie) => movie._id === id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title,
        description: movie.description,
        releaseYear: movie.releaseYear,
        genre: movie.genre,
        imageUrl: movie.imageUrl,
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/movies/${id}`, formData);
      dispatch(fetchMovies());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mx-auto pt-20">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Movie</h1>
        <img src={movie.imageUrl} alt={movie.title} className="w-32 h-32 object-cover rounded-lg mb-4 mx-auto" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Release Year</label>
            <input
              type="number"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
