
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//   const response = await axios.get("/api/movies");
//   return response.data;
// });

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState: {
//     movies: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.movies = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default moviesSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiUrl = process.env.REACT_APP_API_URL;

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//   const response = await axios.get(`${apiUrl}/movies`);
//   return response.data;
// });

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState: {
//     movies: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.movies = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default moviesSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Thunks for async actions
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(`${apiUrl}/api/movies`);
  return response.data;
});

export const addMovie = createAsyncThunk('movies/addMovie', async (movieData) => {
  const response = await axios.post(`${apiUrl}/api/movies`, movieData);
  return response.data;
});

export const updateMovie = createAsyncThunk('movies/updateMovie', async ({ id, movieData }) => {
  const response = await axios.put(`${apiUrl}/api/movies/${id}`, movieData);
  return response.data;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id) => {
  await axios.delete(`${apiUrl}/api/movies/${id}`);
  return id;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(movie => movie._id === action.payload._id);
        state.movies[index] = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(movie => movie._id !== action.payload);
      });
  },
});

export default moviesSlice.reducer;
