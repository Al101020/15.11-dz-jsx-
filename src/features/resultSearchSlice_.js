import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

export const objVar = {};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    moviesAction: (state) => {
      state.movies = action.payload,
      objVar.state = state
    },
    movies: (state) => { state.movies = action.payload }, // (state) => { console.log(state) },
  },
});
console.log(moviesSlice.actions);

export const { moviesAction, movies } = moviesSlice.actions;

export default moviesSlice.reducer;



export const selectMovies = (state) => state.moviesSlice.movies;
console.log(selectMovies);

console.log(objVar);
