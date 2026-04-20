import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/resultSearchSlice';
import detailsReducer from '../features/detailsSlice';

const store = configureStore({
  reducer: {
    moviesObj: moviesReducer,
    detailsObj: detailsReducer,
  },
});

export default store;
