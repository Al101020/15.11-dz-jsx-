import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '64405bd2';

const fetchDetailsMovie = createAsyncThunk(
  'moviesSearch/fetchMovies',// ob
  async (id, thunkAPI) => {
    console.log(id);
    
    try {
      if (id === '' || id === undefined) {
        return;
      };
      console.log(id);

      const response = 
      // await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&s=${ob.textInput}`);
      // Детали: https://www.omdbapi.com?apikey=YOUR_KEY&i=MOVIE_ID

      await fetch(`https://www.omdbapi.com?apikey=${apiKey}&i=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        console.log(data);//
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchDetailsMovie;
