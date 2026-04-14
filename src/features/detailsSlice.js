import { createSlice } from '@reduxjs/toolkit';// import { fetchAddMovies } from '../api/fetchData'
// import fetchMovies from '../api/fetchMovies';
import fetchDetailsMovie from '../api/fetchDetailsMovie';


const initialState = { // Details
  details: '',
  isLoadingDetails: false,
  isErrorDetails: false,
  errorDetails: '',
};

export const detailsSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.isError = false;
      state.error = '';
    },
    details: (state, action) => {
      state.details = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchDetailsMovie.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Сбрасываем флаг ошибки при новом запросе
        state.error = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchDetailsMovie.fulfilled, (state, action) => {// console.log('Загрузка УСПЕШНА');
        state.isLoading = false;
        state.isError = false;
        if (action.payload === undefined) {
          return;
        }
        state.movies = action.payload.Search;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchDetailsMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

// export const selectMoviesObj = (state) => state.moviesObj;//
// export const selectMovies = (state) => state.moviesObj.movies;//
// export const selectAddMovie = (state) => state.moviesObj.addMovie;//

// export const { movies, addMovie, clearError } = moviesSlice.actions;
// export const { addFavorite, removeFavorite } = moviesSlice.actions;

export const { clearError, details } = detailsSlice.actions;

export default detailsSlice.reducer;
