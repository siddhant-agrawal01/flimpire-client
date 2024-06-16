import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
