import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  movies: [],
};

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// });

export const moviesSlice = createSlice({
  name: 'moviesSearch',
  initialState,
  reducers: {
    movies: (state) => {
      state.movies = action.payload
    },
  },
});

// console.log(counterSlice);
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
};

export const selectCount = (state) => state.counter.value;

export const selectMovies = (state) => state.counter.movies;//

// export default counterSlice.reducer;
export default moviesSlice.reducer;




    // 2026.04.06

// import { createSlice } from "@reduxjs/toolkit";

// const initData = {}; // console.log(initData); // {}

// export const ResultSearchSlice = createSlice({
//   name: 'found',
//   initialState: initData,
//   reducers: {
//     found: (state, action) => {
//       // изменение состояния, или обновление найденого?
//       console.log(state); // ???
//       console.log(action); // ???
//     }
//   },
// })

// export default ResultSearchSlice;





// import type { JSX } from 'react';

// const Result = (): JSX.Element => {
// const ResultSearchSlice = ({
//   name: 'found',
//   initialState: initData,
//   reducers: {
//     purchase: (state, action) => {
//       // изменение состояния
//     },
//     deleteItem: (state, action) => {
//       // изменение состояния
//     },
//   }
// })