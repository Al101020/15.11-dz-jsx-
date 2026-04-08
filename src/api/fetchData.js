import { createAsyncThunk } from '@reduxjs/toolkit';

export default async function fetchData(apiKey, textInput, dispatch, addMovies) {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${textInput}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // dispatch(addMovies); // -- с помощью Thunk надо.
  })
  .catch(error => console.error('Fetch error:', error));
};


export const fetchAddMovies = createAsyncThunk(
  'moviesSearch/addMovie',
  async (apiKey, textInput, dispatch, addMovies) => {
    return await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${textInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // dispatch(addMovies); // -- с помощью Thunk надо.
    })
    .catch(error => console.error('Fetch error:', error));
  }
); 






// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getUsers = createAsyncThunk(
//   'usersSlice/getUsers',
//   async () => {
//     return await fetch('http://localhost:4000').
//       then(res => res.json());
//   }
// );

// const initialState = {
//     status: null,
//     data: []
// }

// const usersSlice = createSlice({
//     name: 'usersSlice',
//     initialState,
//     extraReducers: {
//       [getUsers.pending] = (state) => {
//         state.status = 'Pending';
//       },

//       [getUsers.fulfilled] = (state, action) => {
//         state.status = 'Fulfilled';
//         state.data = action.payload;
//       },

//       [getUsers.rejected] = (state) => {
//         state.status = 'Rejected';
//       }
//     }
// });
// export default usersSlice.reducer;



// export const fetchAddMovies = createAsyncThunk(
//   'moviesSearch/addMovie',
//   async function fetchData(apiKey, textInput, dispatch, addMovies) {
//     fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${textInput}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);

//         // dispatch(addMovies); // -- с помощью Thunk надо.
//     })
//     .catch(error => console.error('Fetch error:', error));
//   }
// ); 