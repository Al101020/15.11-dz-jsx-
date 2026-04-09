import { createAsyncThunk } from '@reduxjs/toolkit';

export default async function fetchData(apiKey, textInput, dispatch, addMovies) {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${textInput}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);    // dispatch(addMovies); // -- с помощью Thunk надо.
  })
  .catch(error => console.error('Fetch error:', error));
};
