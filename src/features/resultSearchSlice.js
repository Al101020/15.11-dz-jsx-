import { createSlice } from '@reduxjs/toolkit';
import { fetchAddMovies } from '../api/fetchData'

const initialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    addMovie: (state) => {
      state.movies = [...state.movies, action.payload];
    },
    addMovie: (state) => {
      console.log(state);
    },
    movies: (state) => {
      state.movies = action.payload
    },
  },  // extraReducers // если нужно подписаться
  extraReducers: (builder) => {
    builder.addCase(fetchAddMovies.pending, (state) => {
      console.log(' bkuvcutcv ');
      state.status = 'Pending';
    // state.isLoading = true;
    // state.status = null;
    })
    .addCase(fetchAddMovies.fulfilled, (state, action) => {
      console.log(' bkuvcutcv ');
      state.status = 'Fulfilled';
      state.data = action.payload;
      // state.isLoading = false;
      // state.status = action.payload.message;
      // state.user = action.payload.newUser;
      // state.token = action.payload.token;
    })
    .addCase(fetchAddMovies.rejected, (state, action) => {
      console.log(' bkuvcutcv ');
      state.status = 'Rejected';
      // state.isLoading = false;
      // state.status = action.payload.message;
    });
  
  
  }

  // extraReducers: {
  //   [fetchAddMovies.pending] : (state) => {
  //     state.status = 'Pending';
  //   },

  //   [fetchAddMovies.fulfilled] : (state, action) => {
  //     state.status = 'Fulfilled';
  //     state.data = action.payload;
  //   },

  //   [fetchAddMovies.rejected] : (state) => {
  //     state.status = 'Rejected';
  //   }
  // }
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
