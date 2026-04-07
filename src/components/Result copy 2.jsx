// import type { JSX } from 'react';
import { useContext } from 'react';
// import React, { FC } from 'react';

import appStore from '../app/store';
// console.log(appStore);

import { useSelector, useDispatch } from 'react-redux';

import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  selectCount,
  //
  selectMovies,
  //
} from '../features/resultSearchSlice';


const Result = () => {
  //
  const movies = useSelector(selectMovies); 
  console.log(movies);
  // if (!movies.length) {
  //   console.log("Массив пуст");
  // } else {
  //   console.log("Массив НЕ пуст");
  // }
  //
  const count = useSelector(selectCount);
  
  // const store = useContext(appStore); // const store = useContext(appStore: React.FC); // нет
  // console.log(store);

  return (
    <>
      <div className='result'>Результат</div>
      <span>{count}</span>
    </>
    

  )
}

export default Result;
