import { createSlice, current } from '@reduxjs/toolkit';
import fetchDetailsMovie from '../api/fetchDetailsMovie';

const initialState = {
  details: {},
  isLoadingDetails: false,
  isErrorDetails: false,
  errorDetails: '',
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.isErrorDetails = false;
      state.errorDetails = '';
      console.log(current(state));//
    },
    upgradeDetails: (state, action) => {
      // console.log(action);
      state.details = [action.payload];
      // console.log(current(state));//
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки (pending)
      .addCase(fetchDetailsMovie.pending, (state) => {        // console.log('pending');
        state.isLoadingDetails = true;
        state.isErrorDetails = false; // Сбрасываем флаг ошибки при новом запросе
        state.errorDetails = '';
      })
      // Обработка успешной загрузки (fulfilled)
      .addCase(fetchDetailsMovie.fulfilled, (state, action) => {
        // console.log('Загрузка УСПЕШНА');
        // console.log(state);
        // console.log(action);
        state.isLoadingDetails = false;
        state.isErrorDetails = false;
        if (action.payload === undefined) {
          return;
        }
        // state.movies = action.payload.Search;
        state.details = action.payload;
      })
      // Обработка ошибки (rejected)
      .addCase(fetchDetailsMovie.rejected, (state, action) => {
        state.isLoadingDetails = false;
        state.isErrorDetails = true;
        state.errorDetails = action.payload || 'Something went wrong';
      });
  },
});

export const selectDetailsObj = (state) => state.detailsObj;//
export const selectDetails = (state) => state.detailsObj.details;//
export const selectUpgradeDetails = (state) => state.detailsObj.upgradeDetails;

export const { clearError, upgradeDetails } = detailsSlice.actions;

export default detailsSlice.reducer;




// export const selectAddMovie = (state) => state.moviesObj.addMovie;//
// export const { movies, addMovie, clearError } = moviesSlice.actions;
// export const { addFavorite, removeFavorite } = moviesSlice.actions;
