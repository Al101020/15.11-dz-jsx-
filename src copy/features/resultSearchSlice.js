import { createSlice, current } from '@reduxjs/toolkit';// import { fetchAddMovies } from '../api/fetchData'
import fetchMovies from '../api/fetchMovies';


const initialState = {
  movies: [],
  favorites: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.isError = false;
      state.error = '';
      console.log(current(state));//
    },    
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
      console.log(current(state));//
    },
    movies: (state, action) => {
      state.movies = action.payload;
      console.log(current(state));//
    },
    addFavorite(state, action) {
      // Здесь можно добавить логику для проверки наличия элемента в массиве и его добавления
      state.favorites.push(action.payload);
      console.log(current(state));//
    },
    removeFavorite(state, action) {
      // Здесь можно добавить логику для удаления элемента из массива
      state.favorites = state.favorites.filter(item => item !== action.payload);
      console.log(current(state));//
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchMovies.fulfilled, (state, action) => {// console.log('Загрузка УСПЕШНА');
        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        state.movies = action.payload.Search;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const selectMoviesObj = (state) => state.moviesObj;//
export const selectMovies = (state) => state.moviesObj.movies;//
export const selectAddMovie = (state) => state.moviesObj.addMovie;//

export const { movies, addMovie, clearError } = moviesSlice.actions;
export const { addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
