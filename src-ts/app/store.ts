import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// Выведите типы `rootState` и `AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// Предполагаемый тип: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch






// import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import ResultSearchSlice from './ResultSearchSlice';

// const rootReducer = combineSlices(ResultSearchSlice);
// export type RootState = ReturnType<typeof rootReducer>;

// // const {found} = ResultSearchSlice.actions;// console.log(ResultSearchSlice.actions);
// // console.log(found); // проверка

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;

// export const makeStore = (preloadedState?: Partial<RootState>) => {
//   const store = configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
//   return store;
// };

// const store = makeStore();
// export default store;

// console.log(store);
