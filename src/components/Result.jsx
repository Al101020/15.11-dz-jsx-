// import type { JSX } from 'react';
import { useContext } from 'react';
// import React, { FC } from 'react';

import appStore from '../app/store';
// console.log(appStore);

import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../features/resultSearchSlice';


const Result = () => {
  
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
