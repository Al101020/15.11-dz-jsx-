import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: 0,
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    movies: (state) => {
      state.movies = action.payload
    },
  },
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
};

// export const selectCount = (state) => {
//   state.counter.value;
//   console.log(state);
// } 

export const selectMovies = (state) => {
  console.log(state.moviesArr.movies);
  state.moviesArr
};//

export default moviesSlice.reducer;
