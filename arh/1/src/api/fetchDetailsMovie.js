import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '64405bd2';

const fetchDetailsMovie = createAsyncThunk(
  'details/fetchDetailsMovie',
  async (imdbID, thunkAPI ) => {

    try {
      console.log(imdbID);
      if (apiKey === '' || imdbID === undefined) {
        return;
      };
      console.log(imdbID);

      const response = await fetch(`https://www.omdbapi.com?apikey=${apiKey}&i=${imdbID}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchDetailsMovie;
