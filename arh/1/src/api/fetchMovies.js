import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchMovies = createAsyncThunk(
  'moviesSearch/fetchMovies',
  async (ob, thunkAPI) => {
    
    try {
      if (ob === undefined) {
        return;
      }
      const response = 
      await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&s=${ob.textInput}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchMovies;
