import { createSlice } from '@reduxjs/toolkit';
// import { fetchAddMovies } from '../api/fetchData'
import fetchMovies from '../api/fetchMovies';


const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    clearError: (state) => {
       console.log(' bkuvcutcv ');
      state.isError = false;
      state.error = '';
    },
    
    addMovie: (state) => {
      console.log(' bkuvcutcv ');
      state.movies = [...state.movies, action.payload];
    },
    movies: (state) => {
      console.log(' bkuvcutcv ');
      state.movies = action.payload
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
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // Записываем массив пользователей, пришедший с сервера, в state.items
        // state.items = action.payload;
        if (!action.payload || !action.payload.Title) {
          return;
        };
        state.movies.push(action.payload);

        // if (action.payload.Title) {
        //   state.movies.push(action.payload);
        // };
      })
      // Обработка ошибки (rejected)
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // Сохраняем сообщение об ошибке. Используем action.payload, т.к. использовали rejectWithValue
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const selectMoviesObj = (state) => state.moviesObj;//
export const selectMovies = (state) => state.moviesObj.movies;//
export const selectAddMovie = (state) => state.moviesObj.addMovie;//

export const { movies, addMovie, clearError } = moviesSlice.actions; // --- // console.log(movies);
export default moviesSlice.reducer;




// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// };

// ----- до 2026.04.09
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchAddMovies } from '../api/fetchData'

// const initialState = {
//   movies: [],
// };

// export const moviesSlice = createSlice({
//   name: 'moviesSearch',
//   initialState,
//   reducers: {
//     addMovie: (state) => {
//       console.log(' bkuvcutcv ');
//       state.movies = [...state.movies, action.payload];
//     },
//     // addMovie: (state) => {
//     //   console.log(state);
//     // },
//     movies: (state) => {
//       console.log(' bkuvcutcv ');
//       state.movies = action.payload
//     },
//   },  // extraReducers // если нужно подписаться
//   extraReducers: (builder) => {
//     builder.addCase(fetchAddMovies.pending, (state) => {
//       console.log(' bkuvcutcv ');
//       state.status = 'Pending';
//     // state.isLoading = true;
//     // state.status = null;
//     })
//     .addCase(fetchAddMovies.fulfilled, (state, action) => {
//       console.log(' bkuvcutcv ');
//       state.status = 'Fulfilled';
//       state.data = action.payload;
//       // state.isLoading = false;
//       // state.status = action.payload.message;
//       // state.user = action.payload.newUser;
//       // state.token = action.payload.token;
//     })
//     .addCase(fetchAddMovies.rejected, (state, action) => {
//       console.log(' bkuvcutcv ');
//       state.status = 'Rejected';
//       // state.isLoading = false;
//       // state.status = action.payload.message;
//     });
  
  
//   }

//   // extraReducers: {
//   //   [fetchAddMovies.pending] : (state) => {
//   //     state.status = 'Pending';
//   //   },

//   //   [fetchAddMovies.fulfilled] : (state, action) => {
//   //     state.status = 'Fulfilled';
//   //     state.data = action.payload;
//   //   },

//   //   [fetchAddMovies.rejected] : (state) => {
//   //     state.status = 'Rejected';
//   //   }
//   // }
// });

// export const selectMovies = (state) => state.moviesArr.movies;//
// export const selectAddMovie = (state) => state.moviesArr.addMovie;//

// export const { movies, addMovie } = moviesSlice.actions; // --- // console.log(movies);
// export default moviesSlice.reducer;
// ----- конец 2026.04.09