import { createSlice } from "@reduxjs/toolkit";

const initData = {}; // console.log(initData); // {}

export const ResultSearchSlice = createSlice({
  name: 'found',
  initialState: initData,
  reducers: {
    found: (state, action) => {
      // изменение состояния, или обновление найденого?
      console.log(state); // ???
      console.log(action); // ???
    }
  },
})

export default ResultSearchSlice;





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