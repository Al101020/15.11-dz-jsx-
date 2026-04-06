import { combineSlices, configureStore } from "@reduxjs/toolkit";
import ResultSearchSlice from './ResultSearchSlice';

const {found} = ResultSearchSlice.actions;// console.log(ResultSearchSlice.actions);
console.log(found);

const reducer = combineSlices(ResultSearchSlice);

export const store = configureStore({
  reducer,
});
