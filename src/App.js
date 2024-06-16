import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./features/movies/moviesSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/watchlist" element={<Home />} />

          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
