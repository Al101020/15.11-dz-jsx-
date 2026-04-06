import type { JSX } from 'react';
import { useContext } from 'react';
// import React, { FC } from 'react';

import appStore from '../app/store';
// console.log(appStore);

const Result = (): JSX.Element => {
  
  // const store = useContext(appStore); // const store = useContext(appStore: React.FC); // нет
  // console.log(store);

  return (
    <div className='result'>Результат</div>
  )
}

export default Result;
