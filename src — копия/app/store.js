import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/resultSearchSlice';
import usersSlice from '../features/users/usersSlice';


const store = configureStore({
  reducer: {
    moviesObj: moviesReducer,    // users: usersSlice,
  },
});

export default store;
