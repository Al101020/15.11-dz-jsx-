import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/resultSearchSlice';

const store = configureStore({
  reducer: {
    moviesArr: moviesReducer,
  },
});

export default store;
