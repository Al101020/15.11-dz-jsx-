import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '64405bd2';

const fetchDetailsMovie = createAsyncThunk(
  'details/fetchDetailsMovie',
  async (ob, thunkAPI ) => {

    try {
      if (ob.id === '' || ob.id === undefined) {
        return;
      };
      console.log(ob);
      const dispach =  ob.dispach;
      const upgradeDetails = ob.upgradeDetails;

      const response = await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&i=${ob.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      } else {
        const data = await response.json();
        console.log(data);
        dispach(upgradeDetails(data));
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchDetailsMovie;
