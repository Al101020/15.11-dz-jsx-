import { createSlice } from '@reduxjs/toolkit';

const initialState = {  // value: 0,
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    // addTransaction: (state, action) => {
    //   // Копируем весь массив и добавляем новый объект
    //   state.transactions = [...state.transactions, action.payload];
    // },
    // ---
    // todoAdded(state, action) {
    //   state.push(action.payload); // Добавляем объект в конец массива
    // },
    addMovie: (state) => {
      state.movies = [...state.movies, action.payload];
    },
    // addMovie: (state) => {
    //   console.log(state);
    // },
    movies: (state) => {
      state.movies = action.payload
    },
  },
  // extraReducers
});

export const selectMovies = (state) => state.moviesArr.movies;//
export const selectAddMovie = (state) => state.moviesArr.addMovie;//

export const { movies, addMovie } = moviesSlice.actions; // --- // console.log(movies);
export default moviesSlice.reducer;




// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// };
